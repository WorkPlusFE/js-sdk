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
  npm run lint

  # build
  VERSION=$VERSION 
  npm version "$VERSION" --message "build: release $VERSION"
  npm run build

  # commit
  git add .
  git commit -m "build: build $VERSION"
  
  # generate release note
  npm run release:note

  # publish
  git push origin refs/tags/v"$VERSION"
  git push
  
  npm publish
fi