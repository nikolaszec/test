## How to build an application?

- development

  ```bash
  npm run build
  ```

- production

  ```bash
  npm run build:production
  ```

Open `dist/` directory in browser by `npm start`.

## How to develop an application?

```bash
npm run dev     # use webpack-dev-server
npm run watch   # use webpack -w
```

Open `dist/` directory in browser by `npm start`.

## Remove generated directory

If you would like to remove `dist/` directory:

```bash
npm run clear
```

If you would like to remove `node_modules/` and remove `dist/`

```bash
npm run clear:all
```

## Count LOC (Lines of Code)

If you would like to know how many lines of code you write:

```bash
npm run count
```

## Analysis of bundle file weight

If you would like to check how much a bundle file weight:

```bash
npm run build
npm run audit
```
