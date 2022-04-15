const Migrations = artifacts.require("Migrations");

const migration: Truffle.Migration = (deployer) => {
  deployer.deploy(Migrations);
};

module.exports = migration;

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
