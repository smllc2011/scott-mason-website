const fs = require("fs");

const html = fs.readFileSync(
  require("path").join(__dirname, "../temp-wix-drug-march.html"),
  "utf8",
);

const imgs = [
  ...new Set(
    [...html.matchAll(/static\.wixstatic\.com\/media\/[^"'\s<>]+/g)].map(
      (m) => "https://" + m[0].split("?")[0],
    ),
  ),
];

console.log(imgs.filter((u) => !u.includes("11062b_")).join("\n"));
