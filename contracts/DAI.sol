// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DAI is ERC20, ERC20Permit, Ownable {
    uint256 public constant REWARD_AMOUNT = 100 * 10**18; // 100 tokens
    uint256 public constant TIME_PERIOD = 1 days;

    mapping(address => uint256) public lastClaimTime;

    constructor(address initialOwner)
        ERC20("Dai Stablecoin", "DAI")
        ERC20Permit("Dai Stablecoin")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 1_000_000 * 10**18); // 1M tokens for initial owner
    }

    /// @dev Method to mint for owner in case it is needed
    function mintOnlyOwner(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /// @dev Method acting like in faucets for all the users
    function requestTokens() external {
        require(lastClaimTime[msg.sender] == 0 || block.timestamp - lastClaimTime[msg.sender] >= TIME_PERIOD, "MyToken: You can claim tokens once every 24 hours.");

        _mint(msg.sender, REWARD_AMOUNT);
        lastClaimTime[msg.sender] = block.timestamp;
    }
}
