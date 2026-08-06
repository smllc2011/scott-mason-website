const fs = require("fs");
const path = require("path");
const https = require("https");

const url = process.argv[2];
const out = process.argv[3];

if (!url || !out) {
  console.error("Usage: node fetch-wix-page.cjs <url> <output.html>");
  process.exit(1);
}

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      fs.writeFileSync(out, data);
      console.log("Saved", out, data.length, "bytes");
    });
  })
  .on("error", console.error);
