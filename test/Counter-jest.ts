import { CounterInstance } from "../types/truffle-contracts";
import expect from "expect";
import BN from "bn.js";

const Counter = artifacts.require("Counter");

contract("Counter (with jest matchers)", () => {
  let counter: CounterInstance;

  before(async () => {
    counter = await Counter.deployed();
  });

  describe("counter", () => {
    it("has a starting value of zero", async () => {
      const count = await counter.get();
      expect(count.toString()).toEqual("0");
    });

    it("can be incremented and decremented", async () => {
      let count: BN;

      await counter.inc();
      count = await counter.get();
      expect(count.eq(new BN(1))).toBe(true);
      expect(count.toString()).toEqual("1");

      await counter.dec();
      count = await counter.get();
      expect(count.eq(new BN(0))).toBe(true);
      expect(count.toString()).toEqual("0");
    });
  });
});
