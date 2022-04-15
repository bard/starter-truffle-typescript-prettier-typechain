import { SimpleStorageInstance } from "../types/truffle-contracts";
import expect from "expect";
import BN from "bn.js";

const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  let simpleStorage: SimpleStorageInstance;

  before(async () => {
    simpleStorage = await SimpleStorage.deployed();
  });

  describe("storage", () => {
    it("can set and get values", async () => {
      await simpleStorage.set(42);
      const retrievedValue = await simpleStorage.get();
      expect(retrievedValue.eq(new BN("42"))).toBe(true);
    });
  });
});
