// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/utils/Counters.sol";
/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract MetaBoxes {

    using Counters for Counters.Counter;
    Counters.Counter private _boxes; 
    Counters.Counter private _sold; 

    struct MetaBox {
        uint256[] assets; 
        bool avalible;  
        uint256 revealDate;
        uint256 price;
    }

    struct AssetRank {
        address[] _assetArray; 
        uint256 avalible;
    }

    



    mapping(uint256 => MetaBox) public _MetaBoxes;
    
    mapping(uint256 => MetaBox) public _assetRanking;

    function getBoxesAvalibleCount() public view returns (uint256){
        return (_boxes - _sold);
    }

    function nextBox() public view returns (MetaBox memory){
       uint256 boxID = _boxes.current();
       return _MetaBoxes[boxID];
    }

    function addBox(uint256[] calldata _ass, bool _avali, uint256 _reveal, uint256 _price) public {
       uint256 boxID = _boxes.current();
        _boxes.increment();
        _MetaBoxes[boxID].assets = _ass;
        _MetaBoxes[boxID].avalible = _avali;
        _MetaBoxes[boxID].revealDate = _reveal;
        _MetaBoxes[boxID].price = _price;
    } 
}