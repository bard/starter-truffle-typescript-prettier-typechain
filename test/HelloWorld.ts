import { HelloWorldInstance } from "../types/truffle-contracts";
import expect from "expect";

const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
  let helloWorld: HelloWorldInstance;

  before(async () => {
    helloWorld = await HelloWorld.deployed();
  });

  describe("message", () => {
    it("has a message", async () => {
      const message = await helloWorld.message();
      expect(message).toEqual("Hello, World!");
    });
  });
});
