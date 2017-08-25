/**
 *  @title Hasher
 *  @author Clément Lesaege - <clement@lesaege.com>
 */

/* This program is free software. It comes without any warranty, to
the extent permitted by applicable law. You can redistribute it
and/or modify it under the terms of the Do What The Fuck You Want
To Public License, Version 2, as published by Sam Hocevar. See
http://www.wtfpl.net/ for more details. */

pragma solidity ^0.4.9;

contract Hasher{
    /** @dev Give the commitement. Must only be called locally.
     *  @param _c The move.
     *  @param _salt The salt to increase entropy.
     */
    function hash(uint8 _c, uint256 _salt) constant returns(bytes32) {
        return keccak256(_c,_salt);
    }
}
