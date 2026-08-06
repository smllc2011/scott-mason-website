const fs = require("fs");

const html = fs.readFileSync("temp-wix-gallery.html", "utf8");

const blocks = html.split(/class="W4V2qg[^"]* wixui-image"/);
blocks.slice(1).forEach((block, i) => {
  const title = block.match(/title="([^"]+)"/)?.[1];
  const media = block.match(/media\/(faa3cc_[^/~]+)/)?.[1];
  console.log(i + 1, title || "(no title)", "->", media || "(no media)");
});
