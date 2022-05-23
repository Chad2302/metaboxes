// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */

export const METABOX_V1 = {
    contractName: 'MetaBoxes',
    abi: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "_MetaBoxes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "asset_count",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "max_number",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "avalible",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "_assetRanking",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "avalible",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_max",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_avli",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "name": "addBox",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "numbers",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address",
                    "name": "final_reciever",
                    "type": "address"
                }
            ],
            "name": "createBox",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBoxesAvalibleCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextBox",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "asset_count",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "max_number",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "avalible",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct MetaBoxes.MetaBox",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};