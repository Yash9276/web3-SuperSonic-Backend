// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Mytoken is ERC20 {
    constructor() ERC20("Beets Stake Sonic", "stS") {
    }
     function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
     function burn(address to,uint256 amount) external {
        _burn(to, amount);
    }
     function transfer_(address recipient, uint256 amount) external returns (bool) {
        _transfer(recipient,msg.sender, amount);
        return true;
    }
}