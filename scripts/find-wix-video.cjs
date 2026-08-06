const fs = require("fs");

const html = fs.readFileSync(
  require("path").join(__dirname, "../temp-wix-speaker.html"),
  "utf8",
);

const mp4 = [...html.matchAll(/https?:\/\/[^"'\\]+~mv2\.mp4[^"'\\]*/g)].map(
  (m) => m[0],
);
const yt = [...html.matchAll(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/g)].map(
  (m) => m[1],
);
const yt2 = [...html.matchAll(/youtu\.be\/([a-zA-Z0-9_-]+)/g)].map((m) => m[1]);

console.log("mp4:", [...new Set(mp4)]);
console.log("youtube embed:", [...new Set(yt)]);
console.log("youtu.be:", [...new Set(yt2)]);

const idx = html.indexOf("videoContainer");
if (idx !== -1) {
  console.log("\n--- snippet ---\n");
  console.log(html.slice(idx, idx + 2000));
}
