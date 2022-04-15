const SimpleStorage = artifacts.require("SimpleStorage");

const migration: Truffle.Migration = (deployer) => {
  deployer.deploy(SimpleStorage);
};

module.exports = migration;

export {};
