#!/bin/sh

NOTFORCED=true

while getopts ":v:f" opt; do
  case ${opt} in
    v )
      VERSION=$OPTARG
      ;;
    f )
      NOTFORCED=false
      ;;
    \? ) echo "Usage: cmd [-v] [-f]"
      ;;
  esac
done

if [ -z "$VERSION" ]
then
  echo "You must input a version with the -v switch"
  exit 1
fi

if grep -Fq "\"version\": \"$VERSION\"," ./package.json
then
  echo "The version $VERSION of the qumranica api connectors already exists"
  if $NOTFORCED
  then
    echo "To force an overwrite of it, use the -f command line switch."
    exit 1
  fi
fi

echo "Building version $VERSION of the qumranica api connectors"

echo "Setting the version in package.json"
sed -i -E "s!\"version\": \".*\",!\"version\": \"$VERSION\",!" package.json

echo "Building all api connectors (see package.json, scripts)"
yarn generate-all

echo "Patching the libraries"
customizations/python/update-api.sh

exit 0