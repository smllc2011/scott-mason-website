const fs = require("fs");

const html = fs.readFileSync(
  "c:/Users/vm028718/Downloads/Scott Mason/temp-wix.html",
  "utf8",
);

const idx = html.indexOf("videoContainer_comp-lnam8ilj");
console.log(html.slice(idx, idx + 2500));
