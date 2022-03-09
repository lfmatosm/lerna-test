#!/bin/bash

npm install || exit 1
npm run clean || exit 1
npm run bootstrap || exit 1
npm run build || exit 1
npm test || exit 1
