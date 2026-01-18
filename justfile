# Provide access to local Node module binaries, and makes just recipe commands
# behave more like script entries in Node.js package.json files:
export PATH := "./node_modules/.bin:" + env_var('PATH')

update:
    pnpm update --latest

test:
  vitest

test-coverage:
  vitest --run --coverage

build:
  tsup

check:
  tsc --noEmit

lint:
  biome check

fix:
  biome check --write --unsafe

openapi: && fix
  node ./openapi.ts

knip:
  knip
