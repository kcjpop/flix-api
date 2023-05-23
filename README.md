# Unofficial Flix API

An unofficial API documentation for [Flix](https://flix.dev/), deployed at https://flix-api.netlify.app.

## To get started

You need Node.js v16+ installed.

- Install pnpm if needed `npm i -g pnpm`

- Install packages with `pnpm install`

- Start the development server with `pnpm run dev`

You should have a server running.

## To generate `api.json` file

- Download a copy of `flix.jar` from https://github.com/flix/flix/releases/latest and place it at the root of this repo.

- Run

```bash
$ java -jar ./flix.jar --doc
$ cp build/api/api.json src/
```

- You should have the latest `api.json`.

## To build

- Run `pnpm run build`

- You will have a bunch of static HTML files in `dist/` and can deploy that folder to Netlify, Cloudflare Pages, Vercel, etc.
