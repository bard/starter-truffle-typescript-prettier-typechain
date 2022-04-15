const Counter = artifacts.require("Counter");

const migration: Truffle.Migration = (deployer) => {
  deployer.deploy(Counter);
};

module.exports = migration;

export {};
