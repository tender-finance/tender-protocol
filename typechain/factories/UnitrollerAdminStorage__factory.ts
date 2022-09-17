/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnitrollerAdminStorage,
  UnitrollerAdminStorageInterface,
} from "../UnitrollerAdminStorage";

const _abi = [
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingComptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060e58061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80632678224714604b578063bb82aa5e146079578063dcfbc0c714608b578063f851a44014609d575b600080fd5b600154605d906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600254605d906001600160a01b031681565b600354605d906001600160a01b031681565b600054605d906001600160a01b03168156fea2646970667358221220137b09dc1f2e7294dcd763755eaa25b4ee0bb0acdb0e40291b223f6b4fbf62ab64736f6c634300080a0033";

export class UnitrollerAdminStorage__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnitrollerAdminStorage> {
    return super.deploy(overrides || {}) as Promise<UnitrollerAdminStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UnitrollerAdminStorage {
    return super.attach(address) as UnitrollerAdminStorage;
  }
  connect(signer: Signer): UnitrollerAdminStorage__factory {
    return super.connect(signer) as UnitrollerAdminStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitrollerAdminStorageInterface {
    return new utils.Interface(_abi) as UnitrollerAdminStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnitrollerAdminStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UnitrollerAdminStorage;
  }
}
