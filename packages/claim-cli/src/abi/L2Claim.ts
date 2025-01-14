export default [
	{
		type: 'constructor',
		inputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'LSK_MULTIPLIER',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'UPGRADE_INTERFACE_VERSION',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'acceptOwnership',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'claimMultisigAccount',
		inputs: [
			{
				name: '_proof',
				type: 'bytes32[]',
				internalType: 'bytes32[]',
			},
			{
				name: '_lskAddress',
				type: 'bytes20',
				internalType: 'bytes20',
			},
			{
				name: '_amount',
				type: 'uint64',
				internalType: 'uint64',
			},
			{
				name: '_keys',
				type: 'tuple',
				internalType: 'struct MultisigKeys',
				components: [
					{
						name: 'mandatoryKeys',
						type: 'bytes32[]',
						internalType: 'bytes32[]',
					},
					{
						name: 'optionalKeys',
						type: 'bytes32[]',
						internalType: 'bytes32[]',
					},
				],
			},
			{
				name: '_recipient',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_sigs',
				type: 'tuple[]',
				internalType: 'struct ED25519Signature[]',
				components: [
					{
						name: 'r',
						type: 'bytes32',
						internalType: 'bytes32',
					},
					{
						name: 's',
						type: 'bytes32',
						internalType: 'bytes32',
					},
				],
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'claimRegularAccount',
		inputs: [
			{
				name: '_proof',
				type: 'bytes32[]',
				internalType: 'bytes32[]',
			},
			{
				name: '_pubKey',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: '_amount',
				type: 'uint64',
				internalType: 'uint64',
			},
			{
				name: '_recipient',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_sig',
				type: 'tuple',
				internalType: 'struct ED25519Signature',
				components: [
					{
						name: 'r',
						type: 'bytes32',
						internalType: 'bytes32',
					},
					{
						name: 's',
						type: 'bytes32',
						internalType: 'bytes32',
					},
				],
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'claimedTo',
		inputs: [
			{
				name: '',
				type: 'bytes20',
				internalType: 'bytes20',
			},
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'daoAddress',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'initialize',
		inputs: [
			{
				name: '_l2LiskToken',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_merkleRoot',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: '_recoverPeriodTimestamp',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'l2LiskToken',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'contract IERC20',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'merkleRoot',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'owner',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'pendingOwner',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'proxiableUUID',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'recoverLSK',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'recoverPeriodTimestamp',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'renounceOwnership',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'setDAOAddress',
		inputs: [
			{
				name: '_daoAddress',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'transferOwnership',
		inputs: [
			{
				name: 'newOwner',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'upgradeToAndCall',
		inputs: [
			{
				name: 'newImplementation',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'data',
				type: 'bytes',
				internalType: 'bytes',
			},
		],
		outputs: [],
		stateMutability: 'payable',
	},
	{
		type: 'function',
		name: 'version',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'event',
		name: 'ClaimingEnded',
		inputs: [],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'DaoAddressSet',
		inputs: [
			{
				name: 'daoAddress',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'Initialized',
		inputs: [
			{
				name: 'version',
				type: 'uint64',
				indexed: false,
				internalType: 'uint64',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'LSKClaimed',
		inputs: [
			{
				name: 'lskAddress',
				type: 'bytes20',
				indexed: true,
				internalType: 'bytes20',
			},
			{
				name: 'recipient',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'OwnershipTransferStarted',
		inputs: [
			{
				name: 'previousOwner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'newOwner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'OwnershipTransferred',
		inputs: [
			{
				name: 'previousOwner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'newOwner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'Upgraded',
		inputs: [
			{
				name: 'implementation',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'error',
		name: 'AddressEmptyCode',
		inputs: [
			{
				name: 'target',
				type: 'address',
				internalType: 'address',
			},
		],
	},
	{
		type: 'error',
		name: 'ERC1967InvalidImplementation',
		inputs: [
			{
				name: 'implementation',
				type: 'address',
				internalType: 'address',
			},
		],
	},
	{
		type: 'error',
		name: 'ERC1967NonPayable',
		inputs: [],
	},
	{
		type: 'error',
		name: 'FailedInnerCall',
		inputs: [],
	},
	{
		type: 'error',
		name: 'InvalidInitialization',
		inputs: [],
	},
	{
		type: 'error',
		name: 'NotInitializing',
		inputs: [],
	},
	{
		type: 'error',
		name: 'OwnableInvalidOwner',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				internalType: 'address',
			},
		],
	},
	{
		type: 'error',
		name: 'OwnableUnauthorizedAccount',
		inputs: [
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
		],
	},
	{
		type: 'error',
		name: 'UUPSUnauthorizedCallContext',
		inputs: [],
	},
	{
		type: 'error',
		name: 'UUPSUnsupportedProxiableUUID',
		inputs: [
			{
				name: 'slot',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
	},
];
