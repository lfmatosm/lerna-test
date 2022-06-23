#!/bin/bash

changed_packages=$(npx lerna changed)
scope=$(node -e "console.log('{'+process.argv.slice(1).join(',')+'}')" $changed_packages)

if [[ $scope == "{}" ]]; then
    echo "No packages affected. Skipping '$@'..." && exit 0
else
    echo "Affected packages: $scope"
    $@ $scope
fi
