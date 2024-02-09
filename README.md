# eslint-config-react-typescript by Vest

Awesome coding styles and tools for programing in Vest.

## Development

### Install

Using `npm` is needed to link the dependency:

```shell
npm install  
```

### Link

In this folder:

```shell
npm link
```

In the **project** folder where you want to test this library:

```shell
npm link @vestfi/eslint-config-react-typescript
```

Now, any change on this package will be automatically reflected on the consumer project.

## Deployment

1. Make sure what kind of release it will be (fix, minor, major) depending on your commits (https://semantic-release.gitbook.io/semantic-release/#how-does-it-work).
2. Update the version with `yarn version` to ensure that the version on GitHub packages will match the one on the `package.json`.
3. Create the pull request and get it approved.
4. Once approved, merge your branch into `main` and the semantic release will take care of the rest.
