var abiJson = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gasoline",
				"type": "uint256"
			}
		],
		"name": "gasolineAlarm",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gasoline",
				"type": "uint256"
			}
		],
		"name": "addGasoline",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "changeDoorStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "changeGasoline",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCarInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "color",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "wheelNum",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDoorStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "doorStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGasoline",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "gasoline",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGasolineType",
		"outputs": [
			{
				"internalType": "int256",
				"name": "gasolineType",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "color",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "wheelNum",
				"type": "uint8"
			}
		],
		"name": "setCarInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum CarContract6.DoorSwitch",
				"name": "doorSwitch",
				"type": "uint8"
			}
		],
		"name": "setDoorSwitch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startUp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];