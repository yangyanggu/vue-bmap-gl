#!/bin/sh

set -e

pnpm run build

cd ../dist/vue-map
npm publish --tag=next
cd -

echo "Publish completed"
