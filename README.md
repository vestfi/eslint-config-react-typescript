# eslint-config-react-typescript by Vest

Awesome coding styles and tools for programing in Vest.

## Development

### Install

Using `yarn` is needed to link the dependency:

```shell
yarn install  
```

### Link

In this folder:

```shell
yarn link
```

In the **project** folder where you want to test this library:

```shell
yarn link @vestfi/eslint-config-react-typescript
```

Now, any change on this package will be automatically reflected on the consumer project.

## Deployment

1. Don't forget to update the CHANGELOG.
2. Update the version using `yarn version`
3. Create the pull request and get it approved.
4. Once approved, merge your branch into `main`.
5. Checkout the `main` branch and run `yarn publish`.
6. Create a Release in GitHub using tags.
