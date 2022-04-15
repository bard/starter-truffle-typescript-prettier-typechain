const HelloWorld = artifacts.require("HelloWorld");

const migration: Truffle.Migration = (deployer) => {
  deployer.deploy(HelloWorld);
};

module.exports = migration;

export {};
