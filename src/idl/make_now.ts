export type MakeNowProgram = {
  "version": "0.1.0",
  "name": "gpump",
  "constants": [
    {
      "name": "CONFIG_SEED",
      "type": "bytes",
      "value": "[103, 112, 117, 109, 112, 95, 99, 111, 110, 102, 105, 103]"
    },
    {
      "name": "BONDING_CURVE",
      "type": "bytes",
      "value": "[98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101, 95, 103, 112, 117, 109, 112]"
    },
    {
      "name": "ASSOCIATE_BC",
      "type": "bytes",
      "value": "[97, 115, 115, 111, 99, 105, 97, 116, 101, 95, 98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101]"
    },
    {
      "name": "MINT_AUTHORITY",
      "type": "bytes",
      "value": "[109, 105, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]"
    },
    {
      "name": "REFERRAL_SEED",
      "type": "bytes",
      "value": "[103, 112, 117, 109, 112, 95, 114, 101, 102, 101, 114, 114, 97, 108]"
    },
    {
      "name": "PERCENT",
      "type": "u64",
      "value": "100000"
    }
  ],
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "operator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "token_metadata_program"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "token_metadata_program"
            }
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "ticker",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "mint",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false,
          "relations": [
            "fund",
            "fee_receiver"
          ]
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fund",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leader",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountSol",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sell",
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false,
          "relations": [
            "fund",
            "fee_receiver"
          ]
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fund",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leader",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountToken",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "operatorLp",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false,
          "relations": [
            "operator_lp"
          ]
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associateUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dev",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "operator"
          ]
        }
      ],
      "args": [
        {
          "name": "initSolReserve",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "initTokenReserve",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "initRealTokenReserve",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "feePlatform",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "feeFund",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "fund",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "newOperator",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "newOperatorLp",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "newFeeReceiver",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "feeMaster",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "feeLeader",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "minSolToComplete",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "feePercentDecimal",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "solAmountToDev",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "createMaster",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newMaster",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setReferrer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrerAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "BondingCurve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "decimal",
            "type": "u8"
          },
          {
            "name": "initialSolReserve",
            "type": "u64"
          },
          {
            "name": "initialTokenReserve",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "virtualTokenReserve",
            "type": "u64"
          },
          {
            "name": "virtualSolReserve",
            "type": "u64"
          },
          {
            "name": "realTokenReserve",
            "type": "u64"
          },
          {
            "name": "realSolReserve",
            "type": "u64"
          },
          {
            "name": "completed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialRealTokenReserve",
            "type": "u64"
          },
          {
            "name": "decimal",
            "type": "u8"
          },
          {
            "name": "operator",
            "type": "publicKey"
          },
          {
            "name": "operatorLp",
            "type": "publicKey"
          },
          {
            "name": "fund",
            "type": "publicKey"
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          },
          {
            "name": "feePlatform",
            "type": "u32"
          },
          {
            "name": "feeFund",
            "type": "u32"
          },
          {
            "name": "feeMaster",
            "type": "u32"
          },
          {
            "name": "feeLeader",
            "type": "u32"
          },
          {
            "name": "initialSolReserve",
            "type": "u64"
          },
          {
            "name": "initialTokenReserve",
            "type": "u64"
          },
          {
            "name": "minSolToComplete",
            "type": "u64"
          },
          {
            "name": "feePercentDecimal",
            "type": "u8"
          },
          {
            "name": "solAmountToDev",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Referral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "master",
            "type": "publicKey"
          },
          {
            "name": "leader",
            "type": "publicKey"
          },
          {
            "name": "trader",
            "type": "publicKey"
          },
          {
            "name": "isMaster",
            "type": "bool"
          },
          {
            "name": "isLeader",
            "type": "bool"
          },
          {
            "name": "isTrader",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "TokenCreatedEvent",
      "fields": [
        {
          "name": "token",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "totalSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialSolReserve",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TradingEvent",
      "fields": [
        {
          "name": "token",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amountSol",
          "type": "u64",
          "index": false
        },
        {
          "name": "amountToken",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "virtualSolReserve",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualTokenReserve",
          "type": "u64",
          "index": false
        },
        {
          "name": "completed",
          "type": "bool",
          "index": false
        },
        {
          "name": "master",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "leader",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeMaster",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeLeader",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "token",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amountSol",
          "type": "u64",
          "index": false
        },
        {
          "name": "amountToken",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreateMasterEvent",
      "fields": [
        {
          "name": "master",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CreateLeaderEvent",
      "fields": [
        {
          "name": "master",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "leader",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CreateTraderEvent",
      "fields": [
        {
          "name": "master",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "leader",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "trader",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFund",
      "msg": "Insufficient fund"
    },
    {
      "code": 6001,
      "name": "InvalidAmountSol",
      "msg": "Invalid amount sol"
    },
    {
      "code": 6002,
      "name": "InsufficientToken",
      "msg": "Insufficient token"
    },
    {
      "code": 6003,
      "name": "BondingCurveEnd",
      "msg": "Bonding Curve: completed, cannot buy"
    },
    {
      "code": 6004,
      "name": "BondingCurveNotEnd",
      "msg": "Bonding Curve: not completed"
    },
    {
      "code": 6005,
      "name": "InvalidAmountToken",
      "msg": "Bonding Curve: Invalid amount of token available to trade"
    },
    {
      "code": 6006,
      "name": "InvalidAmountSolTrade",
      "msg": "Bonding Curve: Invalid amount of sol available to trade"
    },
    {
      "code": 6007,
      "name": "InvalidFee",
      "msg": "Fee cannot over 100"
    },
    {
      "code": 6008,
      "name": "InvalidReferralFee",
      "msg": "Referral fee cannot over platform fee"
    },
    {
      "code": 6009,
      "name": "InvalidSolConfig",
      "msg": "Amount SOL to dev cannot over min SOL to complete"
    },
    {
      "code": 6010,
      "name": "InvalidOperator",
      "msg": "Invalid operator"
    },
    {
      "code": 6011,
      "name": "InvalidMaster",
      "msg": "Invalid master"
    },
    {
      "code": 6012,
      "name": "InvalidLeader",
      "msg": "Invalid leader"
    },
    {
      "code": 6013,
      "name": "CanNotCreateMaster",
      "msg": "Can not create master"
    },
    {
      "code": 6014,
      "name": "CanNotCreateLeader",
      "msg": "Can not create leader"
    },
    {
      "code": 6015,
      "name": "InvalidReferrer",
      "msg": "Invalid referrer"
    }
  ]
}