#!/bin/bash

changed_packages=$(npx lerna changed)
scope=$(node -e "console.log('{'+process.argv.slice(1).join(',')+'}')" $changed_packages)
if [[ $scope == "{}" ]]; then
    echo "No packages affected!" && exit 0
fi
echo $scope
