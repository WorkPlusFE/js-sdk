#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # lint
  echo "# lint"
  npm run lint

  # commit
  echo "# commit"
  npm version "$VERSION" --message "build: release $VERSION"

  # build
  echo "# build"
  VERSION=$VERSION 
  npm run build

  # generate release
  echo "# generate release"
  npm run release:note
  npm run release:version

  # publish
  echo "# publish"
  git push origin refs/tags/v"$VERSION"
  git push
  
  npm publish
fi