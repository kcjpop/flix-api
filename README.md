# Unofficial Flix API

An unofficial API documentation for [Flix](https://flix.dev/), deployed at https://flix-api.netlify.app.

## To get started

You need Node.js v16+ installed.

- Install pnpm if needed `npm i -g pnpm`

- Install packages with `pnpm install`

- Start the development server with `pnpm run dev`.

## To generate `api.json` file

`src/api.json` is the main source to generate pages. Whenever Flix has a new version, we need to update that file as well.

- Download a copy of `flix.jar` from https://github.com/flix/flix/releases/latest and place it at the root of this repo.

- Run:

```bash
$ java -jar ./flix.jar --doc
$ cp build/api/api.json src/
```

- Start the development server as instructed above.

## To build

- Run `pnpm run build`. This will generate a bunch of static HTML files in `dist/`.
