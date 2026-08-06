const fs = require("fs");
const path = require("path");
const https = require("https");

const assets = [
  {
    url: "https://static.wixstatic.com/media/faa3cc_99affef1274444e4b6dcb8a3480add89~mv2.jpg",
    out: "public/images/photo-gallery/prison-transformation.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/faa3cc_ea79a6d8bb7d4327b553a77fb6fc26fb~mv2.jpg",
    out: "public/images/photo-gallery/drug-march-2014.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/faa3cc_e801d76a09bb4229a8e21d7a1edec084~mv2.jpg",
    out: "public/images/photo-gallery/prison-block.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/faa3cc_854b48a4f2334b92a7dd6146f61ef3ce~mv2.jpg",
    out: "public/images/photo-gallery/chaplain-badge.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/faa3cc_806ae550a4d4477980ac06649c028e27~mv2.jpg",
    out: "public/images/photo-gallery/church-office.jpg",
  },
  {
    url: "https://static.wixstatic.com/media/faa3cc_6fe0da34c3cc42d78129e207a6e7ca69~mv2.png",
    out: "public/images/management/carrie-mason.png",
  },
  {
    url: "https://static.wixstatic.com/media/faa3cc_a7a437dfd6a441cebfb3926bfa5234b3~mv2.png",
    out: "public/images/management/scott-mason.png",
  },
];

function download(url, outPath) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const file = fs.createWriteStream(outPath);
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(outPath);
          return download(res.headers.location, outPath).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

async function main() {
  for (const asset of assets) {
    const outPath = path.join(__dirname, "..", asset.out);
    process.stdout.write(`Downloading ${asset.out}... `);
    await download(asset.url, outPath);
    const size = fs.statSync(outPath).size;
    console.log(`${Math.round(size / 1024)} KB`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
