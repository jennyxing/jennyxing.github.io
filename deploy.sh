#!/usr/bin/env sh

# abort on errors
set -e

# delete current old docs folder
rm -rf ./docs

# build
yarn build

# rename the dist folder to docs for github-pages purposes
mv dist docs

# navigate into the build output directory
cd docs

# add CNAME file for custom domain
echo 'www.jennyxing.com' > CNAME

git add -A
git commit -m 'deploy'
git push origin master

cd -