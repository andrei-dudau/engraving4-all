# engraving4all/backend

To run the backend in development mode:

```bash
yarn start
```

To run on a specific port:

```bash
PORT=<port> yarn start
```

## Generate client-side code

In this project directory you can run:

### `yarn run generate-client`

see package.json/scripts/generate-client:

```bash
openapi-generator-cli generate -i ./src/openapi.yaml -g typescript-axios -o ./generated-client
```

## Generate server-side code

In this project directory you can run:

### `yarn run generate-server`

see package.json/scripts/generate-server:

```bash
openapi-generator-cli generate -i ./src/openapi.yaml -g nodejs-express-server -o ./generated-server
```
