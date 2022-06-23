# lerna-test
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![npm publish](https://github.com/lffloyd/lerna-test/actions/workflows/publish.yaml/badge.svg)

Repo to test out a lerna-based monorepo structure. Configured with jest, typescript and nx for caching some steps.

## Environment
* [node >= 16.15.1](https://nodejs.org/en/download/) (LTS)

## Build
Run the build script using ```./build.sh```. This will execute TS transpilation and execute Jest testes.

## Commit
The project suggests the use of [commitizen](https://github.com/commitizen/cz-cli) to ease commit generation following the [conventional commits specs](#links). To install it, execute `npm install commitizen -g`

Now, when commiting, run `git cz` to open `commitizen` helper.

## Publishing
You can manually publish the packages or automatically generate the version bump based on commits since the last published versions using `conventional-commits`. For both, the login and verification steps are exactly the same, so they're described below.

First, login into your `npm` account with: `npm login`

Then, see what changed in the repository and will be published with: `npx lerna changed`. You'll see something like this if you have any unpublished changes:
```sh
lerna notice cli v5.1.4
lerna info Looking for changed packages since v1.0.0
lffloyd-test-function
lerna success found 1 package ready to publish
```

> PS: The changes must be commited. If you have uncommited changes on your git working area, lerna will just ignore them.

Now, you can either manually or automatically publish the packages. 

### Manual publishing
You can publish the changes using `npx lerna publish --no-private`. You will be asked which version to bump to:
```sh
lerna notice cli v5.1.4
lerna info current version 1.0.0
Enter passphrase for key '<your_ssh_key_path>':
lerna info Looking for changed packages since v1.0.0
? Select a new version (currently 1.0.0)
```
Once you select a version, Lerna will update the referred module `package.json` file with its new version, commit the changes and create a tag with the version. Please note that you can choose between major, minor or patch versions to bump.

### Automatic publishing
To automatically discover the version needed to bump for each package, just run `npx lerna publish --conventional-commits`. Lerna will ask if you accept the changes. If you want to automatically accept any suggestion, pass the `-y` argument to the same command.

Like on manual publishing, Lerna will update the versions, commit the changes and create tags. Lerna will also create a `CHANGELOG.md` for each package describing the relevant changes included on each version.

## Links

* [Angular commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
