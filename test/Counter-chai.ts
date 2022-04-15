import { CounterInstance } from "../types/truffle-contracts";
import chai, { expect } from "chai";
import chaiBn from "chai-bn";
import BN from "bn.js";
chai.use(chaiBn(BN));

const Counter = artifacts.require("Counter");

contract("Counter (with chai matchers)", () => {
  let counter: CounterInstance;

  before(async () => {
    counter = await Counter.deployed();
  });

  describe("counter", () => {
    it("has a starting value of zero", async () => {
      const count = await counter.get();
      expect(count).to.be.a.bignumber.that.equals("0");
    });

    it("can be incremented and decremented", async () => {
      let count: BN;

      await counter.inc();
      count = await counter.get();
      expect(count).to.be.a.bignumber.that.equals("1");

      await counter.dec();
      count = await counter.get();
      expect(count).to.be.a.bignumber.that.equals("0");
    });
  });
});
