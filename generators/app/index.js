'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the ' + chalk.red('keystone-typescript') + ' generator!'
    ));

    var prompts = [
      {
        type: 'prompt',
        name: 'projectName',
        message: 'Enter project name',
        default: 'keystone-app'
      }, {
        type: 'prompt',
        name: 'userModel',
        message: 'Enter user model name',
        default: 'User'
      }, {
        type: 'prompt',
        name: 'adminLogin',
        message: 'Enter admin login',
        default: 'admin'
      }, {
        type: 'prompt',
        name: 'adminPassword',
        message: 'Enter admin password'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    const projectName = this.props.projectName;
    const userModel = this.props.userModel;

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/models/_User.ts'),
      this.destinationPath(`src/models/${userModel}.ts`),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
