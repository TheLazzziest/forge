import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = join(fileURLToPath(import.meta.url), "..");
const distDir = join(__dirname, "..", "dist");
const port = parseInt(process.argv[2] || "8999", 10);

const mimeTypes = {
    ".json": "application/json",
    ".jsonl": "application/jsonl",
    ".md": "text/markdown",
    ".mjs": "application/javascript",
    ".ts": "application/typescript",
    ".html": "text/html",
};

createServer((req, res) => {
    let url = req.url === "/" ? "/index.json" : req.url;
    const filePath = join(distDir, url);

    if (!existsSync(filePath)) {
        res.writeHead(404);
        res.end("Not found");
        return;
    }

    const ext = extname(filePath);
    const mime = mimeTypes[ext] || "application/octet-stream";
    const data = readFileSync(filePath);

    res.writeHead(200, { "Content-Type": mime });
    res.end(data);
}).listen(port, () => {
    console.log(`Forge registry serving dist/ on http://localhost:${port}`);
});
