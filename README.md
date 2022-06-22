# lerna-test
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![npm publish](https://github.com/lffloyd/lerna-test/actions/workflows/publish.yaml/badge.svg)

Repo to test out a lerna-based monorepo structure. Configured with jest and typescript.

## Environment
* node >= 12.22.10

## Build
Run the build script using ```./build.sh```. This will execute TS transpilation and execute Jest testes.

## Publishing
Login into your `npm` account with: `npm login`

Then, see what changed in the repository and will be published with: `npx lerna changed`. You'll see something like this if you have any unpublished changes:
```sh
lerna notice cli v5.1.4
lerna info Looking for changed packages since v1.0.0
lffloyd-test-function
lerna success found 1 package ready to publish
```

> PS: The changes must be commited. If you have uncommited changes on your git working area, lerna will just ignore them.

Now you can publish the changes using `npx lerna publish --no-private`. You will be asked which version to bump to:
```sh
lerna notice cli v5.1.4
lerna info current version 1.0.0
Enter passphrase for key '<your_ssh_key_path>':
lerna info Looking for changed packages since v1.0.0
? Select a new version (currently 1.0.0)
```
Once you select a version, Lerna will update the referred module `package.json` file with its new version, commit the changes and create a tag with the version.

