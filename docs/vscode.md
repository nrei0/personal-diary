# Development on VSCode

For better development experience follow instructions to set up your environment.

## Setup VSCode launch.json to debug server

Add `.vscode/launch.json`

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Debug server",
      "restart": true,
      "sourceMaps": true
    }
  ]
}


```

## Setup VSCode project / user settings & plugins

**Install plugins**

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

**Set up project / user settings**

```
{
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.autoFixOnSave": false,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "eslint.options": {
    "autofix": true
  },
  "prettier.eslintIntegration": true,
  "prettier.tslintIntegration": false,
  "prettier.singleQuote": true,
  "editor.formatOnSave": true,
  "prettier.arrowParens": "avoid",
  "prettier.stylelintIntegration": true,
  "typescript.validate.enable": false,
  "javascript.validate.enable": true
}
```
