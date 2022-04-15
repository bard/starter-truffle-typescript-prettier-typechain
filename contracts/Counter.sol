// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Counter {
    uint256 public count;

    constructor() {
        count = 0;
    }

    function inc() public {
        count += 1;
    }

    function dec() public {
        count -= 1;
    }

    function get() public view returns (uint256) {
        return count;
    }
}
