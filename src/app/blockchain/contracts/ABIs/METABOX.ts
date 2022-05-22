// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */

export const METABOX_V1 = {
    contractName: 'EventX',
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
                    "internalType": "bool",
                    "name": "avalible",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "revealDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
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
                    "internalType": "bool",
                    "name": "avalible",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "revealDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_ass",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bool",
                    "name": "_avali",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_reveal",
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
                            "internalType": "uint256[]",
                            "name": "assets",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "bool",
                            "name": "avalible",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "revealDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
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