'use strict';
const chalk = require('chalk');
exports.boilerplateChoice = [
  {
    name: `Create ${chalk.green('Res')} ${chalk.yellow('Server Side Render')} Awesome Web Application`,
    value: 'egg-react',
    pkgName: 'egg-react-webpack-boilerplate',
    choices: ['name', 'description', 'npm']
  },
  {
    name: `Create ${chalk.green('Res + TypeScript')} ${chalk.yellow('Server Side Render')} Web Application`,
    value: 'egg-react-typescript',
    pkgName: 'egg-react-typescript-boilerplate',
    choices: ['name', 'description', 'npm']
  },
  {
    name: `Create ${chalk.green('Res + Nunjucks')} ${chalk.yellow('HTML')} Web Application`,
    value: 'egg-react-html-boilerplate',
    pkgName: 'egg-react-html-boilerplate',
    choices: ['name', 'description', 'npm']
  },
  {
    name: `Create ${chalk.green('Res + Nunjucks')} ${chalk.yellow('Asset Render')} Web Application`,
    value: 'egg-react-asset-boilerplate',
    pkgName: 'egg-react-asset-boilerplate',
    choices: ['name', 'description', 'npm']
  }
];