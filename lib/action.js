'use strict';
const EasyCLI = require('@easy-team/easywebpack-cli');
const Command = require('egg-bin');
const ScriptCommand = require('egg-scripts');
const Config = require('./config');
module.exports = class ResAction extends EasyCLI.Action {

  constructor(command) {
    super(command);
  }

  initCustomizeConfig(options) {
    return Config.getResConfig(options);
  }


  dev() {
    const cmd = ['dev'];
    if (EasyCLI.utils.isEggTypeScriptProject(this.baseDir)) {
      cmd.push('-r');
      cmd.push('egg-ts-helper/register');
    }
    new Command(cmd).start();
  }

  debug() {
    new Command(['debug']).start();
  }

  test() {
    new Command(['test']).start();
  }

  cov() {
    new Command(['cov']).start();
  }

  start() {
    new ScriptCommand().start();
  }

  tsc() {
    const filepath = require.resolve('typescript/lib/tsc.js');
    this.command.tool.exec(`node ${filepath}`);
  }

};