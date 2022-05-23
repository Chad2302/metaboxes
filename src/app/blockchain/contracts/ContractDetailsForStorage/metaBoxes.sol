// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract MetaBoxes {

    using Counters for Counters.Counter;
    Counters.Counter private _boxes; 
    Counters.Counter private _metabox_counter;  
    struct MetaBox {
        uint asset_count;  
        uint max_number;  
        uint256 price;
        uint256 avalible;
    }

    struct asset_rank_nft {
        address nft_address;
        uint token_id;
    }

    struct AssetRank {
        asset_rank_nft[] asset_rank_nfts; 
        uint256 avalible;
    }

    mapping(uint256 => MetaBox) public _MetaBoxes;
    
    mapping(uint256 => AssetRank) public _assetRanking;

    function getBoxesAvalibleCount() public view returns (uint){
        return 0;
    }

    function nextBox() public view returns (MetaBox memory){
       uint256 boxID = _boxes.current();
       return _MetaBoxes[boxID];
    }

    function addBox(uint _count, uint _max, uint256 _avli, uint256 _price) public {
       uint256 boxID = _boxes.current();
        _boxes.increment();
        _MetaBoxes[boxID].asset_count = _count;
        _MetaBoxes[boxID].max_number = _max;
        _MetaBoxes[boxID].avalible = _avli;
        _MetaBoxes[boxID].price = _price;
    } 

    function transferNFT(address nft_address, uint nft_token_id,address reciever) internal {
        IERC721 contr = IERC721(nft_address);
        contr.transferFrom(address(this), reciever, nft_token_id);
    }


    function createBox(uint[] memory numbers,address final_reciever) public {
        uint level;
        uint nft;
        address nftBox;
        for (uint j = 0; j < numbers.length; j++) {
            if(j%2 == 0){
                level = j;
            }
            else {
                nft = j;
                (address nft_address,uint nft_token_id) = getNFTAddress(level,nft);
                transferNFT(nft_address,nft_token_id,nftBox);
            }
        }
        uint256 tokenId = _metabox_counter.current();
        _metabox_counter.increment();
        transferNFT(nftBox,tokenId,final_reciever);
    }

    function getNFTAddress(uint level,uint nft) internal returns (address, uint){
        // AssetRank memory _toLevelSend = _assetRanking[level];
        if(nft > _assetRanking[level].asset_rank_nfts.length){
            nft = nft%_assetRanking[level].asset_rank_nfts.length;
        }
        asset_rank_nft memory return_nft = _assetRanking[level].asset_rank_nfts[nft];
        for (uint256 i = nft; i < _assetRanking[level].asset_rank_nfts.length - 1; i++) {
            _assetRanking[level].asset_rank_nfts[i] = _assetRanking[level].asset_rank_nfts[i+1];
        }
         _assetRanking[level].asset_rank_nfts.pop(); // delete the last item
        return (return_nft.nft_address,return_nft.token_id);
    }
}