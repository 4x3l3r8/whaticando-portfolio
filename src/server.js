// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createServer } from "http";
import next from "next";
import { parse } from "url";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

void app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    void handle(req, res, parsedUrl);
  }).listen(process.env.PORT ?? 3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
