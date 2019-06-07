# Development on VSCode

For better development experience follow instructions to set up your environment.

## Setup VSCode launch.json to debug BFF & API

Add `.vscode/launch.json`

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Debug BFF",
      "restart": true,
      "sourceMaps": true,
      "port": 8999
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Debug API",
      "restart": true,
      "sourceMaps": true,
      "port": 8998
    }
  ]
}
```

## Setup VSCode project / user settings & plugins

**Install plugins**

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

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
  "eslint.workingDirectories": ["src/front", "src/bff", "src/api"],
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
