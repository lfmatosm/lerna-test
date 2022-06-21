#!/bin/bash

just_affected=$1

npm install || exit 1
npm run clean || exit 1
npm run bootstrap || exit 1
if [[ $just_affected == "true" ]]; then
    npm run buildAffected || exit 1
    npm run testAffected || exit 1
    npm run publishCi || exit 1
else
    npm run build || exit 1
    npm test || exit 1
fi

