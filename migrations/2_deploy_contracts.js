/* global artifacts */
var Hasher = artifacts.require("./Hasher.sol");

module.exports = function(deployer) {
  deployer.deploy(Hasher);
};
