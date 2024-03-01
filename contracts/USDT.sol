// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20, ERC20Permit, Ownable {
    uint8 private constant CUSTOM_DECIMAL = 6;
    uint256 public constant REWARD_AMOUNT = 100 * 10**CUSTOM_DECIMAL; // 100 tokens
    uint256 public constant TIME_PERIOD = 1 days;

    mapping(address => uint256) public lastClaimTime;

    constructor(address initialOwner)
        ERC20("Tether USD", "USDT")
        ERC20Permit("Tether USD")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 1_000_000 * 10**CUSTOM_DECIMAL); // 1M tokens for initial owner
    }

    function decimals() public pure override returns (uint8) {
        return CUSTOM_DECIMAL;
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
