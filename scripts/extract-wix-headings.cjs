const fs = require("fs");

const html = fs.readFileSync("temp-wix-management.html", "utf8");

const headings = [
  ...html.matchAll(/<h[1-6][^>]*class="font_[^"]*"[^>]*>([\s\S]*?)<\/h[1-6]>/g),
].map((m) =>
  m[1]
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\u200b/g, "")
    .trim(),
);

headings.filter((t) => t.length > 3).forEach((t) => console.log("---\n" + t));
