/* tslint:disable */
/* eslint-disable */
/**
* encodes arbitrary bytes into chunks of 64 bytes (the limit for bytes) as a list to be valid Metadata
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
export function encode_arbitrary_bytes_as_metadatum(bytes: Uint8Array): TransactionMetadatum;
/**
* decodes from chunks of bytes in a list to a byte vector if that is the metadata format, otherwise returns None
* @param {TransactionMetadatum} metadata
* @returns {Uint8Array | undefined}
*/
export function decode_arbitrary_bytes_from_metadatum(metadata: TransactionMetadatum): Uint8Array | undefined;
/**
* Encrypt using Emip3: https://github.com/Emurgo/EmIPs/blob/master/specs/emip-003.md
* @param {string} password
* @param {string} salt
* @param {string} nonce
* @param {string} data
* @returns {string}
*/
export function emip3_encrypt_with_password(password: string, salt: string, nonce: string, data: string): string;
/**
* Decrypt using Emip3: https://github.com/Emurgo/EmIPs/blob/master/specs/emip-003.md
* @param {string} password
* @param {string} data
* @returns {string}
*/
export function emip3_decrypt_with_password(password: string, data: string): string;
/**
* @param {RedeemerList} redeemers
* @returns {ExUnits}
*/
export function compute_total_ex_units(redeemers: RedeemerList): ExUnits;
/**
* @param {AuxiliaryData} auxiliary_data
* @returns {AuxiliaryDataHash}
*/
export function hash_auxiliary_data(auxiliary_data: AuxiliaryData): AuxiliaryDataHash;
/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/
export function hash_transaction(tx_body: TransactionBody): TransactionHash;
/**
* @param {PlutusData} plutus_data
* @returns {DatumHash}
*/
export function hash_plutus_data(plutus_data: PlutusData): DatumHash;
/**
* Calculates the hash for script data (no plutus scripts) if it is necessary.
* Returns None if it was not necessary (no datums/redeemers) to include.
*
* Most users will not directly need this as when using the builders
* it will be invoked for you.
*
* Note: This WASM binding does not work with non-standard witness set
* encodings. If you created the witness set manually this is not an issue
* but for constructing it from deserializing a transaction/witness then
* please use calc_script_data_hash_from_witness()
* @param {RedeemerList} redeemers
* @param {CostModels} cost_models
* @param {PlutusDataList | undefined} datums
* @returns {ScriptDataHash}
*/
export function hash_script_data(redeemers: RedeemerList, cost_models: CostModels, datums?: PlutusDataList): ScriptDataHash;
/**
* Calculates the hash for script data (with plutus scripts) if it is necessary.
* Returns None if it was not necessary (no datums/redeemers) to include.
*
* Most users will not directly need this as when using the builders
* it will be invoked for you.
*
* Note: This WASM binding does not work with non-standard witness set
* encodings. If you created the witness set manually this is not an issue
* but for constructing it from deserializing a transaction/witness then
* please use calc_script_data_hash_from_witness()
* @param {RedeemerList} redeemers
* @param {PlutusDataList} datums
* @param {CostModels} cost_models
* @param {LanguageList} used_langs
* @returns {ScriptDataHash | undefined}
*/
export function calc_script_data_hash(redeemers: RedeemerList, datums: PlutusDataList, cost_models: CostModels, used_langs: LanguageList): ScriptDataHash | undefined;
/**
* Calculates the hash for script data from a witness if it is necessary.
* Returns None if it was not necessary (no datums/redeemers) to include.
*
* Most users will not directly need this as when using the builders
* it will be invoked for you.
* @param {TransactionWitnessSet} witnesses
* @param {CostModels} cost_models
* @returns {ScriptDataHash | undefined}
*/
export function calc_script_data_hash_from_witness(witnesses: TransactionWitnessSet, cost_models: CostModels): ScriptDataHash | undefined;
/**
* @param {TransactionBody} txbody
* @param {bigint} pool_deposit
* @param {bigint} key_deposit
* @returns {Value}
*/
export function get_implicit_input(txbody: TransactionBody, pool_deposit: bigint, key_deposit: bigint): Value;
/**
* @param {TransactionBody} txbody
* @param {bigint} pool_deposit
* @param {bigint} key_deposit
* @returns {bigint}
*/
export function get_deposit(txbody: TransactionBody, pool_deposit: bigint, key_deposit: bigint): bigint;
/**
* @param {TransactionOutput} output
* @param {bigint} coins_per_utxo_byte
* @returns {bigint}
*/
export function min_ada_required(output: TransactionOutput, coins_per_utxo_byte: bigint): bigint;
/**
* Converts JSON to Metadata according to MetadataJsonSchema
* @param {string} json
* @param {number} schema
* @returns {TransactionMetadatum}
*/
export function encode_json_str_to_metadatum(json: string, schema: number): TransactionMetadatum;
/**
* Converts Metadata to JSON according to MetadataJsonSchema
* @param {TransactionMetadatum} metadatum
* @param {number} schema
* @returns {string}
*/
export function decode_metadatum_to_json_str(metadatum: TransactionMetadatum, schema: number): string;
/**
* @param {string} json
* @param {number} schema
* @returns {PlutusData}
*/
export function encode_json_str_to_plutus_datum(json: string, schema: number): PlutusData;
/**
* @param {PlutusData} datum
* @param {number} schema
* @returns {string}
*/
export function decode_plutus_datum_to_json_str(datum: PlutusData, schema: number): string;
/**
* @param {TransactionHash} tx_body_hash
* @param {PrivateKey} sk
* @returns {Vkeywitness}
*/
export function make_vkey_witness(tx_body_hash: TransactionHash, sk: PrivateKey): Vkeywitness;
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {LegacyDaedalusPrivateKey} key
* @returns {BootstrapWitness}
*/
export function make_daedalus_bootstrap_witness(tx_body_hash: TransactionHash, addr: ByronAddress, key: LegacyDaedalusPrivateKey): BootstrapWitness;
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {Bip32PrivateKey} key
* @returns {BootstrapWitness}
*/
export function make_icarus_bootstrap_witness(tx_body_hash: TransactionHash, addr: ByronAddress, key: Bip32PrivateKey): BootstrapWitness;
/**
*
* * Min fee for JUST the script
* 
* @param {Transaction} tx
* @param {ExUnitPrices} ex_unit_prices
* @returns {bigint}
*/
export function min_script_fee(tx: Transaction, ex_unit_prices: ExUnitPrices): bigint;
/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {bigint}
*/
export function min_no_script_fee(tx: Transaction, linear_fee: LinearFee): bigint;
/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @param {ExUnitPrices} ex_unit_prices
* @returns {bigint}
*/
export function min_fee(tx: Transaction, linear_fee: LinearFee, ex_unit_prices: ExUnitPrices): bigint;
/**
*/
export enum ByronAddrType {
  PublicKey,
  Script,
  Redeem,
}
/**
*/
export enum Vote {
  No,
  Yes,
  Abstain,
}
/**
*/
export enum CoinSelectionStrategyCIP2 {
/**
* Performs CIP2's Largest First ada-only selection. Will error if outputs contain non-ADA assets.
*/
  LargestFirst,
/**
* Performs CIP2's Random Improve ada-only selection. Will error if outputs contain non-ADA assets.
*/
  RandomImprove,
/**
* Same as LargestFirst, but before adding ADA, will insert by largest-first for each asset type.
*/
  LargestFirstMultiAsset,
/**
* Same as RandomImprove, but before adding ADA, will insert by random-improve for each asset type.
*/
  RandomImproveMultiAsset,
}
/**
*/
export enum ChangeSelectionAlgo {
  Default,
}
/**
*/
export enum Language {
  PlutusV1,
  PlutusV2,
  PlutusV3,
}
/**
*/
export enum RedeemerTag {
  Spend,
  Mint,
  Cert,
  Reward,
}
/**
*/
export enum AddressKind {
  Base,
  Ptr,
  Enterprise,
  Reward,
  Byron,
}
/**
* Careful: this enum doesn't include the network ID part of the header
* ex: base address isn't 0b0000_0000 but instead 0b0000
* Use `header_matches_kind` if you don't want to implement the bitwise operators yourself
*/
export enum AddressHeaderKind {
  BasePaymentKeyStakeKey,
  BasePaymentScriptStakeKey,
  BasePaymentKeyStakeScript,
  BasePaymentScriptStakeScript,
  PointerKey,
  PointerScript,
  EnterpriseKey,
  EnterpriseScript,
  Byron,
  RewardKey,
  RewardScript,
}
/**
*/
export enum MetadataJsonSchema {
  NoConversions,
  BasicConversions,
  DetailedSchema,
}
/**
* JSON <-> PlutusData conversion schemas.
* Follows ScriptDataJsonSchema in cardano-cli defined at:
* https://github.com/input-output-hk/cardano-node/blob/master/cardano-api/src/Cardano/Api/ScriptData.hs#L254
*
* All methods here have the following restrictions due to limitations on dependencies:
* * JSON numbers above u64::MAX (positive) or below i64::MIN (negative) will throw errors
* * Hex strings for bytes don't accept odd-length (half-byte) strings.
*      cardano-cli seems to support these however but it seems to be different than just 0-padding
*      on either side when tested so proceed with caution
*/
export enum CardanoNodePlutusDatumSchema {
/**
* ScriptDataJsonNoSchema in cardano-node.
*
* This is the format used by --script-data-value in cardano-cli
* This tries to accept most JSON but does not support the full spectrum of Plutus datums.
* From JSON:
* * null/true/false/floats NOT supported
* * strings starting with 0x are treated as hex bytes. All other strings are encoded as their utf8 bytes.
* To JSON:
* * ConstrPlutusData not supported in ANY FORM (neither keys nor values)
* * Lists not supported in keys
* * Maps not supported in keys
*/
  BasicConversions,
/**
* ScriptDataJsonDetailedSchema in cardano-node.
*
* This is the format used by --script-data-file in cardano-cli
* This covers almost all (only minor exceptions) Plutus datums, but the JSON must conform to a strict schema.
* The schema specifies that ALL keys and ALL values must be contained in a JSON map with 2 cases:
* 1. For ConstrPlutusData there must be two fields "constructor" contianing a number and "fields" containing its fields
*    e.g. { "constructor": 2, "fields": [{"int": 2}, {"list": [{"bytes": "CAFEF00D"}]}]}
* 2. For all other cases there must be only one field named "int", "bytes", "list" or "map"
*    BigInteger's value is a JSON number e.g. {"int": 100}
*    Bytes' value is a hex string representing the bytes WITHOUT any prefix e.g. {"bytes": "CAFEF00D"}
*    Lists' value is a JSON list of its elements encoded via the same schema e.g. {"list": [{"bytes": "CAFEF00D"}]}
*    Maps' value is a JSON list of objects, one for each key-value pair in the map, with keys "k" and "v"
*          respectively with their values being the plutus datum encoded via this same schema
*          e.g. {"map": [
*              {"k": {"int": 2}, "v": {"int": 5}},
*              {"k": {"map": [{"k": {"list": [{"int": 1}]}, "v": {"bytes": "FF03"}}]}, "v": {"list": []}}
*          ]}
* From JSON:
* * null/true/false/floats NOT supported
* * the JSON must conform to a very specific schema
* To JSON:
* * all Plutus datums should be fully supported outside of the integer range limitations outlined above.
*/
  DetailedSchema,
}
/**
*/
export enum TransactionMetadatumKind {
  Map,
  List,
  Int,
  Bytes,
  Text,
}
/**
*/
export enum CertificateKind {
  StakeRegistration,
  StakeDeregistration,
  StakeDelegation,
  PoolRegistration,
  PoolRetirement,
  RegCert,
  UnregCert,
  VoteDelegCert,
  StakeVoteDelegCert,
  StakeRegDelegCert,
  VoteRegDelegCert,
  StakeVoteRegDelegCert,
  AuthCommitteeHotCert,
  ResignCommitteeColdCert,
  RegDrepCert,
  UnregDrepCert,
  UpdateDrepCert,
}
/**
*/
export enum CredentialKind {
  PubKey,
  Script,
}
/**
*/
export enum DRepKind {
  Key,
  Script,
  AlwaysAbstain,
  AlwaysNoConfidence,
}
/**
*/
export enum RelayKind {
  SingleHostAddr,
  SingleHostName,
  MultiHostName,
}
/**
*/
export enum ScriptKind {
  Native,
  PlutusV1,
  PlutusV2,
  PlutusV3,
}
/**
*/
export enum PlutusDataKind {
  ConstrPlutusData,
  Map,
  List,
  Integer,
  Bytes,
}
/**
*/
export enum AuxiliaryDataKind {
  Shelley,
  ShelleyMA,
  Conway,
}
/**
*/
export enum DatumOptionKind {
  Hash,
  Datum,
}
/**
*/
export enum NativeScriptKind {
  ScriptPubkey,
  ScriptAll,
  ScriptAny,
  ScriptNOfK,
  ScriptInvalidBefore,
  ScriptInvalidHereafter,
}
/**
*/
export enum TransactionOutputKind {
  AlonzoFormatTxOut,
  ConwayFormatTxOut,
}
/**
*/
export enum NonceKind {
  Identity,
  Hash,
}
/**
*/
export enum SpendingDataKind {
  SpendingDataPubKey,
  SpendingDataScript,
  SpendingDataRedeem,
}
/**
*/
export enum StakeDistributionKind {
  SingleKey,
  BootstrapEra,
}
/**
*/
export enum GovActionKind {
  ParameterChangeAction,
  HardForkInitiationAction,
  TreasuryWithdrawalsAction,
  NoConfidence,
  NewCommittee,
  NewConstitution,
  InfoAction,
}
/**
*/
export enum VoterKind {
  ConstitutionalCommitteeHotKeyHash,
  ConstitutionalCommitteeHotScriptHash,
  DRepKeyHash,
  DRepScriptHash,
  StakingPoolKeyHash,
}
/**
* Which version of the CIP25 spec to use. See CIP25 for details.
* This will change how things are encoded but for the most part contains
* the same information.
*/
export enum CIP25Version {
/**
* Initial version of CIP25 with only string (utf8) asset names allowed.
*/
  V1,
/**
* Second version of CIP25. Supports any type of asset names.
*/
  V2,
}
/**
*/
export enum ChunkableStringKind {
  Single,
  Chunked,
}
/**
*/
export enum DelegationDistributionKind {
  Weighted,
  Legacy,
}
/**
*/
export class AddrAttributes {
  free(): void;
/**
* @param {HDAddressPayload | undefined} hdap
* @param {ProtocolMagic | undefined} protocol_magic
* @returns {AddrAttributes}
*/
  static new_bootstrap_era(hdap?: HDAddressPayload, protocol_magic?: ProtocolMagic): AddrAttributes;
/**
* @param {Bip32PublicKey} pubk
* @param {HDAddressPayload | undefined} hdap
* @param {ProtocolMagic} protocol_magic
* @returns {AddrAttributes}
*/
  static new_single_key(pubk: Bip32PublicKey, hdap: HDAddressPayload | undefined, protocol_magic: ProtocolMagic): AddrAttributes;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {AddrAttributes}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): AddrAttributes;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {AddrAttributes}
*/
  static from_cbor_hex(cbor_bytes: string): AddrAttributes;
/**
* @param {StakeDistribution} stake_distribution
*/
  set_stake_distribution(stake_distribution: StakeDistribution): void;
/**
* @returns {StakeDistribution | undefined}
*/
  stake_distribution(): StakeDistribution | undefined;
/**
* @param {HDAddressPayload} derivation_path
*/
  set_derivation_path(derivation_path: HDAddressPayload): void;
/**
* @returns {HDAddressPayload | undefined}
*/
  derivation_path(): HDAddressPayload | undefined;
/**
* @param {ProtocolMagic} protocol_magic
*/
  set_protocol_magic(protocol_magic: ProtocolMagic): void;
/**
* @returns {ProtocolMagic | undefined}
*/
  protocol_magic(): ProtocolMagic | undefined;
/**
* @returns {AddrAttributes}
*/
  static new(): AddrAttributes;
}
/**
*/
export class Address {
  free(): void;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Address}
*/
  static from_json(json: string): Address;
/**
* header has 4 bits addr type discrim then 4 bits network discrim.
* Copied from shelley.cddl:
*
* base address
* bits 7-6: 00
* bit 5: stake cred is keyhash/scripthash
* bit 4: payment cred is keyhash/scripthash
* bits 3-0: network id
*
* pointer address
* bits 7-5: 010
* bit 4: payment cred is keyhash/scripthash
* bits 3-0: network id
*
* enterprise address
* bits 7-5: 010
* bit 4: payment cred is keyhash/scripthash
* bits 3-0: network id
*
* reward addresses:
* bits 7-5: 111
* bit 4: credential is keyhash/scripthash
* bits 3-0: network id
*
* byron addresses:
* bits 7-4: 1000
* bits 3-0: unrelated data (recall: no network ID in Byron addresses)
* @returns {number}
*/
  header(): number;
/**
* @param {number} header
* @param {number} kind
* @returns {boolean}
*/
  static header_matches_kind(header: number, kind: number): boolean;
/**
* @param {string | undefined} prefix
* @returns {string}
*/
  to_bech32(prefix?: string): string;
/**
* @param {string} bech_str
* @returns {Address}
*/
  static from_bech32(bech_str: string): Address;
/**
*
*     * Note: bech32-encoded Byron addresses will also pass validation here
*     
* @param {string} bech_str
* @returns {boolean}
*/
  static is_valid_bech32(bech_str: string): boolean;
/**
* @param {string} bech_str
* @returns {boolean}
*/
  static is_valid(bech_str: string): boolean;
/**
* @returns {number}
*/
  network_id(): number;
/**
* Note: by convention, the key inside reward addresses are considered payment credentials
* @returns {Credential | undefined}
*/
  payment_cred(): Credential | undefined;
/**
* Note: by convention, the key inside reward addresses are NOT considered staking credentials
* Note: None is returned pointer addresses as the chain history is required to resolve its associated cred
* @returns {Credential | undefined}
*/
  staking_cred(): Credential | undefined;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {Address}
*/
  static from_raw_bytes(data: Uint8Array): Address;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} hex
* @returns {Address}
*/
  static from_hex(hex: string): Address;
}
/**
*/
export class AddressContent {
  free(): void;
/**
* @param {number} addr_type
* @param {SpendingData} spending_data
* @param {AddrAttributes} attributes
* @returns {AddressContent}
*/
  static hash_and_create(addr_type: number, spending_data: SpendingData, attributes: AddrAttributes): AddressContent;
/**
* @param {PublicKey} pubkey
* @param {ProtocolMagic | undefined} protocol_magic
* @returns {AddressContent}
*/
  static new_redeem(pubkey: PublicKey, protocol_magic?: ProtocolMagic): AddressContent;
/**
* @param {Bip32PublicKey} xpub
* @param {ProtocolMagic | undefined} protocol_magic
* @returns {AddressContent}
*/
  static new_simple(xpub: Bip32PublicKey, protocol_magic?: ProtocolMagic): AddressContent;
/**
* Do we want to remove this or keep it for people who were using old Byron code?
* @returns {ByronAddress}
*/
  to_address(): ByronAddress;
/**
* returns the byron protocol magic embedded in the address, or mainnet id if none is present
* note: for bech32 addresses, you need to use network_id instead
* @returns {ProtocolMagic}
*/
  byron_protocol_magic(): ProtocolMagic;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @param {Bip32PublicKey} key
* @param {ProtocolMagic} protocol_magic
* @returns {AddressContent}
*/
  static icarus_from_key(key: Bip32PublicKey, protocol_magic: ProtocolMagic): AddressContent;
/**
* Check if the Addr can be reconstructed with a specific xpub
* @param {Bip32PublicKey} xpub
* @returns {boolean}
*/
  identical_with_pubkey(xpub: Bip32PublicKey): boolean;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {AddressContent}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): AddressContent;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {AddressContent}
*/
  static from_cbor_hex(cbor_bytes: string): AddressContent;
/**
* @returns {AddressId}
*/
  address_id(): AddressId;
/**
* @returns {AddrAttributes}
*/
  addr_attributes(): AddrAttributes;
/**
* @returns {number}
*/
  addr_type(): number;
/**
* @param {AddressId} address_id
* @param {AddrAttributes} addr_attributes
* @param {number} addr_type
* @returns {AddressContent}
*/
  static new(address_id: AddressId, addr_attributes: AddrAttributes, addr_type: number): AddressContent;
}
/**
*/
export class AddressId {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {AddressId}
*/
  static from_bech32(bech32_str: string): AddressId;
/**
* @param {string} input
* @returns {AddressId}
*/
  static from_hex(input: string): AddressId;
/**
* @param {Uint8Array} bytes
* @returns {AddressId}
*/
  static from_raw_bytes(bytes: Uint8Array): AddressId;
/**
* @param {number} addr_type
* @param {SpendingData} spending_data
* @param {AddrAttributes} attrs
* @returns {AddressId}
*/
  static new(addr_type: number, spending_data: SpendingData, attrs: AddrAttributes): AddressId;
}
/**
*/
export class AlonzoFormatTxOut {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {AlonzoFormatTxOut}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): AlonzoFormatTxOut;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {AlonzoFormatTxOut}
*/
  static from_cbor_hex(cbor_bytes: string): AlonzoFormatTxOut;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {AlonzoFormatTxOut}
*/
  static from_json(json: string): AlonzoFormatTxOut;
/**
* @returns {Address}
*/
  address(): Address;
/**
* @returns {Value}
*/
  amount(): Value;
/**
* @param {DatumHash} datum_hash
*/
  set_datum_hash(datum_hash: DatumHash): void;
/**
* @returns {DatumHash | undefined}
*/
  datum_hash(): DatumHash | undefined;
/**
* @param {Address} address
* @param {Value} amount
* @returns {AlonzoFormatTxOut}
*/
  static new(address: Address, amount: Value): AlonzoFormatTxOut;
}
/**
*/
export class Anchor {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Anchor}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Anchor;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Anchor}
*/
  static from_cbor_hex(cbor_bytes: string): Anchor;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Anchor}
*/
  static from_json(json: string): Anchor;
/**
* @returns {Url}
*/
  anchor_url(): Url;
/**
* @returns {AnchorDocHash}
*/
  anchor_doc_hash(): AnchorDocHash;
/**
* @param {Url} anchor_url
* @param {AnchorDocHash} anchor_doc_hash
* @returns {Anchor}
*/
  static new(anchor_url: Url, anchor_doc_hash: AnchorDocHash): Anchor;
}
/**
*/
export class AnchorDocHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {AnchorDocHash}
*/
  static from_bech32(bech32_str: string): AnchorDocHash;
/**
* @param {string} input
* @returns {AnchorDocHash}
*/
  static from_hex(input: string): AnchorDocHash;
/**
* @param {Uint8Array} bytes
* @returns {AnchorDocHash}
*/
  static from_raw_bytes(bytes: Uint8Array): AnchorDocHash;
}
/**
*/
export class AssetName {
  free(): void;
/**
*
*     * Create an AssetName from raw bytes. 64 byte maximum.
*     
* @param {Uint8Array} bytes
* @returns {AssetName}
*/
  static from_bytes(bytes: Uint8Array): AssetName;
/**
*
*     * Create an AssetName from utf8 string. 64 byte (not char!) maximum.
*     
* @param {string} utf8_str
* @returns {AssetName}
*/
  static from_str(utf8_str: string): AssetName;
/**
*
*     * AssetName as a utf8 string if it's possible. Will error if the asset is not utf8
*     
* @returns {string}
*/
  to_str(): string;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {AssetName}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): AssetName;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {AssetName}
*/
  static from_cbor_hex(cbor_bytes: string): AssetName;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {AssetName}
*/
  static from_json(json: string): AssetName;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class AssetNameList {
  free(): void;
/**
* @returns {AssetNameList}
*/
  static new(): AssetNameList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {AssetName}
*/
  get(index: number): AssetName;
/**
* @param {AssetName} elem
*/
  add(elem: AssetName): void;
}
/**
*/
export class AuthCommitteeHotCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {AuthCommitteeHotCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): AuthCommitteeHotCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {AuthCommitteeHotCert}
*/
  static from_cbor_hex(cbor_bytes: string): AuthCommitteeHotCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {AuthCommitteeHotCert}
*/
  static from_json(json: string): AuthCommitteeHotCert;
/**
* @returns {Credential}
*/
  committee_cold_credential(): Credential;
/**
* @returns {Credential}
*/
  committee_hot_credential(): Credential;
/**
* @param {Credential} committee_cold_credential
* @param {Credential} committee_hot_credential
* @returns {AuthCommitteeHotCert}
*/
  static new(committee_cold_credential: Credential, committee_hot_credential: Credential): AuthCommitteeHotCert;
}
/**
*/
export class AuxiliaryData {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {AuxiliaryData}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): AuxiliaryData;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {AuxiliaryData}
*/
  static from_cbor_hex(cbor_bytes: string): AuxiliaryData;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {AuxiliaryData}
*/
  static from_json(json: string): AuxiliaryData;
/**
* @param {Metadata} shelley
* @returns {AuxiliaryData}
*/
  static new_shelley(shelley: Metadata): AuxiliaryData;
/**
* @param {ShelleyMaFormatAuxData} shelley_m_a
* @returns {AuxiliaryData}
*/
  static new_shelley_m_a(shelley_m_a: ShelleyMaFormatAuxData): AuxiliaryData;
/**
* @param {ConwayFormatAuxData} conway
* @returns {AuxiliaryData}
*/
  static new_conway(conway: ConwayFormatAuxData): AuxiliaryData;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Metadata | undefined}
*/
  as_shelley(): Metadata | undefined;
/**
* @returns {ShelleyMaFormatAuxData | undefined}
*/
  as_shelley_m_a(): ShelleyMaFormatAuxData | undefined;
/**
* @returns {ConwayFormatAuxData | undefined}
*/
  as_conway(): ConwayFormatAuxData | undefined;
}
/**
*/
export class AuxiliaryDataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {AuxiliaryDataHash}
*/
  static from_bech32(bech32_str: string): AuxiliaryDataHash;
/**
* @param {string} input
* @returns {AuxiliaryDataHash}
*/
  static from_hex(input: string): AuxiliaryDataHash;
/**
* @param {Uint8Array} bytes
* @returns {AuxiliaryDataHash}
*/
  static from_raw_bytes(bytes: Uint8Array): AuxiliaryDataHash;
}
/**
*/
export class BaseAddress {
  free(): void;
/**
* @param {number} network
* @param {Credential} payment
* @param {Credential} stake
* @returns {BaseAddress}
*/
  static new(network: number, payment: Credential, stake: Credential): BaseAddress;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} address
* @returns {BaseAddress | undefined}
*/
  static from_address(address: Address): BaseAddress | undefined;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @returns {Credential}
*/
  payment(): Credential;
/**
* @returns {Credential}
*/
  stake(): Credential;
}
/**
*/
export class BigInteger {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {BigInteger}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): BigInteger;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {BigInteger}
*/
  static from_cbor_hex(cbor_bytes: string): BigInteger;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {BigInteger}
*/
  static from_json(json: string): BigInteger;
/**
* @param {Int} x
* @returns {BigInteger}
*/
  static from_int(x: Int): BigInteger;
/**
* @param {string} s
* @returns {BigInteger}
*/
  static from_str(s: string): BigInteger;
/**
* @returns {string}
*/
  to_str(): string;
/**
* Converts to a u64
* Returns None if the number was negative or too big for a u64
* @returns {bigint | undefined}
*/
  as_u64(): bigint | undefined;
/**
* Converts to an Int
* Returns None when the number is too big for an Int (outside +/- 64-bit unsigned)
* Retains encoding info if the original was encoded as an Int
* @returns {Int | undefined}
*/
  as_int(): Int | undefined;
}
/**
*/
export class Bip32PrivateKey {
  free(): void;
/**
* derive this private key with the given index.
*
* # Security considerations
*
* * hard derivation index cannot be soft derived with the public key
*
* # Hard derivation vs Soft derivation
*
* If you pass an index below 0x80000000 then it is a soft derivation.
* The advantage of soft derivation is that it is possible to derive the
* public key too. I.e. derivation the private key with a soft derivation
* index and then retrieving the associated public key is equivalent to
* deriving the public key associated to the parent private key.
*
* Hard derivation index does not allow public key derivation.
*
* This is why deriving the private key should not fail while deriving
* the public key may fail (if the derivation index is invalid).
* @param {number} index
* @returns {Bip32PrivateKey}
*/
  derive(index: number): Bip32PrivateKey;
/**
* 128-byte xprv a key format in Cardano that some software still uses or requires
* the traditional 96-byte xprv is simply encoded as
* prv | chaincode
* however, because some software may not know how to compute a public key from a private key,
* the 128-byte inlines the public key in the following format
* prv | pub | chaincode
* so be careful if you see the term "xprv" as it could refer to either one
* our library does not require the pub (instead we compute the pub key when needed)
* @param {Uint8Array} bytes
* @returns {Bip32PrivateKey}
*/
  static from_128_xprv(bytes: Uint8Array): Bip32PrivateKey;
/**
* see from_128_xprv
* @returns {Uint8Array}
*/
  to_128_xprv(): Uint8Array;
/**
* @returns {Bip32PrivateKey}
*/
  static generate_ed25519_bip32(): Bip32PrivateKey;
/**
* @returns {PrivateKey}
*/
  to_raw_key(): PrivateKey;
/**
* @returns {Bip32PublicKey}
*/
  to_public(): Bip32PublicKey;
/**
* @param {Uint8Array} bytes
* @returns {Bip32PrivateKey}
*/
  static from_raw_bytes(bytes: Uint8Array): Bip32PrivateKey;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} bech32_str
* @returns {Bip32PrivateKey}
*/
  static from_bech32(bech32_str: string): Bip32PrivateKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @param {Uint8Array} entropy
* @param {Uint8Array} password
* @returns {Bip32PrivateKey}
*/
  static from_bip39_entropy(entropy: Uint8Array, password: Uint8Array): Bip32PrivateKey;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class Bip32PublicKey {
  free(): void;
/**
* derive this public key with the given index.
*
* # Errors
*
* If the index is not a soft derivation index (< 0x80000000) then
* calling this method will fail.
*
* # Security considerations
*
* * hard derivation index cannot be soft derived with the public key
*
* # Hard derivation vs Soft derivation
*
* If you pass an index below 0x80000000 then it is a soft derivation.
* The advantage of soft derivation is that it is possible to derive the
* public key too. I.e. derivation the private key with a soft derivation
* index and then retrieving the associated public key is equivalent to
* deriving the public key associated to the parent private key.
*
* Hard derivation index does not allow public key derivation.
*
* This is why deriving the private key should not fail while deriving
* the public key may fail (if the derivation index is invalid).
* @param {number} index
* @returns {Bip32PublicKey}
*/
  derive(index: number): Bip32PublicKey;
/**
* @returns {PublicKey}
*/
  to_raw_key(): PublicKey;
/**
* @param {Uint8Array} bytes
* @returns {Bip32PublicKey}
*/
  static from_raw_bytes(bytes: Uint8Array): Bip32PublicKey;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} bech32_str
* @returns {Bip32PublicKey}
*/
  static from_bech32(bech32_str: string): Bip32PublicKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class Block {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Block}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Block;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Block}
*/
  static from_cbor_hex(cbor_bytes: string): Block;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Block}
*/
  static from_json(json: string): Block;
/**
* @returns {Header}
*/
  header(): Header;
/**
* @returns {TransactionBodyList}
*/
  transaction_bodies(): TransactionBodyList;
/**
* @returns {TransactionWitnessSetList}
*/
  transaction_witness_sets(): TransactionWitnessSetList;
/**
* @returns {MapTransactionIndexToAuxiliaryData}
*/
  auxiliary_data_set(): MapTransactionIndexToAuxiliaryData;
/**
* @returns {Uint16Array}
*/
  invalid_transactions(): Uint16Array;
/**
* @param {Header} header
* @param {TransactionBodyList} transaction_bodies
* @param {TransactionWitnessSetList} transaction_witness_sets
* @param {MapTransactionIndexToAuxiliaryData} auxiliary_data_set
* @param {Uint16Array} invalid_transactions
* @returns {Block}
*/
  static new(header: Header, transaction_bodies: TransactionBodyList, transaction_witness_sets: TransactionWitnessSetList, auxiliary_data_set: MapTransactionIndexToAuxiliaryData, invalid_transactions: Uint16Array): Block;
}
/**
*/
export class BlockBodyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {BlockBodyHash}
*/
  static from_bech32(bech32_str: string): BlockBodyHash;
/**
* @param {string} input
* @returns {BlockBodyHash}
*/
  static from_hex(input: string): BlockBodyHash;
/**
* @param {Uint8Array} bytes
* @returns {BlockBodyHash}
*/
  static from_raw_bytes(bytes: Uint8Array): BlockBodyHash;
}
/**
*/
export class BlockHeaderHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {BlockHeaderHash}
*/
  static from_bech32(bech32_str: string): BlockHeaderHash;
/**
* @param {string} input
* @returns {BlockHeaderHash}
*/
  static from_hex(input: string): BlockHeaderHash;
/**
* @param {Uint8Array} bytes
* @returns {BlockHeaderHash}
*/
  static from_raw_bytes(bytes: Uint8Array): BlockHeaderHash;
}
/**
*/
export class BootstrapWitness {
  free(): void;
/**
* @returns {AddressContent}
*/
  to_address(): AddressContent;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {BootstrapWitness}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): BootstrapWitness;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {BootstrapWitness}
*/
  static from_cbor_hex(cbor_bytes: string): BootstrapWitness;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {BootstrapWitness}
*/
  static from_json(json: string): BootstrapWitness;
/**
* @returns {PublicKey}
*/
  public_key(): PublicKey;
/**
* @returns {Ed25519Signature}
*/
  signature(): Ed25519Signature;
/**
* @returns {Uint8Array}
*/
  chain_code(): Uint8Array;
/**
* @returns {AddrAttributes}
*/
  attributes(): AddrAttributes;
/**
* @param {PublicKey} public_key
* @param {Ed25519Signature} signature
* @param {Uint8Array} chain_code
* @param {AddrAttributes} attributes
* @returns {BootstrapWitness}
*/
  static new(public_key: PublicKey, signature: Ed25519Signature, chain_code: Uint8Array, attributes: AddrAttributes): BootstrapWitness;
}
/**
*/
export class BootstrapWitnessList {
  free(): void;
/**
* @returns {BootstrapWitnessList}
*/
  static new(): BootstrapWitnessList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {BootstrapWitness}
*/
  get(index: number): BootstrapWitness;
/**
* @param {BootstrapWitness} elem
*/
  add(elem: BootstrapWitness): void;
}
/**
*/
export class ByronAddress {
  free(): void;
/**
* @returns {string}
*/
  to_base58(): string;
/**
* @param {string} s
* @returns {ByronAddress}
*/
  static from_base58(s: string): ByronAddress;
/**
* @param {string} s
* @returns {boolean}
*/
  static is_valid(s: string): boolean;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {ByronAddress | undefined}
*/
  static from_address(addr: Address): ByronAddress | undefined;
/**
* @param {AddressContent} address_content
* @returns {ByronAddress}
*/
  static from_address_content(address_content: AddressContent): ByronAddress;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ByronAddress}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ByronAddress;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ByronAddress}
*/
  static from_cbor_hex(cbor_bytes: string): ByronAddress;
/**
* @returns {AddressContent}
*/
  content(): AddressContent;
/**
* @returns {Crc32}
*/
  crc(): Crc32;
/**
* @param {AddressContent} content
* @param {Crc32} crc
* @returns {ByronAddress}
*/
  static new(content: AddressContent, crc: Crc32): ByronAddress;
}
/**
*/
export class ByronScript {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {ByronScript}
*/
  static from_bech32(bech32_str: string): ByronScript;
/**
* @param {string} input
* @returns {ByronScript}
*/
  static from_hex(input: string): ByronScript;
/**
* @param {Uint8Array} bytes
* @returns {ByronScript}
*/
  static from_raw_bytes(bytes: Uint8Array): ByronScript;
}
/**
*/
export class ByronTxOut {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ByronTxOut}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ByronTxOut;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ByronTxOut}
*/
  static from_cbor_hex(cbor_bytes: string): ByronTxOut;
/**
* @returns {ByronAddress}
*/
  address(): ByronAddress;
/**
* @returns {bigint}
*/
  amount(): bigint;
/**
* @param {ByronAddress} address
* @param {bigint} amount
* @returns {ByronTxOut}
*/
  static new(address: ByronAddress, amount: bigint): ByronTxOut;
}
/**
* A String that may or may not be chunked into 64-byte chunks to be able
* to conform to Cardano TX Metadata limitations.
* Most users should simply use CIP25ChunkableString::from_string() and CIP25ChunkableString::to_string()
* and avoid the explicit single/chunk interface:
* ```javascript
* let chunkableString = CIP25.CIP25ChunkableString.from_string("this can be any length and will automatically be chunked if needed");
* ```
*/
export class CIP25ChunkableString {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP25ChunkableString}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP25ChunkableString;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP25ChunkableString}
*/
  static from_cbor_hex(cbor_bytes: string): CIP25ChunkableString;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25ChunkableString}
*/
  static from_json(json: string): CIP25ChunkableString;
/**
* @param {CIP25String64} single
* @returns {CIP25ChunkableString}
*/
  static new_single(single: CIP25String64): CIP25ChunkableString;
/**
* @param {CIP25String64List} chunked
* @returns {CIP25ChunkableString}
*/
  static new_chunked(chunked: CIP25String64List): CIP25ChunkableString;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {CIP25String64 | undefined}
*/
  as_single(): CIP25String64 | undefined;
/**
* @returns {CIP25String64List | undefined}
*/
  as_chunked(): CIP25String64List | undefined;
/**
* @param {string} str
* @returns {CIP25ChunkableString}
*/
  static from_string(str: string): CIP25ChunkableString;
/**
* @returns {string}
*/
  to_string(): string;
}
/**
*/
export class CIP25FilesDetails {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP25FilesDetails}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP25FilesDetails;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP25FilesDetails}
*/
  static from_cbor_hex(cbor_bytes: string): CIP25FilesDetails;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25FilesDetails}
*/
  static from_json(json: string): CIP25FilesDetails;
/**
* @returns {CIP25String64}
*/
  name(): CIP25String64;
/**
* @returns {CIP25String64}
*/
  media_type(): CIP25String64;
/**
* @returns {CIP25ChunkableString}
*/
  src(): CIP25ChunkableString;
/**
* @param {CIP25String64} name
* @param {CIP25String64} media_type
* @param {CIP25ChunkableString} src
* @returns {CIP25FilesDetails}
*/
  static new(name: CIP25String64, media_type: CIP25String64, src: CIP25ChunkableString): CIP25FilesDetails;
}
/**
*/
export class CIP25LabelMetadata {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP25LabelMetadata}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP25LabelMetadata;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP25LabelMetadata}
*/
  static from_cbor_hex(cbor_bytes: string): CIP25LabelMetadata;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25LabelMetadata}
*/
  static from_json(json: string): CIP25LabelMetadata;
/**
* Note that Version 1 can only support utf8 string asset names.
* Version 2 can support any asset name.
* @param {number} version
* @returns {CIP25LabelMetadata}
*/
  static new(version: number): CIP25LabelMetadata;
/**
* If this is version 1 and the asset name is not a utf8 asset name
* then this will return an error.
* This function will never return an error for version 2.
* On success, returns the previous details that were overwritten, or None otherwise.
* @param {ScriptHash} policy_id
* @param {AssetName} asset_name
* @param {CIP25MetadataDetails} details
* @returns {CIP25MetadataDetails | undefined}
*/
  set(policy_id: ScriptHash, asset_name: AssetName, details: CIP25MetadataDetails): CIP25MetadataDetails | undefined;
/**
* @param {ScriptHash} policy_id
* @param {AssetName} asset_name
* @returns {CIP25MetadataDetails | undefined}
*/
  get(policy_id: ScriptHash, asset_name: AssetName): CIP25MetadataDetails | undefined;
/**
* @returns {number}
*/
  version(): number;
}
/**
* This is the entire metadata schema for CIP-25
* It can be parsed by passing in the CBOR bytes of the entire transaction metadata
* or by passing in an existing Metadata struct.
* Parsing from CBOR bytes should be marginally faster.
*/
export class CIP25Metadata {
  free(): void;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25Metadata}
*/
  static from_json(json: string): CIP25Metadata;
/**
* Serialize to CBOR bytes compatible with tx metadata
* Does not guarantee any specific type of CBOR format and should NOT
* be used with round-tripping. It will ignore all non-CIP25 keys.
* Use cml_cip25::metadate crate for round-tripping metadata.
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
* Deserialize from CBOR bytes compatible with tx metadata
* Does not guarantee any specific type of CBOR format and should NOT
* be used with round-tripping. It will ignore all non-CIP25 keys.
* Use cml_cip25::metadate crate for round-tripping metadata.
* @param {Uint8Array} data
* @returns {CIP25Metadata}
*/
  static from_cbor_bytes(data: Uint8Array): CIP25Metadata;
/**
* The core details of the CIP25 spec
* @returns {CIP25LabelMetadata}
*/
  key_721(): CIP25LabelMetadata;
/**
* @param {CIP25LabelMetadata} key_721
* @returns {CIP25Metadata}
*/
  static new(key_721: CIP25LabelMetadata): CIP25Metadata;
/**
* Create a Metadata containing only the CIP25 schema
* @returns {Metadata}
*/
  to_metadata(): Metadata;
/**
* Read the CIP25 schema from a Metadata. Ignores all other data besides CIP25
* Can fail if the Metadata does not conform to CIP25
* @param {Metadata} metadata
* @returns {CIP25Metadata}
*/
  static from_metadata(metadata: Metadata): CIP25Metadata;
/**
* Add to an existing metadata (could be empty) the full CIP25 metadata
* @param {Metadata} metadata
*/
  add_to_metadata(metadata: Metadata): void;
}
/**
*/
export class CIP25MetadataDetails {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP25MetadataDetails}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP25MetadataDetails;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP25MetadataDetails}
*/
  static from_cbor_hex(cbor_bytes: string): CIP25MetadataDetails;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25MetadataDetails}
*/
  static from_json(json: string): CIP25MetadataDetails;
/**
* @returns {CIP25String64}
*/
  name(): CIP25String64;
/**
* @returns {CIP25ChunkableString}
*/
  image(): CIP25ChunkableString;
/**
* @param {CIP25String64} media_type
*/
  set_media_type(media_type: CIP25String64): void;
/**
* @returns {CIP25String64 | undefined}
*/
  media_type(): CIP25String64 | undefined;
/**
* @param {CIP25ChunkableString} description
*/
  set_description(description: CIP25ChunkableString): void;
/**
* @returns {CIP25ChunkableString | undefined}
*/
  description(): CIP25ChunkableString | undefined;
/**
* @param {FilesDetailsList} files
*/
  set_files(files: FilesDetailsList): void;
/**
* @returns {FilesDetailsList | undefined}
*/
  files(): FilesDetailsList | undefined;
/**
* @param {CIP25String64} name
* @param {CIP25ChunkableString} image
* @returns {CIP25MetadataDetails}
*/
  static new(name: CIP25String64, image: CIP25ChunkableString): CIP25MetadataDetails;
}
/**
*/
export class CIP25MiniMetadataDetails {
  free(): void;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25MiniMetadataDetails}
*/
  static from_json(json: string): CIP25MiniMetadataDetails;
/**
* @returns {CIP25MiniMetadataDetails}
*/
  static new(): CIP25MiniMetadataDetails;
/**
* @param {CIP25String64} name
*/
  set_name(name: CIP25String64): void;
/**
* @returns {CIP25String64 | undefined}
*/
  name(): CIP25String64 | undefined;
/**
* @param {CIP25ChunkableString} image
*/
  set_image(image: CIP25ChunkableString): void;
/**
* @returns {CIP25ChunkableString | undefined}
*/
  image(): CIP25ChunkableString | undefined;
/**
* loose parsing of CIP25 metadata to allow for common exceptions to the format
* `metadatum` should represent the data where the `CIP25MetadataDetails` is in the cip25 structure
* @param {TransactionMetadatum} metadatum
* @returns {CIP25MiniMetadataDetails}
*/
  static loose_parse(metadatum: TransactionMetadatum): CIP25MiniMetadataDetails;
}
/**
* A String of at most 64 bytes.
* This is to conform with Cardano metadata restrictions.
*/
export class CIP25String64 {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP25String64}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP25String64;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP25String64}
*/
  static from_cbor_hex(cbor_bytes: string): CIP25String64;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP25String64}
*/
  static from_json(json: string): CIP25String64;
/**
* @returns {string}
*/
  get(): string;
/**
* @param {string} s
* @returns {CIP25String64}
*/
  static new(s: string): CIP25String64;
/**
* @returns {string}
*/
  to_str(): string;
/**
* @returns {string}
*/
  get_str(): string;
}
/**
*/
export class CIP25String64List {
  free(): void;
/**
* @returns {CIP25String64List}
*/
  static new(): CIP25String64List;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {CIP25String64}
*/
  get(index: number): CIP25String64;
/**
* @param {CIP25String64} elem
*/
  add(elem: CIP25String64): void;
}
/**
*/
export class CIP36Delegation {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP36Delegation}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP36Delegation;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP36Delegation}
*/
  static from_cbor_hex(cbor_bytes: string): CIP36Delegation;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36Delegation}
*/
  static from_json(json: string): CIP36Delegation;
/**
* @returns {PublicKey}
*/
  voting_pub_key(): PublicKey;
/**
* @returns {number}
*/
  weight(): number;
/**
* @param {PublicKey} voting_pub_key
* @param {number} weight
* @returns {CIP36Delegation}
*/
  static new(voting_pub_key: PublicKey, weight: number): CIP36Delegation;
}
/**
*/
export class CIP36DelegationDistribution {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP36DelegationDistribution}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP36DelegationDistribution;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP36DelegationDistribution}
*/
  static from_cbor_hex(cbor_bytes: string): CIP36DelegationDistribution;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36DelegationDistribution}
*/
  static from_json(json: string): CIP36DelegationDistribution;
/**
* @param {CIP36DelegationList} delegations
* @returns {CIP36DelegationDistribution}
*/
  static new_weighted(delegations: CIP36DelegationList): CIP36DelegationDistribution;
/**
* @param {PublicKey} legacy
* @returns {CIP36DelegationDistribution}
*/
  static new_legacy(legacy: PublicKey): CIP36DelegationDistribution;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {CIP36DelegationList | undefined}
*/
  as_weighted(): CIP36DelegationList | undefined;
/**
* @returns {PublicKey | undefined}
*/
  as_legacy(): PublicKey | undefined;
}
/**
*/
export class CIP36DelegationList {
  free(): void;
/**
* @returns {CIP36DelegationList}
*/
  static new(): CIP36DelegationList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {CIP36Delegation}
*/
  get(index: number): CIP36Delegation;
/**
* @param {CIP36Delegation} elem
*/
  add(elem: CIP36Delegation): void;
}
/**
*/
export class CIP36DeregistrationCbor {
  free(): void;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36DeregistrationCbor}
*/
  static from_json(json: string): CIP36DeregistrationCbor;
/**
* @returns {CIP36KeyDeregistration}
*/
  key_deregistration(): CIP36KeyDeregistration;
/**
* @returns {CIP36DeregistrationWitness}
*/
  deregistration_witness(): CIP36DeregistrationWitness;
/**
* @param {CIP36KeyDeregistration} key_deregistration
* @param {CIP36DeregistrationWitness} deregistration_witness
* @returns {CIP36DeregistrationCbor}
*/
  static new(key_deregistration: CIP36KeyDeregistration, deregistration_witness: CIP36DeregistrationWitness): CIP36DeregistrationCbor;
}
/**
*/
export class CIP36DeregistrationWitness {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP36DeregistrationWitness}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP36DeregistrationWitness;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP36DeregistrationWitness}
*/
  static from_cbor_hex(cbor_bytes: string): CIP36DeregistrationWitness;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36DeregistrationWitness}
*/
  static from_json(json: string): CIP36DeregistrationWitness;
/**
* @returns {Ed25519Signature}
*/
  stake_witness(): Ed25519Signature;
/**
* @param {Ed25519Signature} stake_witness
* @returns {CIP36DeregistrationWitness}
*/
  static new(stake_witness: Ed25519Signature): CIP36DeregistrationWitness;
}
/**
*/
export class CIP36KeyDeregistration {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP36KeyDeregistration}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP36KeyDeregistration;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP36KeyDeregistration}
*/
  static from_cbor_hex(cbor_bytes: string): CIP36KeyDeregistration;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36KeyDeregistration}
*/
  static from_json(json: string): CIP36KeyDeregistration;
/**
* @returns {PublicKey}
*/
  stake_credential(): PublicKey;
/**
* @returns {bigint}
*/
  nonce(): bigint;
/**
* @param {bigint} voting_purpose
*/
  set_voting_purpose(voting_purpose: bigint): void;
/**
* @returns {bigint}
*/
  voting_purpose(): bigint;
}
/**
*/
export class CIP36KeyRegistration {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP36KeyRegistration}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP36KeyRegistration;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP36KeyRegistration}
*/
  static from_cbor_hex(cbor_bytes: string): CIP36KeyRegistration;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36KeyRegistration}
*/
  static from_json(json: string): CIP36KeyRegistration;
/**
* @returns {CIP36DelegationDistribution}
*/
  delegation(): CIP36DelegationDistribution;
/**
* @returns {PublicKey}
*/
  stake_credential(): PublicKey;
/**
* @returns {Address}
*/
  payment_address(): Address;
/**
* @returns {bigint}
*/
  nonce(): bigint;
/**
* @param {bigint} voting_purpose
*/
  set_voting_purpose(voting_purpose: bigint): void;
/**
* @returns {bigint}
*/
  voting_purpose(): bigint;
}
/**
*/
export class CIP36RegistrationCbor {
  free(): void;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36RegistrationCbor}
*/
  static from_json(json: string): CIP36RegistrationCbor;
/**
* @returns {CIP36KeyRegistration}
*/
  key_registration(): CIP36KeyRegistration;
/**
* @returns {CIP36RegistrationWitness}
*/
  registration_witness(): CIP36RegistrationWitness;
/**
* @param {CIP36KeyRegistration} key_registration
* @param {CIP36RegistrationWitness} registration_witness
* @returns {CIP36RegistrationCbor}
*/
  static new(key_registration: CIP36KeyRegistration, registration_witness: CIP36RegistrationWitness): CIP36RegistrationCbor;
}
/**
*/
export class CIP36RegistrationWitness {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CIP36RegistrationWitness}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CIP36RegistrationWitness;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CIP36RegistrationWitness}
*/
  static from_cbor_hex(cbor_bytes: string): CIP36RegistrationWitness;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CIP36RegistrationWitness}
*/
  static from_json(json: string): CIP36RegistrationWitness;
/**
* @returns {Ed25519Signature}
*/
  stake_witness(): Ed25519Signature;
/**
* @param {Ed25519Signature} stake_witness
* @returns {CIP36RegistrationWitness}
*/
  static new(stake_witness: Ed25519Signature): CIP36RegistrationWitness;
}
/**
*/
export class Certificate {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Certificate}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Certificate;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Certificate}
*/
  static from_cbor_hex(cbor_bytes: string): Certificate;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Certificate}
*/
  static from_json(json: string): Certificate;
/**
* @param {Credential} stake_credential
* @returns {Certificate}
*/
  static new_stake_registration(stake_credential: Credential): Certificate;
/**
* @param {Credential} stake_credential
* @returns {Certificate}
*/
  static new_stake_deregistration(stake_credential: Credential): Certificate;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @returns {Certificate}
*/
  static new_stake_delegation(stake_credential: Credential, pool: Ed25519KeyHash): Certificate;
/**
* @param {PoolParams} pool_params
* @returns {Certificate}
*/
  static new_pool_registration(pool_params: PoolParams): Certificate;
/**
* @param {Ed25519KeyHash} pool
* @param {bigint} epoch
* @returns {Certificate}
*/
  static new_pool_retirement(pool: Ed25519KeyHash, epoch: bigint): Certificate;
/**
* @param {Credential} stake_credential
* @param {bigint} coin
* @returns {Certificate}
*/
  static new_reg_cert(stake_credential: Credential, coin: bigint): Certificate;
/**
* @param {Credential} stake_credential
* @param {bigint} coin
* @returns {Certificate}
*/
  static new_unreg_cert(stake_credential: Credential, coin: bigint): Certificate;
/**
* @param {Credential} stake_credential
* @param {DRep} d_rep
* @returns {Certificate}
*/
  static new_vote_deleg_cert(stake_credential: Credential, d_rep: DRep): Certificate;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @param {DRep} d_rep
* @returns {Certificate}
*/
  static new_stake_vote_deleg_cert(stake_credential: Credential, pool: Ed25519KeyHash, d_rep: DRep): Certificate;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @param {bigint} coin
* @returns {Certificate}
*/
  static new_stake_reg_deleg_cert(stake_credential: Credential, pool: Ed25519KeyHash, coin: bigint): Certificate;
/**
* @param {Credential} stake_credential
* @param {DRep} d_rep
* @param {bigint} coin
* @returns {Certificate}
*/
  static new_vote_reg_deleg_cert(stake_credential: Credential, d_rep: DRep, coin: bigint): Certificate;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @param {DRep} d_rep
* @param {bigint} coin
* @returns {Certificate}
*/
  static new_stake_vote_reg_deleg_cert(stake_credential: Credential, pool: Ed25519KeyHash, d_rep: DRep, coin: bigint): Certificate;
/**
* @param {Credential} committee_cold_credential
* @param {Credential} committee_hot_credential
* @returns {Certificate}
*/
  static new_auth_committee_hot_cert(committee_cold_credential: Credential, committee_hot_credential: Credential): Certificate;
/**
* @param {Credential} committee_cold_credential
* @returns {Certificate}
*/
  static new_resign_committee_cold_cert(committee_cold_credential: Credential): Certificate;
/**
* @param {Credential} drep_credential
* @param {bigint} coin
* @param {Anchor | undefined} anchor
* @returns {Certificate}
*/
  static new_reg_drep_cert(drep_credential: Credential, coin: bigint, anchor?: Anchor): Certificate;
/**
* @param {Credential} drep_credential
* @param {bigint} coin
* @returns {Certificate}
*/
  static new_unreg_drep_cert(drep_credential: Credential, coin: bigint): Certificate;
/**
* @param {Credential} drep_credential
* @param {Anchor | undefined} anchor
* @returns {Certificate}
*/
  static new_update_drep_cert(drep_credential: Credential, anchor?: Anchor): Certificate;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {StakeRegistration | undefined}
*/
  as_stake_registration(): StakeRegistration | undefined;
/**
* @returns {StakeDeregistration | undefined}
*/
  as_stake_deregistration(): StakeDeregistration | undefined;
/**
* @returns {StakeDelegation | undefined}
*/
  as_stake_delegation(): StakeDelegation | undefined;
/**
* @returns {PoolRegistration | undefined}
*/
  as_pool_registration(): PoolRegistration | undefined;
/**
* @returns {PoolRetirement | undefined}
*/
  as_pool_retirement(): PoolRetirement | undefined;
/**
* @returns {RegCert | undefined}
*/
  as_reg_cert(): RegCert | undefined;
/**
* @returns {UnregCert | undefined}
*/
  as_unreg_cert(): UnregCert | undefined;
/**
* @returns {VoteDelegCert | undefined}
*/
  as_vote_deleg_cert(): VoteDelegCert | undefined;
/**
* @returns {StakeVoteDelegCert | undefined}
*/
  as_stake_vote_deleg_cert(): StakeVoteDelegCert | undefined;
/**
* @returns {StakeRegDelegCert | undefined}
*/
  as_stake_reg_deleg_cert(): StakeRegDelegCert | undefined;
/**
* @returns {VoteRegDelegCert | undefined}
*/
  as_vote_reg_deleg_cert(): VoteRegDelegCert | undefined;
/**
* @returns {StakeVoteRegDelegCert | undefined}
*/
  as_stake_vote_reg_deleg_cert(): StakeVoteRegDelegCert | undefined;
/**
* @returns {AuthCommitteeHotCert | undefined}
*/
  as_auth_committee_hot_cert(): AuthCommitteeHotCert | undefined;
/**
* @returns {ResignCommitteeColdCert | undefined}
*/
  as_resign_committee_cold_cert(): ResignCommitteeColdCert | undefined;
/**
* @returns {RegDrepCert | undefined}
*/
  as_reg_drep_cert(): RegDrepCert | undefined;
/**
* @returns {UnregDrepCert | undefined}
*/
  as_unreg_drep_cert(): UnregDrepCert | undefined;
/**
* @returns {UpdateDrepCert | undefined}
*/
  as_update_drep_cert(): UpdateDrepCert | undefined;
}
/**
*/
export class CertificateBuilderResult {
  free(): void;
}
/**
*/
export class CertificateList {
  free(): void;
/**
* @returns {CertificateList}
*/
  static new(): CertificateList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Certificate}
*/
  get(index: number): Certificate;
/**
* @param {Certificate} elem
*/
  add(elem: Certificate): void;
}
/**
*/
export class Committee {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Committee}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Committee;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Committee}
*/
  static from_cbor_hex(cbor_bytes: string): Committee;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Committee}
*/
  static from_json(json: string): Committee;
/**
* @returns {MapCommitteeColdCredentialToEpoch}
*/
  credentials(): MapCommitteeColdCredentialToEpoch;
/**
* @returns {UnitInterval}
*/
  unit_interval(): UnitInterval;
/**
* @param {MapCommitteeColdCredentialToEpoch} credentials
* @param {UnitInterval} unit_interval
* @returns {Committee}
*/
  static new(credentials: MapCommitteeColdCredentialToEpoch, unit_interval: UnitInterval): Committee;
}
/**
*/
export class CommitteeColdCredentialList {
  free(): void;
/**
* @returns {CommitteeColdCredentialList}
*/
  static new(): CommitteeColdCredentialList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Credential}
*/
  get(index: number): Credential;
/**
* @param {Credential} elem
*/
  add(elem: Credential): void;
}
/**
*/
export class Constitution {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Constitution}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Constitution;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Constitution}
*/
  static from_cbor_hex(cbor_bytes: string): Constitution;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Constitution}
*/
  static from_json(json: string): Constitution;
/**
* @returns {Anchor}
*/
  anchor(): Anchor;
/**
* @returns {ScriptHash | undefined}
*/
  script_hash(): ScriptHash | undefined;
/**
* @param {Anchor} anchor
* @param {ScriptHash | undefined} script_hash
* @returns {Constitution}
*/
  static new(anchor: Anchor, script_hash?: ScriptHash): Constitution;
}
/**
*/
export class ConstrPlutusData {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ConstrPlutusData}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ConstrPlutusData;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ConstrPlutusData}
*/
  static from_cbor_hex(cbor_bytes: string): ConstrPlutusData;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ConstrPlutusData}
*/
  static from_json(json: string): ConstrPlutusData;
/**
* @returns {bigint}
*/
  alternative(): bigint;
/**
* @returns {PlutusDataList}
*/
  fields(): PlutusDataList;
/**
* @param {bigint} alternative
* @param {PlutusDataList} fields
* @returns {ConstrPlutusData}
*/
  static new(alternative: bigint, fields: PlutusDataList): ConstrPlutusData;
}
/**
*/
export class ConwayFormatAuxData {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ConwayFormatAuxData}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ConwayFormatAuxData;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ConwayFormatAuxData}
*/
  static from_cbor_hex(cbor_bytes: string): ConwayFormatAuxData;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ConwayFormatAuxData}
*/
  static from_json(json: string): ConwayFormatAuxData;
/**
* @param {Metadata} metadata
*/
  set_metadata(metadata: Metadata): void;
/**
* @returns {Metadata | undefined}
*/
  metadata(): Metadata | undefined;
/**
* @param {NativeScriptList} native_scripts
*/
  set_native_scripts(native_scripts: NativeScriptList): void;
/**
* @returns {NativeScriptList | undefined}
*/
  native_scripts(): NativeScriptList | undefined;
/**
* @param {PlutusV1ScriptList} plutus_v1_scripts
*/
  set_plutus_v1_scripts(plutus_v1_scripts: PlutusV1ScriptList): void;
/**
* @returns {PlutusV1ScriptList | undefined}
*/
  plutus_v1_scripts(): PlutusV1ScriptList | undefined;
/**
* @param {PlutusV2ScriptList} plutus_v2_scripts
*/
  set_plutus_v2_scripts(plutus_v2_scripts: PlutusV2ScriptList): void;
/**
* @returns {PlutusV2ScriptList | undefined}
*/
  plutus_v2_scripts(): PlutusV2ScriptList | undefined;
/**
* @param {PlutusV3ScriptList} plutus_v3_scripts
*/
  set_plutus_v3_scripts(plutus_v3_scripts: PlutusV3ScriptList): void;
/**
* @returns {PlutusV3ScriptList | undefined}
*/
  plutus_v3_scripts(): PlutusV3ScriptList | undefined;
/**
* @returns {ConwayFormatAuxData}
*/
  static new(): ConwayFormatAuxData;
}
/**
*/
export class ConwayFormatTxOut {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ConwayFormatTxOut}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ConwayFormatTxOut;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ConwayFormatTxOut}
*/
  static from_cbor_hex(cbor_bytes: string): ConwayFormatTxOut;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ConwayFormatTxOut}
*/
  static from_json(json: string): ConwayFormatTxOut;
/**
* @returns {Address}
*/
  address(): Address;
/**
* @returns {Value}
*/
  amount(): Value;
/**
* @param {DatumOption} datum_option
*/
  set_datum_option(datum_option: DatumOption): void;
/**
* @returns {DatumOption | undefined}
*/
  datum_option(): DatumOption | undefined;
/**
* @param {Script} script_reference
*/
  set_script_reference(script_reference: Script): void;
/**
* @returns {Script | undefined}
*/
  script_reference(): Script | undefined;
/**
* @param {Address} address
* @param {Value} amount
* @returns {ConwayFormatTxOut}
*/
  static new(address: Address, amount: Value): ConwayFormatTxOut;
}
/**
*/
export class CostModels {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {CostModels}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): CostModels;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {CostModels}
*/
  static from_cbor_hex(cbor_bytes: string): CostModels;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {CostModels}
*/
  static from_json(json: string): CostModels;
/**
* @param {IntList} plutus_v1
*/
  set_plutus_v1(plutus_v1: IntList): void;
/**
* @returns {IntList | undefined}
*/
  plutus_v1(): IntList | undefined;
/**
* @param {IntList} plutus_v2
*/
  set_plutus_v2(plutus_v2: IntList): void;
/**
* @returns {IntList | undefined}
*/
  plutus_v2(): IntList | undefined;
/**
* @param {IntList} plutus_v3
*/
  set_plutus_v3(plutus_v3: IntList): void;
/**
* @returns {IntList | undefined}
*/
  plutus_v3(): IntList | undefined;
/**
* @returns {CostModels}
*/
  static new(): CostModels;
}
/**
*/
export class Crc32 {
  free(): void;
/**
* initialise a new CRC32 state
* @returns {Crc32}
*/
  static new(): Crc32;
/**
* update the CRC32 with the given bytes.
*
* beware that the order in which you update the Crc32
* matter
* @param {Uint8Array} bytes
*/
  update(bytes: Uint8Array): void;
/**
* finalize the CRC32, recovering the computed value
* @returns {number}
*/
  finalize(): number;
}
/**
*/
export class Credential {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Credential}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Credential;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Credential}
*/
  static from_cbor_hex(cbor_bytes: string): Credential;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Credential}
*/
  static from_json(json: string): Credential;
/**
* @param {Ed25519KeyHash} hash
* @returns {Credential}
*/
  static new_pub_key(hash: Ed25519KeyHash): Credential;
/**
* @param {ScriptHash} hash
* @returns {Credential}
*/
  static new_script(hash: ScriptHash): Credential;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  as_pub_key(): Ed25519KeyHash | undefined;
/**
* @returns {ScriptHash | undefined}
*/
  as_script(): ScriptHash | undefined;
}
/**
*/
export class DRep {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {DRep}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): DRep;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {DRep}
*/
  static from_cbor_hex(cbor_bytes: string): DRep;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {DRep}
*/
  static from_json(json: string): DRep;
/**
* @param {Ed25519KeyHash} pool
* @returns {DRep}
*/
  static new_key(pool: Ed25519KeyHash): DRep;
/**
* @param {ScriptHash} script_hash
* @returns {DRep}
*/
  static new_script(script_hash: ScriptHash): DRep;
/**
* @returns {DRep}
*/
  static new_always_abstain(): DRep;
/**
* @returns {DRep}
*/
  static new_always_no_confidence(): DRep;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  as_key(): Ed25519KeyHash | undefined;
/**
* @returns {ScriptHash | undefined}
*/
  as_script(): ScriptHash | undefined;
}
/**
*/
export class DRepVotingThresholds {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {DRepVotingThresholds}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): DRepVotingThresholds;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {DRepVotingThresholds}
*/
  static from_cbor_hex(cbor_bytes: string): DRepVotingThresholds;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {DRepVotingThresholds}
*/
  static from_json(json: string): DRepVotingThresholds;
/**
* @returns {UnitInterval}
*/
  motion_no_confidence(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  committee_normal(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  committee_no_confidence(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  update_constitution(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  hard_fork_initiation(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  pp_network_group(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  pp_economic_group(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  pp_technical_group(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  pp_governance_group(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  treasury_withdrawal(): UnitInterval;
/**
* @param {UnitInterval} motion_no_confidence
* @param {UnitInterval} committee_normal
* @param {UnitInterval} committee_no_confidence
* @param {UnitInterval} update_constitution
* @param {UnitInterval} hard_fork_initiation
* @param {UnitInterval} pp_network_group
* @param {UnitInterval} pp_economic_group
* @param {UnitInterval} pp_technical_group
* @param {UnitInterval} pp_governance_group
* @param {UnitInterval} treasury_withdrawal
* @returns {DRepVotingThresholds}
*/
  static new(motion_no_confidence: UnitInterval, committee_normal: UnitInterval, committee_no_confidence: UnitInterval, update_constitution: UnitInterval, hard_fork_initiation: UnitInterval, pp_network_group: UnitInterval, pp_economic_group: UnitInterval, pp_technical_group: UnitInterval, pp_governance_group: UnitInterval, treasury_withdrawal: UnitInterval): DRepVotingThresholds;
}
/**
*/
export class DatumHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {DatumHash}
*/
  static from_bech32(bech32_str: string): DatumHash;
/**
* @param {string} input
* @returns {DatumHash}
*/
  static from_hex(input: string): DatumHash;
/**
* @param {Uint8Array} bytes
* @returns {DatumHash}
*/
  static from_raw_bytes(bytes: Uint8Array): DatumHash;
}
/**
*/
export class DatumOption {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {DatumOption}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): DatumOption;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {DatumOption}
*/
  static from_cbor_hex(cbor_bytes: string): DatumOption;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {DatumOption}
*/
  static from_json(json: string): DatumOption;
/**
* @param {DatumHash} datum_hash
* @returns {DatumOption}
*/
  static new_hash(datum_hash: DatumHash): DatumOption;
/**
* @param {PlutusData} datum
* @returns {DatumOption}
*/
  static new_datum(datum: PlutusData): DatumOption;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {DatumHash | undefined}
*/
  as_hash(): DatumHash | undefined;
/**
* @returns {PlutusData | undefined}
*/
  as_datum(): PlutusData | undefined;
}
/**
*/
export class DnsName {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {DnsName}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): DnsName;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {DnsName}
*/
  static from_cbor_hex(cbor_bytes: string): DnsName;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {DnsName}
*/
  static from_json(json: string): DnsName;
/**
* @returns {string}
*/
  get(): string;
}
/**
*/
export class Ed25519KeyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {Ed25519KeyHash}
*/
  static from_bech32(bech32_str: string): Ed25519KeyHash;
/**
* @param {string} input
* @returns {Ed25519KeyHash}
*/
  static from_hex(input: string): Ed25519KeyHash;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519KeyHash}
*/
  static from_raw_bytes(bytes: Uint8Array): Ed25519KeyHash;
}
/**
*/
export class Ed25519KeyHashList {
  free(): void;
/**
* @returns {Ed25519KeyHashList}
*/
  static new(): Ed25519KeyHashList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Ed25519KeyHash}
*/
  get(index: number): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} elem
*/
  add(elem: Ed25519KeyHash): void;
}
/**
*/
export class Ed25519Signature {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {Ed25519Signature}
*/
  static from_bech32(bech32_str: string): Ed25519Signature;
/**
* @param {string} input
* @returns {Ed25519Signature}
*/
  static from_hex(input: string): Ed25519Signature;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519Signature}
*/
  static from_raw_bytes(bytes: Uint8Array): Ed25519Signature;
}
/**
*/
export class EnterpriseAddress {
  free(): void;
/**
* @param {number} network
* @param {Credential} payment
* @returns {EnterpriseAddress}
*/
  static new(network: number, payment: Credential): EnterpriseAddress;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} address
* @returns {EnterpriseAddress | undefined}
*/
  static from_address(address: Address): EnterpriseAddress | undefined;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @returns {Credential}
*/
  payment(): Credential;
}
/**
*/
export class ExUnitPrices {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ExUnitPrices}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ExUnitPrices;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ExUnitPrices}
*/
  static from_cbor_hex(cbor_bytes: string): ExUnitPrices;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ExUnitPrices}
*/
  static from_json(json: string): ExUnitPrices;
/**
* @returns {Rational}
*/
  mem_price(): Rational;
/**
* @returns {Rational}
*/
  step_price(): Rational;
/**
* @param {Rational} mem_price
* @param {Rational} step_price
* @returns {ExUnitPrices}
*/
  static new(mem_price: Rational, step_price: Rational): ExUnitPrices;
}
/**
*/
export class ExUnits {
  free(): void;
/**
* @param {ExUnits} other
* @returns {ExUnits}
*/
  checked_add(other: ExUnits): ExUnits;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ExUnits}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ExUnits;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ExUnits}
*/
  static from_cbor_hex(cbor_bytes: string): ExUnits;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ExUnits}
*/
  static from_json(json: string): ExUnits;
/**
* @returns {bigint}
*/
  mem(): bigint;
/**
* @returns {bigint}
*/
  steps(): bigint;
/**
* @param {bigint} mem
* @param {bigint} steps
* @returns {ExUnits}
*/
  static new(mem: bigint, steps: bigint): ExUnits;
}
/**
*/
export class FilesDetailsList {
  free(): void;
/**
* @returns {FilesDetailsList}
*/
  static new(): FilesDetailsList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {CIP25FilesDetails}
*/
  get(index: number): CIP25FilesDetails;
/**
* @param {CIP25FilesDetails} elem
*/
  add(elem: CIP25FilesDetails): void;
}
/**
*/
export class GenesisDelegateHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {GenesisDelegateHash}
*/
  static from_bech32(bech32_str: string): GenesisDelegateHash;
/**
* @param {string} input
* @returns {GenesisDelegateHash}
*/
  static from_hex(input: string): GenesisDelegateHash;
/**
* @param {Uint8Array} bytes
* @returns {GenesisDelegateHash}
*/
  static from_raw_bytes(bytes: Uint8Array): GenesisDelegateHash;
}
/**
*/
export class GenesisHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {GenesisHash}
*/
  static from_bech32(bech32_str: string): GenesisHash;
/**
* @param {string} input
* @returns {GenesisHash}
*/
  static from_hex(input: string): GenesisHash;
/**
* @param {Uint8Array} bytes
* @returns {GenesisHash}
*/
  static from_raw_bytes(bytes: Uint8Array): GenesisHash;
}
/**
*/
export class GovAction {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {GovAction}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): GovAction;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {GovAction}
*/
  static from_cbor_hex(cbor_bytes: string): GovAction;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {GovAction}
*/
  static from_json(json: string): GovAction;
/**
* @param {GovActionId | undefined} gov_action_id
* @param {ProtocolParamUpdate} protocol_param_update
* @returns {GovAction}
*/
  static new_parameter_change_action(gov_action_id: GovActionId | undefined, protocol_param_update: ProtocolParamUpdate): GovAction;
/**
* @param {GovActionId | undefined} action_id
* @param {ProtocolVersion} version
* @returns {GovAction}
*/
  static new_hard_fork_initiation_action(action_id: GovActionId | undefined, version: ProtocolVersion): GovAction;
/**
* @param {MapRewardAccountToCoin} withdrawal
* @returns {GovAction}
*/
  static new_treasury_withdrawals_action(withdrawal: MapRewardAccountToCoin): GovAction;
/**
* @param {GovActionId | undefined} action_id
* @returns {GovAction}
*/
  static new_no_confidence(action_id?: GovActionId): GovAction;
/**
* @param {GovActionId | undefined} action_id
* @param {CommitteeColdCredentialList} cold_credentials
* @param {Committee} committee
* @returns {GovAction}
*/
  static new_new_committee(action_id: GovActionId | undefined, cold_credentials: CommitteeColdCredentialList, committee: Committee): GovAction;
/**
* @param {GovActionId | undefined} action_id
* @param {Constitution} constitution
* @returns {GovAction}
*/
  static new_new_constitution(action_id: GovActionId | undefined, constitution: Constitution): GovAction;
/**
* @returns {GovAction}
*/
  static new_info_action(): GovAction;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {ParameterChangeAction | undefined}
*/
  as_parameter_change_action(): ParameterChangeAction | undefined;
/**
* @returns {HardForkInitiationAction | undefined}
*/
  as_hard_fork_initiation_action(): HardForkInitiationAction | undefined;
/**
* @returns {TreasuryWithdrawalsAction | undefined}
*/
  as_treasury_withdrawals_action(): TreasuryWithdrawalsAction | undefined;
/**
* @returns {NoConfidence | undefined}
*/
  as_no_confidence(): NoConfidence | undefined;
/**
* @returns {NewCommittee | undefined}
*/
  as_new_committee(): NewCommittee | undefined;
/**
* @returns {NewConstitution | undefined}
*/
  as_new_constitution(): NewConstitution | undefined;
}
/**
*/
export class GovActionId {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {GovActionId}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): GovActionId;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {GovActionId}
*/
  static from_cbor_hex(cbor_bytes: string): GovActionId;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {GovActionId}
*/
  static from_json(json: string): GovActionId;
/**
* @returns {TransactionHash}
*/
  transaction_id(): TransactionHash;
/**
* @returns {bigint}
*/
  gov_action_index(): bigint;
/**
* @param {TransactionHash} transaction_id
* @param {bigint} gov_action_index
* @returns {GovActionId}
*/
  static new(transaction_id: TransactionHash, gov_action_index: bigint): GovActionId;
}
/**
*/
export class GovActionIdList {
  free(): void;
/**
* @returns {GovActionIdList}
*/
  static new(): GovActionIdList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {GovActionId}
*/
  get(index: number): GovActionId;
/**
* @param {GovActionId} elem
*/
  add(elem: GovActionId): void;
}
/**
*/
export class HDAddressPayload {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {HDAddressPayload}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): HDAddressPayload;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {HDAddressPayload}
*/
  static from_cbor_hex(cbor_bytes: string): HDAddressPayload;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class HardForkInitiationAction {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {HardForkInitiationAction}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): HardForkInitiationAction;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {HardForkInitiationAction}
*/
  static from_cbor_hex(cbor_bytes: string): HardForkInitiationAction;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {HardForkInitiationAction}
*/
  static from_json(json: string): HardForkInitiationAction;
/**
* @returns {GovActionId | undefined}
*/
  action_id(): GovActionId | undefined;
/**
* @returns {ProtocolVersion}
*/
  version(): ProtocolVersion;
/**
* @param {GovActionId | undefined} action_id
* @param {ProtocolVersion} version
* @returns {HardForkInitiationAction}
*/
  static new(action_id: GovActionId | undefined, version: ProtocolVersion): HardForkInitiationAction;
}
/**
*/
export class Header {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Header}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Header;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Header}
*/
  static from_cbor_hex(cbor_bytes: string): Header;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Header}
*/
  static from_json(json: string): Header;
/**
* @returns {HeaderBody}
*/
  header_body(): HeaderBody;
/**
* @returns {KESSignature}
*/
  body_signature(): KESSignature;
/**
* @param {HeaderBody} header_body
* @param {KESSignature} body_signature
* @returns {Header}
*/
  static new(header_body: HeaderBody, body_signature: KESSignature): Header;
}
/**
*/
export class HeaderBody {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {HeaderBody}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): HeaderBody;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {HeaderBody}
*/
  static from_cbor_hex(cbor_bytes: string): HeaderBody;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {HeaderBody}
*/
  static from_json(json: string): HeaderBody;
/**
* @returns {bigint}
*/
  block_number(): bigint;
/**
* @returns {bigint}
*/
  slot(): bigint;
/**
* @returns {BlockHeaderHash | undefined}
*/
  prev_hash(): BlockHeaderHash | undefined;
/**
* @returns {PublicKey}
*/
  issuer_vkey(): PublicKey;
/**
* @returns {VRFVkey}
*/
  vrf_vkey(): VRFVkey;
/**
* @returns {VRFCert}
*/
  vrf_result(): VRFCert;
/**
* @returns {bigint}
*/
  block_body_size(): bigint;
/**
* @returns {BlockBodyHash}
*/
  block_body_hash(): BlockBodyHash;
/**
* @returns {OperationalCert}
*/
  operational_cert(): OperationalCert;
/**
* @returns {ProtocolVersion}
*/
  protocol_version(): ProtocolVersion;
/**
* @param {bigint} block_number
* @param {bigint} slot
* @param {BlockHeaderHash | undefined} prev_hash
* @param {PublicKey} issuer_vkey
* @param {VRFVkey} vrf_vkey
* @param {VRFCert} vrf_result
* @param {bigint} block_body_size
* @param {BlockBodyHash} block_body_hash
* @param {OperationalCert} operational_cert
* @param {ProtocolVersion} protocol_version
* @returns {HeaderBody}
*/
  static new(block_number: bigint, slot: bigint, prev_hash: BlockHeaderHash | undefined, issuer_vkey: PublicKey, vrf_vkey: VRFVkey, vrf_result: VRFCert, block_body_size: bigint, block_body_hash: BlockBodyHash, operational_cert: OperationalCert, protocol_version: ProtocolVersion): HeaderBody;
}
/**
*/
export class InputAggregateWitnessData {
  free(): void;
/**
* @returns {PlutusData | undefined}
*/
  plutus_data(): PlutusData | undefined;
}
/**
*/
export class InputBuilderResult {
  free(): void;
}
/**
*/
export class Int {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
* @param {Uint8Array} cbor_bytes
* @returns {Int}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Int;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_json_value(): any;
/**
* @param {string} json
* @returns {Int}
*/
  static from_json(json: string): Int;
/**
* @param {bigint} x
* @returns {Int}
*/
  static new(x: bigint): Int;
/**
* @returns {string}
*/
  to_str(): string;
/**
* @param {string} string
* @returns {Int}
*/
  static from_str(string: string): Int;
}
/**
*/
export class IntList {
  free(): void;
/**
* @returns {IntList}
*/
  static new(): IntList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Int}
*/
  get(index: number): Int;
/**
* @param {Int} elem
*/
  add(elem: Int): void;
}
/**
*/
export class Ipv4 {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Ipv4}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Ipv4;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Ipv4}
*/
  static from_cbor_hex(cbor_bytes: string): Ipv4;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Ipv4}
*/
  static from_json(json: string): Ipv4;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class Ipv6 {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Ipv6}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Ipv6;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Ipv6}
*/
  static from_cbor_hex(cbor_bytes: string): Ipv6;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Ipv6}
*/
  static from_json(json: string): Ipv6;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class KESSignature {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {KESSignature}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): KESSignature;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {KESSignature}
*/
  static from_cbor_hex(cbor_bytes: string): KESSignature;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {KESSignature}
*/
  static from_json(json: string): KESSignature;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class KESVkey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {KESVkey}
*/
  static from_bech32(bech32_str: string): KESVkey;
/**
* @param {string} input
* @returns {KESVkey}
*/
  static from_hex(input: string): KESVkey;
/**
* @param {Uint8Array} bytes
* @returns {KESVkey}
*/
  static from_raw_bytes(bytes: Uint8Array): KESVkey;
}
/**
*/
export class LanguageList {
  free(): void;
/**
* @returns {LanguageList}
*/
  static new(): LanguageList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {number}
*/
  get(index: number): number;
/**
* @param {number} elem
*/
  add(elem: number): void;
}
/**
*/
export class LegacyDaedalusPrivateKey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
* Careful: although the linear fee is the same for Byron & Shelley
* The value of the parameters and how fees are computed is not the same
*/
export class LinearFee {
  free(): void;
/**
* @param {bigint} coefficient
* @param {bigint} constant
* @returns {LinearFee}
*/
  static new(coefficient: bigint, constant: bigint): LinearFee;
/**
* @returns {bigint}
*/
  constant(): bigint;
/**
* @returns {bigint}
*/
  coefficient(): bigint;
}
/**
*/
export class MapAssetNameToCoin {
  free(): void;
/**
* @param {AssetName} key
* @returns {bigint | undefined}
*/
  get(key: AssetName): bigint | undefined;
/**
* @param {AssetName} key
* @param {bigint} value
* @returns {bigint | undefined}
*/
  insert(key: AssetName, value: bigint): bigint | undefined;
/**
* @returns {MapAssetNameToCoin}
*/
  static new(): MapAssetNameToCoin;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* @returns {AssetNameList}
*/
  keys(): AssetNameList;
}
/**
*/
export class MapAssetNameToNonZeroInt64 {
  free(): void;
/**
* @returns {MapAssetNameToNonZeroInt64}
*/
  static new(): MapAssetNameToNonZeroInt64;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {AssetName} key
* @param {bigint} value
* @returns {bigint | undefined}
*/
  insert(key: AssetName, value: bigint): bigint | undefined;
/**
* @param {AssetName} key
* @returns {bigint | undefined}
*/
  get(key: AssetName): bigint | undefined;
/**
* @returns {AssetNameList}
*/
  keys(): AssetNameList;
}
/**
*/
export class MapAssetNameToU64 {
  free(): void;
/**
* @returns {MapAssetNameToU64}
*/
  static new(): MapAssetNameToU64;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {AssetName} key
* @param {bigint} value
* @returns {bigint | undefined}
*/
  insert(key: AssetName, value: bigint): bigint | undefined;
/**
* @param {AssetName} key
* @returns {bigint | undefined}
*/
  get(key: AssetName): bigint | undefined;
/**
* @returns {AssetNameList}
*/
  keys(): AssetNameList;
}
/**
*/
export class MapCommitteeColdCredentialToEpoch {
  free(): void;
/**
* @returns {MapCommitteeColdCredentialToEpoch}
*/
  static new(): MapCommitteeColdCredentialToEpoch;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {Credential} key
* @param {bigint} value
* @returns {bigint | undefined}
*/
  insert(key: Credential, value: bigint): bigint | undefined;
/**
* @param {Credential} key
* @returns {bigint | undefined}
*/
  get(key: Credential): bigint | undefined;
/**
* @returns {CommitteeColdCredentialList}
*/
  keys(): CommitteeColdCredentialList;
}
/**
*/
export class MapGovActionIdToVotingProcedure {
  free(): void;
/**
* @returns {MapGovActionIdToVotingProcedure}
*/
  static new(): MapGovActionIdToVotingProcedure;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {GovActionId} key
* @param {VotingProcedure} value
* @returns {VotingProcedure | undefined}
*/
  insert(key: GovActionId, value: VotingProcedure): VotingProcedure | undefined;
/**
* @param {GovActionId} key
* @returns {VotingProcedure | undefined}
*/
  get(key: GovActionId): VotingProcedure | undefined;
/**
* @returns {GovActionIdList}
*/
  keys(): GovActionIdList;
}
/**
*/
export class MapPlutusDataToPlutusData {
  free(): void;
/**
* @returns {MapPlutusDataToPlutusData}
*/
  static new(): MapPlutusDataToPlutusData;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {PlutusData} key
* @param {PlutusData} value
* @returns {PlutusData | undefined}
*/
  insert(key: PlutusData, value: PlutusData): PlutusData | undefined;
/**
* @param {PlutusData} key
* @returns {PlutusData | undefined}
*/
  get(key: PlutusData): PlutusData | undefined;
/**
* @returns {PlutusDataList}
*/
  keys(): PlutusDataList;
}
/**
*/
export class MapRewardAccountToCoin {
  free(): void;
/**
* @returns {MapRewardAccountToCoin}
*/
  static new(): MapRewardAccountToCoin;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {RewardAddress} key
* @param {bigint} value
* @returns {bigint | undefined}
*/
  insert(key: RewardAddress, value: bigint): bigint | undefined;
/**
* @param {RewardAddress} key
* @returns {bigint | undefined}
*/
  get(key: RewardAddress): bigint | undefined;
/**
* @returns {RewardAccountList}
*/
  keys(): RewardAccountList;
}
/**
*/
export class MapStakeCredentialToDeltaCoin {
  free(): void;
/**
* @returns {MapStakeCredentialToDeltaCoin}
*/
  static new(): MapStakeCredentialToDeltaCoin;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {Credential} key
* @param {Int} value
* @returns {Int | undefined}
*/
  insert(key: Credential, value: Int): Int | undefined;
/**
* @param {Credential} key
* @returns {Int | undefined}
*/
  get(key: Credential): Int | undefined;
/**
* @returns {StakeCredentialList}
*/
  keys(): StakeCredentialList;
}
/**
*/
export class MapTransactionIndexToAuxiliaryData {
  free(): void;
/**
* @returns {MapTransactionIndexToAuxiliaryData}
*/
  static new(): MapTransactionIndexToAuxiliaryData;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} key
* @param {AuxiliaryData} value
* @returns {AuxiliaryData | undefined}
*/
  insert(key: number, value: AuxiliaryData): AuxiliaryData | undefined;
/**
* @param {number} key
* @returns {AuxiliaryData | undefined}
*/
  get(key: number): AuxiliaryData | undefined;
/**
* @returns {Uint16Array}
*/
  keys(): Uint16Array;
}
/**
*/
export class MapTransactionMetadatumToTransactionMetadatum {
  free(): void;
/**
* @returns {MapTransactionMetadatumToTransactionMetadatum}
*/
  static new(): MapTransactionMetadatumToTransactionMetadatum;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {TransactionMetadatum} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert(key: TransactionMetadatum, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {TransactionMetadatum} key
* @returns {TransactionMetadatum | undefined}
*/
  get(key: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @returns {TransactionMetadatumList}
*/
  keys(): TransactionMetadatumList;
}
/**
*/
export class Metadata {
  free(): void;
/**
* @returns {Metadata}
*/
  static new(): Metadata;
/**
* How many metadatum labels there are.
* @returns {number}
*/
  len(): number;
/**
* Replaces all metadatums of a given label, if any exist.
* @param {bigint} key
* @param {TransactionMetadatum} value
*/
  set(key: bigint, value: TransactionMetadatum): void;
/**
* Gets the Metadatum corresponding to a given label, if it exists.
* Note: In the case of duplicate labels this only returns the first metadatum.
* This is an extremely rare occurence on-chain but can happen.
* @param {bigint} label
* @returns {TransactionMetadatum | undefined}
*/
  get(label: bigint): TransactionMetadatum | undefined;
/**
* In the extremely unlikely situation there are duplicate labels, this gets all of a single label
* @param {bigint} label
* @returns {TransactionMetadatumList | undefined}
*/
  get_all(label: bigint): TransactionMetadatumList | undefined;
/**
* @returns {TransactionMetadatumLabels}
*/
  labels(): TransactionMetadatumLabels;
}
/**
*/
export class MetadatumList {
  free(): void;
/**
* @returns {MetadatumList}
*/
  static new(): MetadatumList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionMetadatum}
*/
  get(index: number): TransactionMetadatum;
/**
* @param {TransactionMetadatum} elem
*/
  add(elem: TransactionMetadatum): void;
}
/**
*/
export class MetadatumMap {
  free(): void;
/**
* @returns {MetadatumMap}
*/
  static new(): MetadatumMap;
/**
* @returns {number}
*/
  len(): number;
/**
* Replaces all metadatums of a given key, if any exist.
* @param {TransactionMetadatum} key
* @param {TransactionMetadatum} value
*/
  set(key: TransactionMetadatum, value: TransactionMetadatum): void;
/**
* Gets the Metadatum corresponding to a given key, if it exists.
* Note: In the case of duplicate keys this only returns the first metadatum.
* This is an extremely rare occurence (2 total on mainnet) on-chain but can happen.
* @param {TransactionMetadatum} key
* @returns {TransactionMetadatum | undefined}
*/
  get(key: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* In the extremely unlikely situation there are duplicate keys, this gets all of a single key
* @param {TransactionMetadatum} key
* @returns {TransactionMetadatumList | undefined}
*/
  get_all(key: TransactionMetadatum): TransactionMetadatumList | undefined;
/**
* @returns {MetadatumList}
*/
  keys(): MetadatumList;
}
/**
*/
export class Mint {
  free(): void;
/**
* @returns {Mint}
*/
  static new(): Mint;
/**
* @returns {number}
*/
  policy_count(): number;
/**
* @param {ScriptHash} policy_id
* @param {MapAssetNameToNonZeroInt64} assets
* @returns {MapAssetNameToNonZeroInt64 | undefined}
*/
  insert_assets(policy_id: ScriptHash, assets: MapAssetNameToNonZeroInt64): MapAssetNameToNonZeroInt64 | undefined;
/**
* @param {ScriptHash} key
* @returns {MapAssetNameToNonZeroInt64 | undefined}
*/
  get_assets(key: ScriptHash): MapAssetNameToNonZeroInt64 | undefined;
/**
* Get the value of policy_id:asset_name if it exists.
* @param {ScriptHash} policy_id
* @param {AssetName} asset
* @returns {bigint | undefined}
*/
  get(policy_id: ScriptHash, asset: AssetName): bigint | undefined;
/**
* Set the value of policy_id:asset_name to value.
* Returns the previous value, or None if it didn't exist
* @param {ScriptHash} policy_id
* @param {AssetName} asset
* @param {bigint} value
* @returns {bigint | undefined}
*/
  set(policy_id: ScriptHash, asset: AssetName, value: bigint): bigint | undefined;
/**
* @returns {PolicyIdList}
*/
  keys(): PolicyIdList;
/**
* Adds two mints together, checking value bounds.
* Does not modify self, and instead returns the result.
* @param {Mint} rhs
* @returns {Mint}
*/
  checked_add(rhs: Mint): Mint;
/**
* Subtracts rhs from this mint.
* This does not modify self, and instead returns the result.
* @param {Mint} rhs
* @returns {Mint}
*/
  checked_sub(rhs: Mint): Mint;
/**
* Returns the multiasset where only positive (minting) entries are present
* @returns {MultiAsset}
*/
  as_positive_multiasset(): MultiAsset;
/**
* Returns the multiasset where only negative (burning) entries are present
* @returns {MultiAsset}
*/
  as_negative_multiasset(): MultiAsset;
}
/**
*/
export class MintBuilderResult {
  free(): void;
}
/**
*/
export class MultiAsset {
  free(): void;
/**
* @returns {MultiAsset}
*/
  static new(): MultiAsset;
/**
* @returns {number}
*/
  policy_count(): number;
/**
* @param {ScriptHash} policy_id
* @param {MapAssetNameToCoin} assets
* @returns {MapAssetNameToCoin | undefined}
*/
  insert_assets(policy_id: ScriptHash, assets: MapAssetNameToCoin): MapAssetNameToCoin | undefined;
/**
* @param {ScriptHash} key
* @returns {MapAssetNameToCoin | undefined}
*/
  get_assets(key: ScriptHash): MapAssetNameToCoin | undefined;
/**
* Get the value of policy_id:asset_name if it exists.
* @param {ScriptHash} policy_id
* @param {AssetName} asset
* @returns {bigint | undefined}
*/
  get(policy_id: ScriptHash, asset: AssetName): bigint | undefined;
/**
* Set the value of policy_id:asset_name to value.
* Returns the previous value, or None if it didn't exist
* @param {ScriptHash} policy_id
* @param {AssetName} asset
* @param {bigint} value
* @returns {bigint | undefined}
*/
  set(policy_id: ScriptHash, asset: AssetName, value: bigint): bigint | undefined;
/**
* @returns {PolicyIdList}
*/
  keys(): PolicyIdList;
/**
* Adds to multiassets together, checking value bounds.
* Does not modify self, and instead returns the result.
* @param {MultiAsset} rhs
* @returns {MultiAsset}
*/
  checked_add(rhs: MultiAsset): MultiAsset;
/**
* Subtracts rhs from this multiasset.
* This does not modify self, and instead returns the result.
* If this would cause there to be fewer than 0 of a given asset
* an error will be returned.
* Use clamped_sub if you need to only try to remove assets when they exist
* and ignore them when they don't.
* @param {MultiAsset} rhs
* @returns {MultiAsset}
*/
  checked_sub(rhs: MultiAsset): MultiAsset;
/**
* Sybtracts rhs from this multiasset.
* If this would cause there to be 0 or fewer of a given asset
* it will simply be removed entirely from the result.
* @param {MultiAsset} rhs
* @returns {MultiAsset}
*/
  clamped_sub(rhs: MultiAsset): MultiAsset;
}
/**
*/
export class MultiHostName {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {MultiHostName}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): MultiHostName;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {MultiHostName}
*/
  static from_cbor_hex(cbor_bytes: string): MultiHostName;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {MultiHostName}
*/
  static from_json(json: string): MultiHostName;
/**
* @returns {DnsName}
*/
  dns_name(): DnsName;
/**
* @param {DnsName} dns_name
* @returns {MultiHostName}
*/
  static new(dns_name: DnsName): MultiHostName;
}
/**
*/
export class NativeScript {
  free(): void;
/**
* Returns an array of unique Ed25519KeyHashes
* contained within this script recursively on any depth level.
* The order of the keys in the result is not determined in any way.
* @returns {Ed25519KeyHashList}
*/
  get_required_signers(): Ed25519KeyHashList;
/**
* @returns {ScriptHash}
*/
  hash(): ScriptHash;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {NativeScript}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): NativeScript;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {NativeScript}
*/
  static from_cbor_hex(cbor_bytes: string): NativeScript;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {NativeScript}
*/
  static from_json(json: string): NativeScript;
/**
* @param {Ed25519KeyHash} ed25519_key_hash
* @returns {NativeScript}
*/
  static new_script_pubkey(ed25519_key_hash: Ed25519KeyHash): NativeScript;
/**
* @param {NativeScriptList} native_scripts
* @returns {NativeScript}
*/
  static new_script_all(native_scripts: NativeScriptList): NativeScript;
/**
* @param {NativeScriptList} native_scripts
* @returns {NativeScript}
*/
  static new_script_any(native_scripts: NativeScriptList): NativeScript;
/**
* @param {bigint} n
* @param {NativeScriptList} native_scripts
* @returns {NativeScript}
*/
  static new_script_n_of_k(n: bigint, native_scripts: NativeScriptList): NativeScript;
/**
* @param {bigint} before
* @returns {NativeScript}
*/
  static new_script_invalid_before(before: bigint): NativeScript;
/**
* @param {bigint} after
* @returns {NativeScript}
*/
  static new_script_invalid_hereafter(after: bigint): NativeScript;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {ScriptPubkey | undefined}
*/
  as_script_pubkey(): ScriptPubkey | undefined;
/**
* @returns {ScriptAll | undefined}
*/
  as_script_all(): ScriptAll | undefined;
/**
* @returns {ScriptAny | undefined}
*/
  as_script_any(): ScriptAny | undefined;
/**
* @returns {ScriptNOfK | undefined}
*/
  as_script_n_of_k(): ScriptNOfK | undefined;
/**
* @returns {ScriptInvalidBefore | undefined}
*/
  as_script_invalid_before(): ScriptInvalidBefore | undefined;
/**
* @returns {ScriptInvalidHereafter | undefined}
*/
  as_script_invalid_hereafter(): ScriptInvalidHereafter | undefined;
}
/**
*/
export class NativeScriptList {
  free(): void;
/**
* @returns {NativeScriptList}
*/
  static new(): NativeScriptList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {NativeScript}
*/
  get(index: number): NativeScript;
/**
* @param {NativeScript} elem
*/
  add(elem: NativeScript): void;
}
/**
*/
export class NativeScriptWitnessInfo {
  free(): void;
/**
* Unsure which keys will sign, but you know the exact number to save on tx fee
* @param {number} num
* @returns {NativeScriptWitnessInfo}
*/
  static num_signatures(num: number): NativeScriptWitnessInfo;
/**
* This native script will be witnessed by exactly these keys
* @param {Ed25519KeyHashList} vkeys
* @returns {NativeScriptWitnessInfo}
*/
  static vkeys(vkeys: Ed25519KeyHashList): NativeScriptWitnessInfo;
/**
* You don't know how many keys will sign, so the maximum possible case will be assumed
* @returns {NativeScriptWitnessInfo}
*/
  static assume_signature_count(): NativeScriptWitnessInfo;
}
/**
*/
export class NetworkId {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {NetworkId}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): NetworkId;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {NetworkId}
*/
  static from_cbor_hex(cbor_bytes: string): NetworkId;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {NetworkId}
*/
  static from_json(json: string): NetworkId;
/**
* @param {bigint} network
* @returns {NetworkId}
*/
  static new(network: bigint): NetworkId;
/**
* @returns {NetworkId}
*/
  static mainnet(): NetworkId;
/**
* @returns {NetworkId}
*/
  static testnet(): NetworkId;
/**
* @returns {bigint}
*/
  network(): bigint;
}
/**
*/
export class NewCommittee {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {NewCommittee}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): NewCommittee;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {NewCommittee}
*/
  static from_cbor_hex(cbor_bytes: string): NewCommittee;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {NewCommittee}
*/
  static from_json(json: string): NewCommittee;
/**
* @returns {GovActionId | undefined}
*/
  action_id(): GovActionId | undefined;
/**
* @returns {CommitteeColdCredentialList}
*/
  cold_credentials(): CommitteeColdCredentialList;
/**
* @returns {Committee}
*/
  committee(): Committee;
/**
* @param {GovActionId | undefined} action_id
* @param {CommitteeColdCredentialList} cold_credentials
* @param {Committee} committee
* @returns {NewCommittee}
*/
  static new(action_id: GovActionId | undefined, cold_credentials: CommitteeColdCredentialList, committee: Committee): NewCommittee;
}
/**
*/
export class NewConstitution {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {NewConstitution}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): NewConstitution;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {NewConstitution}
*/
  static from_cbor_hex(cbor_bytes: string): NewConstitution;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {NewConstitution}
*/
  static from_json(json: string): NewConstitution;
/**
* @returns {GovActionId | undefined}
*/
  action_id(): GovActionId | undefined;
/**
* @returns {Constitution}
*/
  constitution(): Constitution;
/**
* @param {GovActionId | undefined} action_id
* @param {Constitution} constitution
* @returns {NewConstitution}
*/
  static new(action_id: GovActionId | undefined, constitution: Constitution): NewConstitution;
}
/**
*/
export class NoConfidence {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {NoConfidence}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): NoConfidence;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {NoConfidence}
*/
  static from_cbor_hex(cbor_bytes: string): NoConfidence;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {NoConfidence}
*/
  static from_json(json: string): NoConfidence;
/**
* @returns {GovActionId | undefined}
*/
  action_id(): GovActionId | undefined;
/**
* @param {GovActionId | undefined} action_id
* @returns {NoConfidence}
*/
  static new(action_id?: GovActionId): NoConfidence;
}
/**
*/
export class Nonce {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Nonce}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Nonce;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Nonce}
*/
  static from_cbor_hex(cbor_bytes: string): Nonce;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Nonce}
*/
  static from_json(json: string): Nonce;
/**
* @returns {Nonce}
*/
  static new_identity(): Nonce;
/**
* @param {NonceHash} hash
* @returns {Nonce}
*/
  static new_hash(hash: NonceHash): Nonce;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {NonceHash | undefined}
*/
  as_hash(): NonceHash | undefined;
}
/**
*/
export class NonceHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {NonceHash}
*/
  static from_bech32(bech32_str: string): NonceHash;
/**
* @param {string} input
* @returns {NonceHash}
*/
  static from_hex(input: string): NonceHash;
/**
* @param {Uint8Array} bytes
* @returns {NonceHash}
*/
  static from_raw_bytes(bytes: Uint8Array): NonceHash;
}
/**
*/
export class OperationalCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {OperationalCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): OperationalCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {OperationalCert}
*/
  static from_cbor_hex(cbor_bytes: string): OperationalCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {OperationalCert}
*/
  static from_json(json: string): OperationalCert;
/**
* @returns {KESVkey}
*/
  hot_vkey(): KESVkey;
/**
* @returns {bigint}
*/
  sequence_number(): bigint;
/**
* @returns {bigint}
*/
  kes_period(): bigint;
/**
* @returns {Ed25519Signature}
*/
  sigma(): Ed25519Signature;
/**
* @param {KESVkey} hot_vkey
* @param {bigint} sequence_number
* @param {bigint} kes_period
* @param {Ed25519Signature} sigma
* @returns {OperationalCert}
*/
  static new(hot_vkey: KESVkey, sequence_number: bigint, kes_period: bigint, sigma: Ed25519Signature): OperationalCert;
}
/**
*/
export class ParameterChangeAction {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ParameterChangeAction}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ParameterChangeAction;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ParameterChangeAction}
*/
  static from_cbor_hex(cbor_bytes: string): ParameterChangeAction;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ParameterChangeAction}
*/
  static from_json(json: string): ParameterChangeAction;
/**
* @returns {GovActionId | undefined}
*/
  gov_action_id(): GovActionId | undefined;
/**
* @returns {ProtocolParamUpdate}
*/
  protocol_param_update(): ProtocolParamUpdate;
/**
* @param {GovActionId | undefined} gov_action_id
* @param {ProtocolParamUpdate} protocol_param_update
* @returns {ParameterChangeAction}
*/
  static new(gov_action_id: GovActionId | undefined, protocol_param_update: ProtocolParamUpdate): ParameterChangeAction;
}
/**
* A partial Plutus witness
* It contains all the information needed to witness the Plutus script execution
* except for the redeemer tag and index
* Note: no datum is attached because only input script types have datums
*/
export class PartialPlutusWitness {
  free(): void;
/**
* @param {PlutusScriptWitness} script
* @param {PlutusData} data
* @returns {PartialPlutusWitness}
*/
  static new(script: PlutusScriptWitness, data: PlutusData): PartialPlutusWitness;
/**
* @returns {PlutusScriptWitness}
*/
  script(): PlutusScriptWitness;
/**
* @returns {PlutusData}
*/
  data(): PlutusData;
}
/**
*/
export class PlutusData {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PlutusData}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PlutusData;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PlutusData}
*/
  static from_cbor_hex(cbor_bytes: string): PlutusData;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PlutusData}
*/
  static from_json(json: string): PlutusData;
/**
* @param {ConstrPlutusData} constr_plutus_data
* @returns {PlutusData}
*/
  static new_constr_plutus_data(constr_plutus_data: ConstrPlutusData): PlutusData;
/**
* @param {PlutusMap} map
* @returns {PlutusData}
*/
  static new_map(map: PlutusMap): PlutusData;
/**
* @param {PlutusDataList} list
* @returns {PlutusData}
*/
  static new_list(list: PlutusDataList): PlutusData;
/**
* @param {BigInteger} big_int
* @returns {PlutusData}
*/
  static new_integer(big_int: BigInteger): PlutusData;
/**
* @param {Uint8Array} bytes
* @returns {PlutusData}
*/
  static new_bytes(bytes: Uint8Array): PlutusData;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {ConstrPlutusData | undefined}
*/
  as_constr_plutus_data(): ConstrPlutusData | undefined;
/**
* @returns {PlutusMap | undefined}
*/
  as_map(): PlutusMap | undefined;
/**
* @returns {PlutusDataList | undefined}
*/
  as_list(): PlutusDataList | undefined;
/**
* @returns {BigInteger | undefined}
*/
  as_integer(): BigInteger | undefined;
/**
* @returns {Uint8Array | undefined}
*/
  as_bytes(): Uint8Array | undefined;
}
/**
*/
export class PlutusDataList {
  free(): void;
/**
* @returns {PlutusDataList}
*/
  static new(): PlutusDataList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {PlutusData}
*/
  get(index: number): PlutusData;
/**
* @param {PlutusData} elem
*/
  add(elem: PlutusData): void;
}
/**
*/
export class PlutusMap {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PlutusMap}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PlutusMap;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PlutusMap}
*/
  static from_cbor_hex(cbor_bytes: string): PlutusMap;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PlutusMap}
*/
  static from_json(json: string): PlutusMap;
/**
* @returns {PlutusMap}
*/
  static new(): PlutusMap;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* Replaces all datums of a given key, if any exist.
* @param {PlutusData} key
* @param {PlutusData} value
*/
  set(key: PlutusData, value: PlutusData): void;
/**
* Gets the plutus datum corresponding to a given key, if it exists.
* Note: In the case of duplicate keys this only returns the first datum.
* This is an extremely rare occurence on-chain but can happen.
* @param {PlutusData} key
* @returns {PlutusData | undefined}
*/
  get(key: PlutusData): PlutusData | undefined;
/**
* In the extremely unlikely situation there are duplicate keys, this gets all of a single key
* @param {PlutusData} key
* @returns {PlutusDataList | undefined}
*/
  get_all(key: PlutusData): PlutusDataList | undefined;
/**
* @returns {PlutusDataList}
*/
  keys(): PlutusDataList;
}
/**
* Version-agnostic Plutus script
*/
export class PlutusScript {
  free(): void;
/**
* @param {PlutusV1Script} script
* @returns {PlutusScript}
*/
  static from_v1(script: PlutusV1Script): PlutusScript;
/**
* @param {PlutusV2Script} script
* @returns {PlutusScript}
*/
  static from_v2(script: PlutusV2Script): PlutusScript;
/**
* @param {PlutusV3Script} script
* @returns {PlutusScript}
*/
  static from_v3(script: PlutusV3Script): PlutusScript;
/**
* @returns {ScriptHash}
*/
  hash(): ScriptHash;
/**
* @returns {PlutusV1Script | undefined}
*/
  as_v1(): PlutusV1Script | undefined;
/**
* @returns {PlutusV2Script | undefined}
*/
  as_v2(): PlutusV2Script | undefined;
/**
* @returns {PlutusV3Script | undefined}
*/
  as_v3(): PlutusV3Script | undefined;
/**
* @returns {number}
*/
  version(): number;
}
/**
*/
export class PlutusScriptWitness {
  free(): void;
/**
* @param {PlutusScript} script
* @returns {PlutusScriptWitness}
*/
  static new_script(script: PlutusScript): PlutusScriptWitness;
/**
* @param {ScriptHash} hash
* @returns {PlutusScriptWitness}
*/
  static new_ref(hash: ScriptHash): PlutusScriptWitness;
/**
* @returns {ScriptHash}
*/
  hash(): ScriptHash;
}
/**
*/
export class PlutusV1Script {
  free(): void;
/**
* @returns {ScriptHash}
*/
  hash(): ScriptHash;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PlutusV1Script}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PlutusV1Script;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PlutusV1Script}
*/
  static from_cbor_hex(cbor_bytes: string): PlutusV1Script;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PlutusV1Script}
*/
  static from_json(json: string): PlutusV1Script;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class PlutusV1ScriptList {
  free(): void;
/**
* @returns {PlutusV1ScriptList}
*/
  static new(): PlutusV1ScriptList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {PlutusV1Script}
*/
  get(index: number): PlutusV1Script;
/**
* @param {PlutusV1Script} elem
*/
  add(elem: PlutusV1Script): void;
}
/**
*/
export class PlutusV2Script {
  free(): void;
/**
* @returns {ScriptHash}
*/
  hash(): ScriptHash;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PlutusV2Script}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PlutusV2Script;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PlutusV2Script}
*/
  static from_cbor_hex(cbor_bytes: string): PlutusV2Script;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PlutusV2Script}
*/
  static from_json(json: string): PlutusV2Script;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class PlutusV2ScriptList {
  free(): void;
/**
* @returns {PlutusV2ScriptList}
*/
  static new(): PlutusV2ScriptList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {PlutusV2Script}
*/
  get(index: number): PlutusV2Script;
/**
* @param {PlutusV2Script} elem
*/
  add(elem: PlutusV2Script): void;
}
/**
*/
export class PlutusV3Script {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PlutusV3Script}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PlutusV3Script;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PlutusV3Script}
*/
  static from_cbor_hex(cbor_bytes: string): PlutusV3Script;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PlutusV3Script}
*/
  static from_json(json: string): PlutusV3Script;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}
/**
*/
export class PlutusV3ScriptList {
  free(): void;
/**
* @returns {PlutusV3ScriptList}
*/
  static new(): PlutusV3ScriptList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {PlutusV3Script}
*/
  get(index: number): PlutusV3Script;
/**
* @param {PlutusV3Script} elem
*/
  add(elem: PlutusV3Script): void;
}
/**
*/
export class Pointer {
  free(): void;
}
/**
*/
export class PointerAddress {
  free(): void;
/**
* @param {number} network
* @param {Credential} payment
* @param {Pointer} stake
* @returns {PointerAddress}
*/
  static new(network: number, payment: Credential, stake: Pointer): PointerAddress;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} address
* @returns {PointerAddress | undefined}
*/
  static from_address(address: Address): PointerAddress | undefined;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @returns {Credential}
*/
  payment(): Credential;
/**
* @returns {Pointer}
*/
  stake(): Pointer;
}
/**
*/
export class PolicyIdList {
  free(): void;
/**
* @returns {PolicyIdList}
*/
  static new(): PolicyIdList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {ScriptHash}
*/
  get(index: number): ScriptHash;
/**
* @param {ScriptHash} elem
*/
  add(elem: ScriptHash): void;
}
/**
*/
export class PoolMetadata {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PoolMetadata}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PoolMetadata;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PoolMetadata}
*/
  static from_cbor_hex(cbor_bytes: string): PoolMetadata;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PoolMetadata}
*/
  static from_json(json: string): PoolMetadata;
/**
* @returns {Url}
*/
  url(): Url;
/**
* @returns {PoolMetadataHash}
*/
  pool_metadata_hash(): PoolMetadataHash;
/**
* @param {Url} url
* @param {PoolMetadataHash} pool_metadata_hash
* @returns {PoolMetadata}
*/
  static new(url: Url, pool_metadata_hash: PoolMetadataHash): PoolMetadata;
}
/**
*/
export class PoolMetadataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {PoolMetadataHash}
*/
  static from_bech32(bech32_str: string): PoolMetadataHash;
/**
* @param {string} input
* @returns {PoolMetadataHash}
*/
  static from_hex(input: string): PoolMetadataHash;
/**
* @param {Uint8Array} bytes
* @returns {PoolMetadataHash}
*/
  static from_raw_bytes(bytes: Uint8Array): PoolMetadataHash;
}
/**
*/
export class PoolParams {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PoolParams}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PoolParams;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PoolParams}
*/
  static from_cbor_hex(cbor_bytes: string): PoolParams;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PoolParams}
*/
  static from_json(json: string): PoolParams;
/**
* @returns {Ed25519KeyHash}
*/
  operator(): Ed25519KeyHash;
/**
* @returns {VRFKeyHash}
*/
  vrf_keyhash(): VRFKeyHash;
/**
* @returns {bigint}
*/
  pledge(): bigint;
/**
* @returns {bigint}
*/
  cost(): bigint;
/**
* @returns {UnitInterval}
*/
  margin(): UnitInterval;
/**
* @returns {RewardAddress}
*/
  reward_account(): RewardAddress;
/**
* @returns {Ed25519KeyHashList}
*/
  pool_owners(): Ed25519KeyHashList;
/**
* @returns {RelayList}
*/
  relays(): RelayList;
/**
* @returns {PoolMetadata | undefined}
*/
  pool_metadata(): PoolMetadata | undefined;
/**
* @param {Ed25519KeyHash} operator
* @param {VRFKeyHash} vrf_keyhash
* @param {bigint} pledge
* @param {bigint} cost
* @param {UnitInterval} margin
* @param {RewardAddress} reward_account
* @param {Ed25519KeyHashList} pool_owners
* @param {RelayList} relays
* @param {PoolMetadata | undefined} pool_metadata
* @returns {PoolParams}
*/
  static new(operator: Ed25519KeyHash, vrf_keyhash: VRFKeyHash, pledge: bigint, cost: bigint, margin: UnitInterval, reward_account: RewardAddress, pool_owners: Ed25519KeyHashList, relays: RelayList, pool_metadata?: PoolMetadata): PoolParams;
}
/**
*/
export class PoolRegistration {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PoolRegistration}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PoolRegistration;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PoolRegistration}
*/
  static from_cbor_hex(cbor_bytes: string): PoolRegistration;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PoolRegistration}
*/
  static from_json(json: string): PoolRegistration;
/**
* @returns {PoolParams}
*/
  pool_params(): PoolParams;
/**
* @param {PoolParams} pool_params
* @returns {PoolRegistration}
*/
  static new(pool_params: PoolParams): PoolRegistration;
}
/**
*/
export class PoolRetirement {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PoolRetirement}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PoolRetirement;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PoolRetirement}
*/
  static from_cbor_hex(cbor_bytes: string): PoolRetirement;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PoolRetirement}
*/
  static from_json(json: string): PoolRetirement;
/**
* @returns {Ed25519KeyHash}
*/
  pool(): Ed25519KeyHash;
/**
* @returns {bigint}
*/
  epoch(): bigint;
/**
* @param {Ed25519KeyHash} pool
* @param {bigint} epoch
* @returns {PoolRetirement}
*/
  static new(pool: Ed25519KeyHash, epoch: bigint): PoolRetirement;
}
/**
*/
export class PoolVotingThresholds {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {PoolVotingThresholds}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): PoolVotingThresholds;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {PoolVotingThresholds}
*/
  static from_cbor_hex(cbor_bytes: string): PoolVotingThresholds;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {PoolVotingThresholds}
*/
  static from_json(json: string): PoolVotingThresholds;
/**
* @returns {UnitInterval}
*/
  motion_no_confidence(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  committee_normal(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  committee_no_confidence(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  hard_fork_initiation(): UnitInterval;
/**
* @param {UnitInterval} motion_no_confidence
* @param {UnitInterval} committee_normal
* @param {UnitInterval} committee_no_confidence
* @param {UnitInterval} hard_fork_initiation
* @returns {PoolVotingThresholds}
*/
  static new(motion_no_confidence: UnitInterval, committee_normal: UnitInterval, committee_no_confidence: UnitInterval, hard_fork_initiation: UnitInterval): PoolVotingThresholds;
}
/**
*/
export class PrivateKey {
  free(): void;
/**
* @returns {PublicKey}
*/
  to_public(): PublicKey;
/**
* @returns {PrivateKey}
*/
  static generate_ed25519(): PrivateKey;
/**
* @returns {PrivateKey}
*/
  static generate_ed25519extended(): PrivateKey;
/**
* Get private key from its bech32 representation
* ```javascript
* PrivateKey.from_bech32(&#39;ed25519_sk1ahfetf02qwwg4dkq7mgp4a25lx5vh9920cr5wnxmpzz9906qvm8qwvlts0&#39;);
* ```
* For an extended 25519 key
* ```javascript
* PrivateKey.from_bech32(&#39;ed25519e_sk1gqwl4szuwwh6d0yk3nsqcc6xxc3fpvjlevgwvt60df59v8zd8f8prazt8ln3lmz096ux3xvhhvm3ca9wj2yctdh3pnw0szrma07rt5gl748fp&#39;);
* ```
* @param {string} bech32_str
* @returns {PrivateKey}
*/
  static from_bech32(bech32_str: string): PrivateKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PrivateKey}
*/
  static from_extended_bytes(bytes: Uint8Array): PrivateKey;
/**
* @param {Uint8Array} bytes
* @returns {PrivateKey}
*/
  static from_normal_bytes(bytes: Uint8Array): PrivateKey;
/**
* @param {Uint8Array} message
* @returns {Ed25519Signature}
*/
  sign(message: Uint8Array): Ed25519Signature;
}
/**
*/
export class ProposalProcedure {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ProposalProcedure}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ProposalProcedure;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ProposalProcedure}
*/
  static from_cbor_hex(cbor_bytes: string): ProposalProcedure;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ProposalProcedure}
*/
  static from_json(json: string): ProposalProcedure;
/**
* @returns {bigint}
*/
  deposit(): bigint;
/**
* @returns {RewardAddress}
*/
  reward_account(): RewardAddress;
/**
* @returns {GovAction}
*/
  gov_action(): GovAction;
/**
* @returns {Anchor}
*/
  anchor(): Anchor;
/**
* @param {bigint} deposit
* @param {RewardAddress} reward_account
* @param {GovAction} gov_action
* @param {Anchor} anchor
* @returns {ProposalProcedure}
*/
  static new(deposit: bigint, reward_account: RewardAddress, gov_action: GovAction, anchor: Anchor): ProposalProcedure;
}
/**
*/
export class ProposalProcedureList {
  free(): void;
/**
* @returns {ProposalProcedureList}
*/
  static new(): ProposalProcedureList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {ProposalProcedure}
*/
  get(index: number): ProposalProcedure;
/**
* @param {ProposalProcedure} elem
*/
  add(elem: ProposalProcedure): void;
}
/**
*/
export class ProtocolMagic {
  free(): void;
/**
* @param {number} pm
* @returns {ProtocolMagic}
*/
  static new(pm: number): ProtocolMagic;
/**
* @returns {number}
*/
  to_int(): number;
}
/**
*/
export class ProtocolParamUpdate {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ProtocolParamUpdate}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ProtocolParamUpdate;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ProtocolParamUpdate}
*/
  static from_cbor_hex(cbor_bytes: string): ProtocolParamUpdate;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ProtocolParamUpdate}
*/
  static from_json(json: string): ProtocolParamUpdate;
/**
* @param {bigint} minfee_a
*/
  set_minfee_a(minfee_a: bigint): void;
/**
* @returns {bigint | undefined}
*/
  minfee_a(): bigint | undefined;
/**
* @param {bigint} minfee_b
*/
  set_minfee_b(minfee_b: bigint): void;
/**
* @returns {bigint | undefined}
*/
  minfee_b(): bigint | undefined;
/**
* @param {bigint} max_block_body_size
*/
  set_max_block_body_size(max_block_body_size: bigint): void;
/**
* @returns {bigint | undefined}
*/
  max_block_body_size(): bigint | undefined;
/**
* @param {bigint} max_transaction_size
*/
  set_max_transaction_size(max_transaction_size: bigint): void;
/**
* @returns {bigint | undefined}
*/
  max_transaction_size(): bigint | undefined;
/**
* @param {bigint} max_block_header_size
*/
  set_max_block_header_size(max_block_header_size: bigint): void;
/**
* @returns {bigint | undefined}
*/
  max_block_header_size(): bigint | undefined;
/**
* @param {bigint} key_deposit
*/
  set_key_deposit(key_deposit: bigint): void;
/**
* @returns {bigint | undefined}
*/
  key_deposit(): bigint | undefined;
/**
* @param {bigint} pool_deposit
*/
  set_pool_deposit(pool_deposit: bigint): void;
/**
* @returns {bigint | undefined}
*/
  pool_deposit(): bigint | undefined;
/**
* @param {bigint} maximum_epoch
*/
  set_maximum_epoch(maximum_epoch: bigint): void;
/**
* @returns {bigint | undefined}
*/
  maximum_epoch(): bigint | undefined;
/**
* @param {bigint} n_opt
*/
  set_n_opt(n_opt: bigint): void;
/**
* @returns {bigint | undefined}
*/
  n_opt(): bigint | undefined;
/**
* @param {Rational} pool_pledge_influence
*/
  set_pool_pledge_influence(pool_pledge_influence: Rational): void;
/**
* @returns {Rational | undefined}
*/
  pool_pledge_influence(): Rational | undefined;
/**
* @param {UnitInterval} expansion_rate
*/
  set_expansion_rate(expansion_rate: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  expansion_rate(): UnitInterval | undefined;
/**
* @param {UnitInterval} treasury_growth_rate
*/
  set_treasury_growth_rate(treasury_growth_rate: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  treasury_growth_rate(): UnitInterval | undefined;
/**
* @param {bigint} min_pool_cost
*/
  set_min_pool_cost(min_pool_cost: bigint): void;
/**
* @returns {bigint | undefined}
*/
  min_pool_cost(): bigint | undefined;
/**
* @param {bigint} ada_per_utxo_byte
*/
  set_ada_per_utxo_byte(ada_per_utxo_byte: bigint): void;
/**
* @returns {bigint | undefined}
*/
  ada_per_utxo_byte(): bigint | undefined;
/**
* @param {CostModels} cost_models_for_script_languages
*/
  set_cost_models_for_script_languages(cost_models_for_script_languages: CostModels): void;
/**
* @returns {CostModels | undefined}
*/
  cost_models_for_script_languages(): CostModels | undefined;
/**
* @param {ExUnitPrices} execution_costs
*/
  set_execution_costs(execution_costs: ExUnitPrices): void;
/**
* @returns {ExUnitPrices | undefined}
*/
  execution_costs(): ExUnitPrices | undefined;
/**
* @param {ExUnits} max_tx_ex_units
*/
  set_max_tx_ex_units(max_tx_ex_units: ExUnits): void;
/**
* @returns {ExUnits | undefined}
*/
  max_tx_ex_units(): ExUnits | undefined;
/**
* @param {ExUnits} max_block_ex_units
*/
  set_max_block_ex_units(max_block_ex_units: ExUnits): void;
/**
* @returns {ExUnits | undefined}
*/
  max_block_ex_units(): ExUnits | undefined;
/**
* @param {bigint} max_value_size
*/
  set_max_value_size(max_value_size: bigint): void;
/**
* @returns {bigint | undefined}
*/
  max_value_size(): bigint | undefined;
/**
* @param {bigint} collateral_percentage
*/
  set_collateral_percentage(collateral_percentage: bigint): void;
/**
* @returns {bigint | undefined}
*/
  collateral_percentage(): bigint | undefined;
/**
* @param {bigint} max_collateral_inputs
*/
  set_max_collateral_inputs(max_collateral_inputs: bigint): void;
/**
* @returns {bigint | undefined}
*/
  max_collateral_inputs(): bigint | undefined;
/**
* @param {PoolVotingThresholds} pool_voting_thresholds
*/
  set_pool_voting_thresholds(pool_voting_thresholds: PoolVotingThresholds): void;
/**
* @returns {PoolVotingThresholds | undefined}
*/
  pool_voting_thresholds(): PoolVotingThresholds | undefined;
/**
* @param {DRepVotingThresholds} d_rep_voting_thresholds
*/
  set_d_rep_voting_thresholds(d_rep_voting_thresholds: DRepVotingThresholds): void;
/**
* @returns {DRepVotingThresholds | undefined}
*/
  d_rep_voting_thresholds(): DRepVotingThresholds | undefined;
/**
* @param {bigint} min_committee_size
*/
  set_min_committee_size(min_committee_size: bigint): void;
/**
* @returns {bigint | undefined}
*/
  min_committee_size(): bigint | undefined;
/**
* @param {bigint} committee_term_limit
*/
  set_committee_term_limit(committee_term_limit: bigint): void;
/**
* @returns {bigint | undefined}
*/
  committee_term_limit(): bigint | undefined;
/**
* @param {bigint} governance_action_validity_period
*/
  set_governance_action_validity_period(governance_action_validity_period: bigint): void;
/**
* @returns {bigint | undefined}
*/
  governance_action_validity_period(): bigint | undefined;
/**
* @param {bigint} governance_action_deposit
*/
  set_governance_action_deposit(governance_action_deposit: bigint): void;
/**
* @returns {bigint | undefined}
*/
  governance_action_deposit(): bigint | undefined;
/**
* @param {bigint} d_rep_deposit
*/
  set_d_rep_deposit(d_rep_deposit: bigint): void;
/**
* @returns {bigint | undefined}
*/
  d_rep_deposit(): bigint | undefined;
/**
* @param {bigint} d_rep_inactivity_period
*/
  set_d_rep_inactivity_period(d_rep_inactivity_period: bigint): void;
/**
* @returns {bigint | undefined}
*/
  d_rep_inactivity_period(): bigint | undefined;
/**
* @returns {ProtocolParamUpdate}
*/
  static new(): ProtocolParamUpdate;
}
/**
*/
export class ProtocolVersion {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ProtocolVersion}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ProtocolVersion;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ProtocolVersion}
*/
  static from_cbor_hex(cbor_bytes: string): ProtocolVersion;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ProtocolVersion}
*/
  static from_json(json: string): ProtocolVersion;
/**
* @returns {bigint}
*/
  major(): bigint;
/**
* @returns {bigint}
*/
  minor(): bigint;
/**
* @param {bigint} major
* @param {bigint} minor
* @returns {ProtocolVersion}
*/
  static new(major: bigint, minor: bigint): ProtocolVersion;
}
/**
* ED25519 key used as public key
*/
export class PublicKey {
  free(): void;
/**
* Get public key from its bech32 representation
* Example:
* ```javascript
* const pkey = PublicKey.from_bech32(&#39;ed25519_pk1dgaagyh470y66p899txcl3r0jaeaxu6yd7z2dxyk55qcycdml8gszkxze2&#39;);
* ```
* @param {string} bech32_str
* @returns {PublicKey}
*/
  static from_bech32(bech32_str: string): PublicKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PublicKey}
*/
  static from_bytes(bytes: Uint8Array): PublicKey;
/**
* @param {Uint8Array} data
* @param {Ed25519Signature} signature
* @returns {boolean}
*/
  verify(data: Uint8Array, signature: Ed25519Signature): boolean;
/**
* @returns {Ed25519KeyHash}
*/
  hash(): Ed25519KeyHash;
}
/**
*/
export class Rational {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Rational}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Rational;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Rational}
*/
  static from_cbor_hex(cbor_bytes: string): Rational;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Rational}
*/
  static from_json(json: string): Rational;
/**
* @returns {bigint}
*/
  numerator(): bigint;
/**
* @returns {bigint}
*/
  denominator(): bigint;
/**
* @param {bigint} numerator
* @param {bigint} denominator
* @returns {Rational}
*/
  static new(numerator: bigint, denominator: bigint): Rational;
}
/**
*/
export class Redeemer {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Redeemer}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Redeemer;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Redeemer}
*/
  static from_cbor_hex(cbor_bytes: string): Redeemer;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Redeemer}
*/
  static from_json(json: string): Redeemer;
/**
* @returns {number}
*/
  tag(): number;
/**
* @returns {bigint}
*/
  index(): bigint;
/**
* @returns {PlutusData}
*/
  data(): PlutusData;
/**
* @returns {ExUnits}
*/
  ex_units(): ExUnits;
/**
* @param {number} tag
* @param {bigint} index
* @param {PlutusData} data
* @param {ExUnits} ex_units
* @returns {Redeemer}
*/
  static new(tag: number, index: bigint, data: PlutusData, ex_units: ExUnits): Redeemer;
}
/**
*/
export class RedeemerList {
  free(): void;
/**
* @returns {RedeemerList}
*/
  static new(): RedeemerList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Redeemer}
*/
  get(index: number): Redeemer;
/**
* @param {Redeemer} elem
*/
  add(elem: Redeemer): void;
}
/**
* In order to calculate the index from the sorted set, "add_*" methods in this builder
* must be called along with the "add_*" methods in transaction builder.
*/
export class RedeemerSetBuilder {
  free(): void;
/**
* @returns {RedeemerSetBuilder}
*/
  static new(): RedeemerSetBuilder;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* note: will override existing value if called twice with the same key
* @param {RedeemerWitnessKey} key
* @param {ExUnits} ex_units
*/
  update_ex_units(key: RedeemerWitnessKey, ex_units: ExUnits): void;
/**
* @param {InputBuilderResult} result
*/
  add_spend(result: InputBuilderResult): void;
/**
* @param {MintBuilderResult} result
*/
  add_mint(result: MintBuilderResult): void;
/**
* @param {WithdrawalBuilderResult} result
*/
  add_reward(result: WithdrawalBuilderResult): void;
/**
* @param {CertificateBuilderResult} result
*/
  add_cert(result: CertificateBuilderResult): void;
/**
* @param {boolean} default_to_dummy_exunits
* @returns {RedeemerList}
*/
  build(default_to_dummy_exunits: boolean): RedeemerList;
}
/**
*/
export class RedeemerWitnessKey {
  free(): void;
/**
* @param {number} tag
* @param {bigint} index
* @returns {RedeemerWitnessKey}
*/
  static new(tag: number, index: bigint): RedeemerWitnessKey;
/**
* @param {Redeemer} redeemer
* @returns {RedeemerWitnessKey}
*/
  static from_redeemer(redeemer: Redeemer): RedeemerWitnessKey;
}
/**
*/
export class RegCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {RegCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): RegCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {RegCert}
*/
  static from_cbor_hex(cbor_bytes: string): RegCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {RegCert}
*/
  static from_json(json: string): RegCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @param {Credential} stake_credential
* @param {bigint} coin
* @returns {RegCert}
*/
  static new(stake_credential: Credential, coin: bigint): RegCert;
}
/**
*/
export class RegDrepCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {RegDrepCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): RegDrepCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {RegDrepCert}
*/
  static from_cbor_hex(cbor_bytes: string): RegDrepCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {RegDrepCert}
*/
  static from_json(json: string): RegDrepCert;
/**
* @returns {Credential}
*/
  drep_credential(): Credential;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @returns {Anchor | undefined}
*/
  anchor(): Anchor | undefined;
/**
* @param {Credential} drep_credential
* @param {bigint} coin
* @param {Anchor | undefined} anchor
* @returns {RegDrepCert}
*/
  static new(drep_credential: Credential, coin: bigint, anchor?: Anchor): RegDrepCert;
}
/**
*/
export class Relay {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Relay}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Relay;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Relay}
*/
  static from_cbor_hex(cbor_bytes: string): Relay;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Relay}
*/
  static from_json(json: string): Relay;
/**
* @param {number | undefined} port
* @param {Ipv4 | undefined} ipv4
* @param {Ipv6 | undefined} ipv6
* @returns {Relay}
*/
  static new_single_host_addr(port?: number, ipv4?: Ipv4, ipv6?: Ipv6): Relay;
/**
* @param {number | undefined} port
* @param {DnsName} dns_name
* @returns {Relay}
*/
  static new_single_host_name(port: number | undefined, dns_name: DnsName): Relay;
/**
* @param {DnsName} dns_name
* @returns {Relay}
*/
  static new_multi_host_name(dns_name: DnsName): Relay;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {SingleHostAddr | undefined}
*/
  as_single_host_addr(): SingleHostAddr | undefined;
/**
* @returns {SingleHostName | undefined}
*/
  as_single_host_name(): SingleHostName | undefined;
/**
* @returns {MultiHostName | undefined}
*/
  as_multi_host_name(): MultiHostName | undefined;
}
/**
*/
export class RelayList {
  free(): void;
/**
* @returns {RelayList}
*/
  static new(): RelayList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Relay}
*/
  get(index: number): Relay;
/**
* @param {Relay} elem
*/
  add(elem: Relay): void;
}
/**
*/
export class RequiredSigners {
  free(): void;
/**
* @returns {RequiredSigners}
*/
  static new(): RequiredSigners;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Ed25519KeyHash}
*/
  get(index: number): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} elem
*/
  add(elem: Ed25519KeyHash): void;
}
/**
*/
export class RequiredWitnessSet {
  free(): void;
/**
* @param {Ed25519KeyHash} hash
*/
  add_vkey_key_hash(hash: Ed25519KeyHash): void;
/**
* @param {ByronAddress} address
*/
  add_bootstrap(address: ByronAddress): void;
/**
* @param {ScriptHash} script_hash
*/
  add_script_ref(script_hash: ScriptHash): void;
/**
* @param {ScriptHash} script_hash
*/
  add_script_hash(script_hash: ScriptHash): void;
/**
* @param {DatumHash} plutus_datum
*/
  add_plutus_datum_hash(plutus_datum: DatumHash): void;
/**
* @param {RedeemerWitnessKey} redeemer
*/
  add_redeemer_tag(redeemer: RedeemerWitnessKey): void;
/**
* @param {RequiredWitnessSet} requirements
*/
  add_all(requirements: RequiredWitnessSet): void;
/**
* @returns {RequiredWitnessSet}
*/
  static new(): RequiredWitnessSet;
/**
* @param {RewardAddress} address
*/
  withdrawal_required_wits(address: RewardAddress): void;
}
/**
*/
export class ResignCommitteeColdCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ResignCommitteeColdCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ResignCommitteeColdCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ResignCommitteeColdCert}
*/
  static from_cbor_hex(cbor_bytes: string): ResignCommitteeColdCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ResignCommitteeColdCert}
*/
  static from_json(json: string): ResignCommitteeColdCert;
/**
* @returns {Credential}
*/
  committee_cold_credential(): Credential;
/**
* @param {Credential} committee_cold_credential
* @returns {ResignCommitteeColdCert}
*/
  static new(committee_cold_credential: Credential): ResignCommitteeColdCert;
}
/**
*/
export class RewardAccountList {
  free(): void;
/**
* @returns {RewardAccountList}
*/
  static new(): RewardAccountList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {RewardAddress}
*/
  get(index: number): RewardAddress;
/**
* @param {RewardAddress} elem
*/
  add(elem: RewardAddress): void;
}
/**
*/
export class RewardAddress {
  free(): void;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {RewardAddress}
*/
  static from_json(json: string): RewardAddress;
/**
* @param {number} network
* @param {Credential} payment
* @returns {RewardAddress}
*/
  static new(network: number, payment: Credential): RewardAddress;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} address
* @returns {RewardAddress | undefined}
*/
  static from_address(address: Address): RewardAddress | undefined;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @returns {Credential}
*/
  payment(): Credential;
}
/**
*/
export class Script {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Script}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Script;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Script}
*/
  static from_cbor_hex(cbor_bytes: string): Script;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Script}
*/
  static from_json(json: string): Script;
/**
* @param {NativeScript} script
* @returns {Script}
*/
  static new_native(script: NativeScript): Script;
/**
* @param {PlutusV1Script} script
* @returns {Script}
*/
  static new_plutus_v1(script: PlutusV1Script): Script;
/**
* @param {PlutusV2Script} script
* @returns {Script}
*/
  static new_plutus_v2(script: PlutusV2Script): Script;
/**
* @param {PlutusV3Script} script
* @returns {Script}
*/
  static new_plutus_v3(script: PlutusV3Script): Script;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {NativeScript | undefined}
*/
  as_native(): NativeScript | undefined;
/**
* @returns {PlutusV1Script | undefined}
*/
  as_plutus_v1(): PlutusV1Script | undefined;
/**
* @returns {PlutusV2Script | undefined}
*/
  as_plutus_v2(): PlutusV2Script | undefined;
/**
* @returns {PlutusV3Script | undefined}
*/
  as_plutus_v3(): PlutusV3Script | undefined;
/**
* @returns {ScriptHash}
*/
  hash(): ScriptHash;
/**
* @returns {number | undefined}
*/
  language(): number | undefined;
}
/**
*/
export class ScriptAll {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ScriptAll}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ScriptAll;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ScriptAll}
*/
  static from_cbor_hex(cbor_bytes: string): ScriptAll;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ScriptAll}
*/
  static from_json(json: string): ScriptAll;
/**
* @returns {NativeScriptList}
*/
  native_scripts(): NativeScriptList;
/**
* @param {NativeScriptList} native_scripts
* @returns {ScriptAll}
*/
  static new(native_scripts: NativeScriptList): ScriptAll;
}
/**
*/
export class ScriptAny {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ScriptAny}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ScriptAny;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ScriptAny}
*/
  static from_cbor_hex(cbor_bytes: string): ScriptAny;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ScriptAny}
*/
  static from_json(json: string): ScriptAny;
/**
* @returns {NativeScriptList}
*/
  native_scripts(): NativeScriptList;
/**
* @param {NativeScriptList} native_scripts
* @returns {ScriptAny}
*/
  static new(native_scripts: NativeScriptList): ScriptAny;
}
/**
*/
export class ScriptDataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {ScriptDataHash}
*/
  static from_bech32(bech32_str: string): ScriptDataHash;
/**
* @param {string} input
* @returns {ScriptDataHash}
*/
  static from_hex(input: string): ScriptDataHash;
/**
* @param {Uint8Array} bytes
* @returns {ScriptDataHash}
*/
  static from_raw_bytes(bytes: Uint8Array): ScriptDataHash;
}
/**
*/
export class ScriptHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {ScriptHash}
*/
  static from_bech32(bech32_str: string): ScriptHash;
/**
* @param {string} input
* @returns {ScriptHash}
*/
  static from_hex(input: string): ScriptHash;
/**
* @param {Uint8Array} bytes
* @returns {ScriptHash}
*/
  static from_raw_bytes(bytes: Uint8Array): ScriptHash;
}
/**
*/
export class ScriptInvalidBefore {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ScriptInvalidBefore}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ScriptInvalidBefore;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ScriptInvalidBefore}
*/
  static from_cbor_hex(cbor_bytes: string): ScriptInvalidBefore;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ScriptInvalidBefore}
*/
  static from_json(json: string): ScriptInvalidBefore;
/**
* @returns {bigint}
*/
  before(): bigint;
/**
* @param {bigint} before
* @returns {ScriptInvalidBefore}
*/
  static new(before: bigint): ScriptInvalidBefore;
}
/**
*/
export class ScriptInvalidHereafter {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ScriptInvalidHereafter}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ScriptInvalidHereafter;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ScriptInvalidHereafter}
*/
  static from_cbor_hex(cbor_bytes: string): ScriptInvalidHereafter;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ScriptInvalidHereafter}
*/
  static from_json(json: string): ScriptInvalidHereafter;
/**
* @returns {bigint}
*/
  after(): bigint;
/**
* @param {bigint} after
* @returns {ScriptInvalidHereafter}
*/
  static new(after: bigint): ScriptInvalidHereafter;
}
/**
*/
export class ScriptNOfK {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ScriptNOfK}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ScriptNOfK;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ScriptNOfK}
*/
  static from_cbor_hex(cbor_bytes: string): ScriptNOfK;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ScriptNOfK}
*/
  static from_json(json: string): ScriptNOfK;
/**
* @returns {bigint}
*/
  n(): bigint;
/**
* @returns {NativeScriptList}
*/
  native_scripts(): NativeScriptList;
/**
* @param {bigint} n
* @param {NativeScriptList} native_scripts
* @returns {ScriptNOfK}
*/
  static new(n: bigint, native_scripts: NativeScriptList): ScriptNOfK;
}
/**
*/
export class ScriptPubkey {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ScriptPubkey}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ScriptPubkey;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ScriptPubkey}
*/
  static from_cbor_hex(cbor_bytes: string): ScriptPubkey;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ScriptPubkey}
*/
  static from_json(json: string): ScriptPubkey;
/**
* @returns {Ed25519KeyHash}
*/
  ed25519_key_hash(): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} ed25519_key_hash
* @returns {ScriptPubkey}
*/
  static new(ed25519_key_hash: Ed25519KeyHash): ScriptPubkey;
}
/**
*/
export class ShelleyMaFormatAuxData {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {ShelleyMaFormatAuxData}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): ShelleyMaFormatAuxData;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {ShelleyMaFormatAuxData}
*/
  static from_cbor_hex(cbor_bytes: string): ShelleyMaFormatAuxData;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {ShelleyMaFormatAuxData}
*/
  static from_json(json: string): ShelleyMaFormatAuxData;
/**
* @returns {Metadata}
*/
  transaction_metadata(): Metadata;
/**
* @returns {NativeScriptList}
*/
  auxiliary_scripts(): NativeScriptList;
/**
* @param {Metadata} transaction_metadata
* @param {NativeScriptList} auxiliary_scripts
* @returns {ShelleyMaFormatAuxData}
*/
  static new(transaction_metadata: Metadata, auxiliary_scripts: NativeScriptList): ShelleyMaFormatAuxData;
}
/**
*/
export class SignedTxBuilder {
  free(): void;
/**
* @param {TransactionBody} body
* @param {TransactionWitnessSetBuilder} witness_set
* @param {boolean} is_valid
* @param {AuxiliaryData} auxiliary_data
* @returns {SignedTxBuilder}
*/
  static new_with_data(body: TransactionBody, witness_set: TransactionWitnessSetBuilder, is_valid: boolean, auxiliary_data: AuxiliaryData): SignedTxBuilder;
/**
* @param {TransactionBody} body
* @param {TransactionWitnessSetBuilder} witness_set
* @param {boolean} is_valid
* @returns {SignedTxBuilder}
*/
  static new_without_data(body: TransactionBody, witness_set: TransactionWitnessSetBuilder, is_valid: boolean): SignedTxBuilder;
/**
*
*     * Builds the final transaction and checks that all witnesses are there
*     
* @returns {Transaction}
*/
  build_checked(): Transaction;
/**
*
*     * Builds the transaction without doing any witness checks.
*     *
*     * This can be useful if other witnesses will be added later.
*     * e.g. CIP30 signing takes a Transaction with possible witnesses
*     * to send to the wallet to fill in the missing ones.
*     
* @returns {Transaction}
*/
  build_unchecked(): Transaction;
/**
* @param {Vkeywitness} vkey
*/
  add_vkey(vkey: Vkeywitness): void;
/**
* @param {BootstrapWitness} bootstrap
*/
  add_bootstrap(bootstrap: BootstrapWitness): void;
/**
* @returns {TransactionBody}
*/
  body(): TransactionBody;
/**
* @returns {TransactionWitnessSetBuilder}
*/
  witness_set(): TransactionWitnessSetBuilder;
/**
* @returns {boolean}
*/
  is_valid(): boolean;
/**
* @returns {AuxiliaryData | undefined}
*/
  auxiliary_data(): AuxiliaryData | undefined;
}
/**
*/
export class SingleCertificateBuilder {
  free(): void;
/**
* @param {Certificate} cert
* @returns {SingleCertificateBuilder}
*/
  static new(cert: Certificate): SingleCertificateBuilder;
/**
* note: particularly useful for StakeRegistration which doesn't require witnessing
* @returns {CertificateBuilderResult}
*/
  skip_witness(): CertificateBuilderResult;
/**
* @returns {CertificateBuilderResult}
*/
  payment_key(): CertificateBuilderResult;
/**
* Signer keys don't have to be set. You can leave it empty and then add the required witnesses later 
* @param {NativeScript} native_script
* @param {NativeScriptWitnessInfo} witness_info
* @returns {CertificateBuilderResult}
*/
  native_script(native_script: NativeScript, witness_info: NativeScriptWitnessInfo): CertificateBuilderResult;
/**
* @param {PartialPlutusWitness} partial_witness
* @param {RequiredSigners} required_signers
* @returns {CertificateBuilderResult}
*/
  plutus_script(partial_witness: PartialPlutusWitness, required_signers: RequiredSigners): CertificateBuilderResult;
}
/**
*/
export class SingleHostAddr {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {SingleHostAddr}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): SingleHostAddr;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {SingleHostAddr}
*/
  static from_cbor_hex(cbor_bytes: string): SingleHostAddr;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {SingleHostAddr}
*/
  static from_json(json: string): SingleHostAddr;
/**
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* @returns {Ipv4 | undefined}
*/
  ipv4(): Ipv4 | undefined;
/**
* @returns {Ipv6 | undefined}
*/
  ipv6(): Ipv6 | undefined;
/**
* @param {number | undefined} port
* @param {Ipv4 | undefined} ipv4
* @param {Ipv6 | undefined} ipv6
* @returns {SingleHostAddr}
*/
  static new(port?: number, ipv4?: Ipv4, ipv6?: Ipv6): SingleHostAddr;
}
/**
*/
export class SingleHostName {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {SingleHostName}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): SingleHostName;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {SingleHostName}
*/
  static from_cbor_hex(cbor_bytes: string): SingleHostName;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {SingleHostName}
*/
  static from_json(json: string): SingleHostName;
/**
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* @returns {DnsName}
*/
  dns_name(): DnsName;
/**
* @param {number | undefined} port
* @param {DnsName} dns_name
* @returns {SingleHostName}
*/
  static new(port: number | undefined, dns_name: DnsName): SingleHostName;
}
/**
*/
export class SingleInputBuilder {
  free(): void;
/**
* @param {TransactionInput} input
* @param {TransactionOutput} utxo_info
* @returns {SingleInputBuilder}
*/
  static new(input: TransactionInput, utxo_info: TransactionOutput): SingleInputBuilder;
/**
* @param {TransactionUnspentOutput} utxo
* @returns {SingleInputBuilder}
*/
  static from_transaction_unspent_output(utxo: TransactionUnspentOutput): SingleInputBuilder;
/**
* @returns {InputBuilderResult}
*/
  payment_key(): InputBuilderResult;
/**
* @param {NativeScript} native_script
* @param {NativeScriptWitnessInfo} witness_info
* @returns {InputBuilderResult}
*/
  native_script(native_script: NativeScript, witness_info: NativeScriptWitnessInfo): InputBuilderResult;
/**
* @param {PartialPlutusWitness} partial_witness
* @param {RequiredSigners} required_signers
* @param {PlutusData} datum
* @returns {InputBuilderResult}
*/
  plutus_script(partial_witness: PartialPlutusWitness, required_signers: RequiredSigners, datum: PlutusData): InputBuilderResult;
/**
* @param {PartialPlutusWitness} partial_witness
* @param {RequiredSigners} required_signers
* @returns {InputBuilderResult}
*/
  plutus_script_inline_datum(partial_witness: PartialPlutusWitness, required_signers: RequiredSigners): InputBuilderResult;
}
/**
*/
export class SingleMintBuilder {
  free(): void;
/**
* @param {MapAssetNameToNonZeroInt64} assets
* @returns {SingleMintBuilder}
*/
  static new(assets: MapAssetNameToNonZeroInt64): SingleMintBuilder;
/**
* @param {AssetName} asset
* @param {bigint} amount
* @returns {SingleMintBuilder}
*/
  static new_single_asset(asset: AssetName, amount: bigint): SingleMintBuilder;
/**
* @param {NativeScript} native_script
* @param {NativeScriptWitnessInfo} witness_info
* @returns {MintBuilderResult}
*/
  native_script(native_script: NativeScript, witness_info: NativeScriptWitnessInfo): MintBuilderResult;
/**
* @param {PartialPlutusWitness} partial_witness
* @param {RequiredSigners} required_signers
* @returns {MintBuilderResult}
*/
  plutus_script(partial_witness: PartialPlutusWitness, required_signers: RequiredSigners): MintBuilderResult;
}
/**
*/
export class SingleOutputBuilderResult {
  free(): void;
/**
* @param {TransactionOutput} output
* @returns {SingleOutputBuilderResult}
*/
  static new(output: TransactionOutput): SingleOutputBuilderResult;
/**
* @returns {TransactionOutput}
*/
  output(): TransactionOutput;
/**
* @returns {PlutusData | undefined}
*/
  communication_datum(): PlutusData | undefined;
}
/**
*/
export class SingleWithdrawalBuilder {
  free(): void;
/**
* @param {RewardAddress} address
* @param {bigint} amount
* @returns {SingleWithdrawalBuilder}
*/
  static new(address: RewardAddress, amount: bigint): SingleWithdrawalBuilder;
/**
* @returns {WithdrawalBuilderResult}
*/
  payment_key(): WithdrawalBuilderResult;
/**
* @param {NativeScript} native_script
* @param {NativeScriptWitnessInfo} witness_info
* @returns {WithdrawalBuilderResult}
*/
  native_script(native_script: NativeScript, witness_info: NativeScriptWitnessInfo): WithdrawalBuilderResult;
/**
* @param {PartialPlutusWitness} partial_witness
* @param {RequiredSigners} required_signers
* @returns {WithdrawalBuilderResult}
*/
  plutus_script(partial_witness: PartialPlutusWitness, required_signers: RequiredSigners): WithdrawalBuilderResult;
}
/**
*/
export class SpendingData {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {SpendingData}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): SpendingData;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {SpendingData}
*/
  static from_cbor_hex(cbor_bytes: string): SpendingData;
/**
* @param {Bip32PublicKey} pubkey
* @returns {SpendingData}
*/
  static new_spending_data_pub_key(pubkey: Bip32PublicKey): SpendingData;
/**
* @param {ByronScript} script
* @returns {SpendingData}
*/
  static new_spending_data_script(script: ByronScript): SpendingData;
/**
* @param {PublicKey} redeem
* @returns {SpendingData}
*/
  static new_spending_data_redeem(redeem: PublicKey): SpendingData;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Bip32PublicKey | undefined}
*/
  as_spending_data_pub_key(): Bip32PublicKey | undefined;
/**
* @returns {ByronScript | undefined}
*/
  as_spending_data_script(): ByronScript | undefined;
/**
* @returns {PublicKey | undefined}
*/
  as_spending_data_redeem(): PublicKey | undefined;
}
/**
*/
export class StakeCredentialList {
  free(): void;
/**
* @returns {StakeCredentialList}
*/
  static new(): StakeCredentialList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Credential}
*/
  get(index: number): Credential;
/**
* @param {Credential} elem
*/
  add(elem: Credential): void;
}
/**
*/
export class StakeDelegation {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeDelegation}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeDelegation;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeDelegation}
*/
  static from_cbor_hex(cbor_bytes: string): StakeDelegation;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {StakeDelegation}
*/
  static from_json(json: string): StakeDelegation;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {Ed25519KeyHash}
*/
  pool(): Ed25519KeyHash;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @returns {StakeDelegation}
*/
  static new(stake_credential: Credential, pool: Ed25519KeyHash): StakeDelegation;
}
/**
*/
export class StakeDeregistration {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeDeregistration}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeDeregistration;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeDeregistration}
*/
  static from_cbor_hex(cbor_bytes: string): StakeDeregistration;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {StakeDeregistration}
*/
  static from_json(json: string): StakeDeregistration;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @param {Credential} stake_credential
* @returns {StakeDeregistration}
*/
  static new(stake_credential: Credential): StakeDeregistration;
}
/**
*/
export class StakeDistribution {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeDistribution}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeDistribution;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeDistribution}
*/
  static from_cbor_hex(cbor_bytes: string): StakeDistribution;
/**
* @param {StakeholderId} stakeholder_id
* @returns {StakeDistribution}
*/
  static new_single_key(stakeholder_id: StakeholderId): StakeDistribution;
/**
* @returns {StakeDistribution}
*/
  static new_bootstrap_era(): StakeDistribution;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {StakeholderId | undefined}
*/
  as_single_key(): StakeholderId | undefined;
}
/**
*/
export class StakeRegDelegCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeRegDelegCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeRegDelegCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeRegDelegCert}
*/
  static from_cbor_hex(cbor_bytes: string): StakeRegDelegCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {StakeRegDelegCert}
*/
  static from_json(json: string): StakeRegDelegCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {Ed25519KeyHash}
*/
  pool(): Ed25519KeyHash;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @param {bigint} coin
* @returns {StakeRegDelegCert}
*/
  static new(stake_credential: Credential, pool: Ed25519KeyHash, coin: bigint): StakeRegDelegCert;
}
/**
*/
export class StakeRegistration {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeRegistration}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeRegistration;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeRegistration}
*/
  static from_cbor_hex(cbor_bytes: string): StakeRegistration;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {StakeRegistration}
*/
  static from_json(json: string): StakeRegistration;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @param {Credential} stake_credential
* @returns {StakeRegistration}
*/
  static new(stake_credential: Credential): StakeRegistration;
}
/**
*/
export class StakeVoteDelegCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeVoteDelegCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeVoteDelegCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeVoteDelegCert}
*/
  static from_cbor_hex(cbor_bytes: string): StakeVoteDelegCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {StakeVoteDelegCert}
*/
  static from_json(json: string): StakeVoteDelegCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {Ed25519KeyHash}
*/
  pool(): Ed25519KeyHash;
/**
* @returns {DRep}
*/
  d_rep(): DRep;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @param {DRep} d_rep
* @returns {StakeVoteDelegCert}
*/
  static new(stake_credential: Credential, pool: Ed25519KeyHash, d_rep: DRep): StakeVoteDelegCert;
}
/**
*/
export class StakeVoteRegDelegCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {StakeVoteRegDelegCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): StakeVoteRegDelegCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {StakeVoteRegDelegCert}
*/
  static from_cbor_hex(cbor_bytes: string): StakeVoteRegDelegCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {StakeVoteRegDelegCert}
*/
  static from_json(json: string): StakeVoteRegDelegCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {Ed25519KeyHash}
*/
  pool(): Ed25519KeyHash;
/**
* @returns {DRep}
*/
  d_rep(): DRep;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @param {Credential} stake_credential
* @param {Ed25519KeyHash} pool
* @param {DRep} d_rep
* @param {bigint} coin
* @returns {StakeVoteRegDelegCert}
*/
  static new(stake_credential: Credential, pool: Ed25519KeyHash, d_rep: DRep, coin: bigint): StakeVoteRegDelegCert;
}
/**
*/
export class StakeholderId {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {StakeholderId}
*/
  static from_bech32(bech32_str: string): StakeholderId;
/**
* @param {string} input
* @returns {StakeholderId}
*/
  static from_hex(input: string): StakeholderId;
/**
* @param {Uint8Array} bytes
* @returns {StakeholderId}
*/
  static from_raw_bytes(bytes: Uint8Array): StakeholderId;
/**
* @param {Bip32PublicKey} pubk
* @returns {StakeholderId}
*/
  static new(pubk: Bip32PublicKey): StakeholderId;
}
/**
*/
export class Transaction {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Transaction}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Transaction;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Transaction}
*/
  static from_cbor_hex(cbor_bytes: string): Transaction;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Transaction}
*/
  static from_json(json: string): Transaction;
/**
* @returns {TransactionBody}
*/
  body(): TransactionBody;
/**
* @returns {TransactionWitnessSet}
*/
  witness_set(): TransactionWitnessSet;
/**
* @returns {boolean}
*/
  is_valid(): boolean;
/**
* @returns {AuxiliaryData | undefined}
*/
  auxiliary_data(): AuxiliaryData | undefined;
/**
* @param {TransactionBody} body
* @param {TransactionWitnessSet} witness_set
* @param {boolean} is_valid
* @param {AuxiliaryData | undefined} auxiliary_data
* @returns {Transaction}
*/
  static new(body: TransactionBody, witness_set: TransactionWitnessSet, is_valid: boolean, auxiliary_data?: AuxiliaryData): Transaction;
}
/**
*/
export class TransactionBody {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {TransactionBody}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TransactionBody;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {TransactionBody}
*/
  static from_cbor_hex(cbor_bytes: string): TransactionBody;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {TransactionBody}
*/
  static from_json(json: string): TransactionBody;
/**
* @returns {TransactionInputList}
*/
  inputs(): TransactionInputList;
/**
* @returns {TransactionOutputList}
*/
  outputs(): TransactionOutputList;
/**
* @returns {bigint}
*/
  fee(): bigint;
/**
* @param {bigint} ttl
*/
  set_ttl(ttl: bigint): void;
/**
* @returns {bigint | undefined}
*/
  ttl(): bigint | undefined;
/**
* @param {CertificateList} certs
*/
  set_certs(certs: CertificateList): void;
/**
* @returns {CertificateList | undefined}
*/
  certs(): CertificateList | undefined;
/**
* @param {MapRewardAccountToCoin} withdrawals
*/
  set_withdrawals(withdrawals: MapRewardAccountToCoin): void;
/**
* @returns {MapRewardAccountToCoin | undefined}
*/
  withdrawals(): MapRewardAccountToCoin | undefined;
/**
* @param {AuxiliaryDataHash} auxiliary_data_hash
*/
  set_auxiliary_data_hash(auxiliary_data_hash: AuxiliaryDataHash): void;
/**
* @returns {AuxiliaryDataHash | undefined}
*/
  auxiliary_data_hash(): AuxiliaryDataHash | undefined;
/**
* @param {bigint} validity_interval_start
*/
  set_validity_interval_start(validity_interval_start: bigint): void;
/**
* @returns {bigint | undefined}
*/
  validity_interval_start(): bigint | undefined;
/**
* @param {Mint} mint
*/
  set_mint(mint: Mint): void;
/**
* @returns {Mint | undefined}
*/
  mint(): Mint | undefined;
/**
* @param {ScriptDataHash} script_data_hash
*/
  set_script_data_hash(script_data_hash: ScriptDataHash): void;
/**
* @returns {ScriptDataHash | undefined}
*/
  script_data_hash(): ScriptDataHash | undefined;
/**
* @param {TransactionInputList} collateral_inputs
*/
  set_collateral_inputs(collateral_inputs: TransactionInputList): void;
/**
* @returns {TransactionInputList | undefined}
*/
  collateral_inputs(): TransactionInputList | undefined;
/**
* @param {RequiredSigners} required_signers
*/
  set_required_signers(required_signers: RequiredSigners): void;
/**
* @returns {RequiredSigners | undefined}
*/
  required_signers(): RequiredSigners | undefined;
/**
* @param {NetworkId} network_id
*/
  set_network_id(network_id: NetworkId): void;
/**
* @returns {NetworkId | undefined}
*/
  network_id(): NetworkId | undefined;
/**
* @param {TransactionOutput} collateral_return
*/
  set_collateral_return(collateral_return: TransactionOutput): void;
/**
* @returns {TransactionOutput | undefined}
*/
  collateral_return(): TransactionOutput | undefined;
/**
* @param {bigint} total_collateral
*/
  set_total_collateral(total_collateral: bigint): void;
/**
* @returns {bigint | undefined}
*/
  total_collateral(): bigint | undefined;
/**
* @param {TransactionInputList} reference_inputs
*/
  set_reference_inputs(reference_inputs: TransactionInputList): void;
/**
* @returns {TransactionInputList | undefined}
*/
  reference_inputs(): TransactionInputList | undefined;
/**
* @param {VotingProcedures} voting_procedures
*/
  set_voting_procedures(voting_procedures: VotingProcedures): void;
/**
* @returns {VotingProcedures | undefined}
*/
  voting_procedures(): VotingProcedures | undefined;
/**
* @param {ProposalProcedureList} proposal_procedures
*/
  set_proposal_procedures(proposal_procedures: ProposalProcedureList): void;
/**
* @returns {ProposalProcedureList | undefined}
*/
  proposal_procedures(): ProposalProcedureList | undefined;
/**
* @param {bigint} current_treasury_value
*/
  set_current_treasury_value(current_treasury_value: bigint): void;
/**
* @returns {bigint | undefined}
*/
  current_treasury_value(): bigint | undefined;
/**
* @param {bigint} donation
*/
  set_donation(donation: bigint): void;
/**
* @returns {bigint | undefined}
*/
  donation(): bigint | undefined;
/**
* @param {TransactionInputList} inputs
* @param {TransactionOutputList} outputs
* @param {bigint} fee
* @returns {TransactionBody}
*/
  static new(inputs: TransactionInputList, outputs: TransactionOutputList, fee: bigint): TransactionBody;
}
/**
*/
export class TransactionBodyList {
  free(): void;
/**
* @returns {TransactionBodyList}
*/
  static new(): TransactionBodyList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionBody}
*/
  get(index: number): TransactionBody;
/**
* @param {TransactionBody} elem
*/
  add(elem: TransactionBody): void;
}
/**
*/
export class TransactionBuilder {
  free(): void;
/**
* This automatically selects and adds inputs from {inputs} consisting of just enough to cover
* the outputs that have already been added.
* This should be called after adding all certs/outputs/etc and will be an error otherwise.
* Uses CIP2: https://github.com/cardano-foundation/CIPs/blob/master/CIP-0002/CIP-0002.md
* Adding a change output must be called after via TransactionBuilder::add_change_if_needed()
* This function, diverging from CIP2, takes into account fees and will attempt to add additional
* inputs to cover the minimum fees. This does not, however, set the txbuilder's fee.
* @param {number} strategy
*/
  select_utxos(strategy: number): void;
/**
* @param {InputBuilderResult} result
*/
  add_input(result: InputBuilderResult): void;
/**
* @param {InputBuilderResult} result
*/
  add_utxo(result: InputBuilderResult): void;
/**
* calculates how much the fee would increase if you added a given output
* @param {InputBuilderResult} result
* @returns {bigint}
*/
  fee_for_input(result: InputBuilderResult): bigint;
/**
* @param {TransactionUnspentOutput} utxo
*/
  add_reference_input(utxo: TransactionUnspentOutput): void;
/**
* Add explicit output via a TransactionOutput object
* @param {SingleOutputBuilderResult} builder_result
*/
  add_output(builder_result: SingleOutputBuilderResult): void;
/**
* calculates how much the fee would increase if you added a given output
* @param {SingleOutputBuilderResult} builder
* @returns {bigint}
*/
  fee_for_output(builder: SingleOutputBuilderResult): bigint;
/**
* @param {bigint} fee
*/
  set_fee(fee: bigint): void;
/**
* @param {bigint} ttl
*/
  set_ttl(ttl: bigint): void;
/**
* @param {bigint} validity_start_interval
*/
  set_validity_start_interval(validity_start_interval: bigint): void;
/**
* @param {CertificateBuilderResult} result
*/
  add_cert(result: CertificateBuilderResult): void;
/**
* @returns {MapRewardAccountToCoin | undefined}
*/
  get_withdrawals(): MapRewardAccountToCoin | undefined;
/**
* @param {WithdrawalBuilderResult} result
*/
  add_withdrawal(result: WithdrawalBuilderResult): void;
/**
* @returns {AuxiliaryData | undefined}
*/
  get_auxiliary_data(): AuxiliaryData | undefined;
/**
* @param {AuxiliaryData} new_aux_data
*/
  set_auxiliary_data(new_aux_data: AuxiliaryData): void;
/**
* @param {AuxiliaryData} new_aux_data
*/
  add_auxiliary_data(new_aux_data: AuxiliaryData): void;
/**
* @param {MintBuilderResult} result
*/
  add_mint(result: MintBuilderResult): void;
/**
* Returns a copy of the current mint state in the builder
* @returns {Mint | undefined}
*/
  get_mint(): Mint | undefined;
/**
* @param {TransactionBuilderConfig} cfg
* @returns {TransactionBuilder}
*/
  static new(cfg: TransactionBuilderConfig): TransactionBuilder;
/**
* @param {InputBuilderResult} result
*/
  add_collateral(result: InputBuilderResult): void;
/**
* @param {Ed25519KeyHash} hash
*/
  add_required_signer(hash: Ed25519KeyHash): void;
/**
* @param {NetworkId} network_id
*/
  set_network_id(network_id: NetworkId): void;
/**
* @returns {NetworkId | undefined}
*/
  network_id(): NetworkId | undefined;
/**
* does not include refunds or withdrawals
* @returns {Value}
*/
  get_explicit_input(): Value;
/**
* withdrawals and refunds
* @returns {Value}
*/
  get_implicit_input(): Value;
/**
* Return explicit input plus implicit input plus mint
* @returns {Value}
*/
  get_total_input(): Value;
/**
* Return explicit output plus implicit output plus burn (does not consider fee directly)
* @returns {Value}
*/
  get_total_output(): Value;
/**
* does not include fee
* @returns {Value}
*/
  get_explicit_output(): Value;
/**
* @returns {bigint}
*/
  get_deposit(): bigint;
/**
* @returns {bigint | undefined}
*/
  get_fee_if_set(): bigint | undefined;
/**
* @param {TransactionOutput} output
*/
  set_collateral_return(output: TransactionOutput): void;
/**
* @returns {number}
*/
  full_size(): number;
/**
* @returns {Uint32Array}
*/
  output_sizes(): Uint32Array;
/**
* Builds the transaction and moves to the next step redeemer units can be added and a draft tx can
* be evaluated
* NOTE: is_valid set to true
* @param {number} algo
* @param {Address} change_address
* @returns {TxRedeemerBuilder}
*/
  build_for_evaluation(algo: number, change_address: Address): TxRedeemerBuilder;
/**
* Builds the transaction and moves to the next step where any real witness can be added
* NOTE: is_valid set to true
* @param {number} algo
* @param {Address} change_address
* @returns {SignedTxBuilder}
*/
  build(algo: number, change_address: Address): SignedTxBuilder;
/**
* used to override the exunit values initially provided when adding inputs
* @param {RedeemerWitnessKey} redeemer
* @param {ExUnits} ex_units
*/
  set_exunits(redeemer: RedeemerWitnessKey, ex_units: ExUnits): void;
/**
* warning: sum of all parts of a transaction must equal 0. You cannot just set the fee to the min value and forget about it
* warning: min_fee may be slightly larger than the actual minimum fee (ex: a few lovelaces)
* this is done to simplify the library code, but can be fixed later
* @param {boolean} script_calulation
* @returns {bigint}
*/
  min_fee(script_calulation: boolean): bigint;
/**
* Warning: this function will mutate the /fee/ field
* Make sure to call this function last after setting all other tx-body properties
* Editing inputs, outputs, mint, etc. after change been calculated
* might cause a mismatch in calculated fee versus the required fee
* @param {Address} address
* @param {boolean} include_exunits
* @returns {boolean}
*/
  add_change_if_needed(address: Address, include_exunits: boolean): boolean;
}
/**
*/
export class TransactionBuilderConfig {
  free(): void;
}
/**
*/
export class TransactionBuilderConfigBuilder {
  free(): void;
/**
* @returns {TransactionBuilderConfigBuilder}
*/
  static new(): TransactionBuilderConfigBuilder;
/**
* @param {LinearFee} fee_algo
* @returns {TransactionBuilderConfigBuilder}
*/
  fee_algo(fee_algo: LinearFee): TransactionBuilderConfigBuilder;
/**
* @param {bigint} coins_per_utxo_byte
* @returns {TransactionBuilderConfigBuilder}
*/
  coins_per_utxo_byte(coins_per_utxo_byte: bigint): TransactionBuilderConfigBuilder;
/**
* @param {bigint} pool_deposit
* @returns {TransactionBuilderConfigBuilder}
*/
  pool_deposit(pool_deposit: bigint): TransactionBuilderConfigBuilder;
/**
* @param {bigint} key_deposit
* @returns {TransactionBuilderConfigBuilder}
*/
  key_deposit(key_deposit: bigint): TransactionBuilderConfigBuilder;
/**
* @param {number} max_value_size
* @returns {TransactionBuilderConfigBuilder}
*/
  max_value_size(max_value_size: number): TransactionBuilderConfigBuilder;
/**
* @param {number} max_tx_size
* @returns {TransactionBuilderConfigBuilder}
*/
  max_tx_size(max_tx_size: number): TransactionBuilderConfigBuilder;
/**
* @param {boolean} prefer_pure_change
* @returns {TransactionBuilderConfigBuilder}
*/
  prefer_pure_change(prefer_pure_change: boolean): TransactionBuilderConfigBuilder;
/**
* @param {ExUnitPrices} ex_unit_prices
* @returns {TransactionBuilderConfigBuilder}
*/
  ex_unit_prices(ex_unit_prices: ExUnitPrices): TransactionBuilderConfigBuilder;
/**
* @param {CostModels} cost_models
* @returns {TransactionBuilderConfigBuilder}
*/
  cost_models(cost_models: CostModels): TransactionBuilderConfigBuilder;
/**
* @param {number} collateral_percentage
* @returns {TransactionBuilderConfigBuilder}
*/
  collateral_percentage(collateral_percentage: number): TransactionBuilderConfigBuilder;
/**
* @param {number} max_collateral_inputs
* @returns {TransactionBuilderConfigBuilder}
*/
  max_collateral_inputs(max_collateral_inputs: number): TransactionBuilderConfigBuilder;
/**
* @returns {TransactionBuilderConfig}
*/
  build(): TransactionBuilderConfig;
}
/**
*/
export class TransactionHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {TransactionHash}
*/
  static from_bech32(bech32_str: string): TransactionHash;
/**
* @param {string} input
* @returns {TransactionHash}
*/
  static from_hex(input: string): TransactionHash;
/**
* @param {Uint8Array} bytes
* @returns {TransactionHash}
*/
  static from_raw_bytes(bytes: Uint8Array): TransactionHash;
}
/**
*/
export class TransactionInput {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {TransactionInput}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TransactionInput;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {TransactionInput}
*/
  static from_cbor_hex(cbor_bytes: string): TransactionInput;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {TransactionInput}
*/
  static from_json(json: string): TransactionInput;
/**
* @returns {TransactionHash}
*/
  transaction_id(): TransactionHash;
/**
* @returns {bigint}
*/
  index(): bigint;
/**
* @param {TransactionHash} transaction_id
* @param {bigint} index
* @returns {TransactionInput}
*/
  static new(transaction_id: TransactionHash, index: bigint): TransactionInput;
}
/**
*/
export class TransactionInputList {
  free(): void;
/**
* @returns {TransactionInputList}
*/
  static new(): TransactionInputList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionInput}
*/
  get(index: number): TransactionInput;
/**
* @param {TransactionInput} elem
*/
  add(elem: TransactionInput): void;
}
/**
*/
export class TransactionMetadatum {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
* @param {Uint8Array} cbor_bytes
* @returns {TransactionMetadatum}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TransactionMetadatum;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_json_value(): any;
/**
* @param {string} json
* @returns {TransactionMetadatum}
*/
  static from_json(json: string): TransactionMetadatum;
/**
* @param {MetadatumMap} map
* @returns {TransactionMetadatum}
*/
  static new_map(map: MetadatumMap): TransactionMetadatum;
/**
* @param {MetadatumList} elements
* @returns {TransactionMetadatum}
*/
  static new_list(elements: MetadatumList): TransactionMetadatum;
/**
* @param {Int} int
* @returns {TransactionMetadatum}
*/
  static new_int(int: Int): TransactionMetadatum;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
  static new_bytes(bytes: Uint8Array): TransactionMetadatum;
/**
* @param {string} text
* @returns {TransactionMetadatum}
*/
  static new_text(text: string): TransactionMetadatum;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {MetadatumMap | undefined}
*/
  as_map(): MetadatumMap | undefined;
/**
* @returns {MetadatumList | undefined}
*/
  as_list(): MetadatumList | undefined;
/**
* @returns {Int | undefined}
*/
  as_int(): Int | undefined;
/**
* @returns {Uint8Array | undefined}
*/
  as_bytes(): Uint8Array | undefined;
/**
* @returns {string | undefined}
*/
  as_text(): string | undefined;
}
/**
*/
export class TransactionMetadatumLabels {
  free(): void;
/**
* @returns {TransactionMetadatumLabels}
*/
  static new(): TransactionMetadatumLabels;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {bigint}
*/
  get(index: number): bigint;
/**
* @param {bigint} elem
*/
  add(elem: bigint): void;
}
/**
*/
export class TransactionMetadatumList {
  free(): void;
/**
* @returns {TransactionMetadatumList}
*/
  static new(): TransactionMetadatumList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionMetadatum}
*/
  get(index: number): TransactionMetadatum;
/**
* @param {TransactionMetadatum} elem
*/
  add(elem: TransactionMetadatum): void;
}
/**
*/
export class TransactionOutput {
  free(): void;
/**
* @param {Address} address
* @param {Value} amount
* @param {DatumOption | undefined} datum_option
* @param {Script | undefined} script_reference
* @returns {TransactionOutput}
*/
  static new(address: Address, amount: Value, datum_option?: DatumOption, script_reference?: Script): TransactionOutput;
/**
* @returns {Address}
*/
  address(): Address;
/**
* @returns {Value}
*/
  amount(): Value;
/**
* @param {Value} amount
*/
  set_amount(amount: Value): void;
/**
* @returns {DatumOption | undefined}
*/
  datum(): DatumOption | undefined;
/**
* Get the datum hash from a tx output if present as a hash.
* Returns None if there is no datum, or the datum is inlined.
* Use TransactionOutput::datum() for inlined datums.
* @returns {DatumHash | undefined}
*/
  datum_hash(): DatumHash | undefined;
/**
* @returns {Script | undefined}
*/
  script_ref(): Script | undefined;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {TransactionOutput}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TransactionOutput;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {TransactionOutput}
*/
  static from_cbor_hex(cbor_bytes: string): TransactionOutput;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {TransactionOutput}
*/
  static from_json(json: string): TransactionOutput;
/**
* @param {AlonzoFormatTxOut} alonzo_format_tx_out
* @returns {TransactionOutput}
*/
  static new_alonzo_format_tx_out(alonzo_format_tx_out: AlonzoFormatTxOut): TransactionOutput;
/**
* @param {ConwayFormatTxOut} conway_format_tx_out
* @returns {TransactionOutput}
*/
  static new_conway_format_tx_out(conway_format_tx_out: ConwayFormatTxOut): TransactionOutput;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {AlonzoFormatTxOut | undefined}
*/
  as_alonzo_format_tx_out(): AlonzoFormatTxOut | undefined;
/**
* @returns {ConwayFormatTxOut | undefined}
*/
  as_conway_format_tx_out(): ConwayFormatTxOut | undefined;
}
/**
*/
export class TransactionOutputAmountBuilder {
  free(): void;
/**
* @param {Value} amount
* @returns {TransactionOutputAmountBuilder}
*/
  with_value(amount: Value): TransactionOutputAmountBuilder;
/**
* @param {MultiAsset} multiasset
* @param {bigint} coins_per_utxo_byte
* @returns {TransactionOutputAmountBuilder}
*/
  with_asset_and_min_required_coin(multiasset: MultiAsset, coins_per_utxo_byte: bigint): TransactionOutputAmountBuilder;
/**
* @returns {SingleOutputBuilderResult}
*/
  build(): SingleOutputBuilderResult;
}
/**
* We introduce a builder-pattern format for creating transaction outputs
* This is because:
* 1. Some fields (i.e. data hash) are optional, and we can't easily expose Option<> in WASM
* 2. Some fields like amounts have many ways it could be set (some depending on other field values being known)
* 3. Easier to adapt as the output format gets more complicated in future Cardano releases
*/
export class TransactionOutputBuilder {
  free(): void;
/**
* @returns {TransactionOutputBuilder}
*/
  static new(): TransactionOutputBuilder;
/**
* @param {Address} address
* @returns {TransactionOutputBuilder}
*/
  with_address(address: Address): TransactionOutputBuilder;
/**
* A communication datum is one where the data hash is used in the tx output
* Yet the full datum is included in the witness of the same transaction
* @param {PlutusData} datum
* @returns {TransactionOutputBuilder}
*/
  with_communication_data(datum: PlutusData): TransactionOutputBuilder;
/**
* @param {DatumOption} datum
* @returns {TransactionOutputBuilder}
*/
  with_data(datum: DatumOption): TransactionOutputBuilder;
/**
* @param {Script} script_ref
* @returns {TransactionOutputBuilder}
*/
  with_reference_script(script_ref: Script): TransactionOutputBuilder;
/**
* @returns {TransactionOutputAmountBuilder}
*/
  next(): TransactionOutputAmountBuilder;
}
/**
*/
export class TransactionOutputList {
  free(): void;
/**
* @returns {TransactionOutputList}
*/
  static new(): TransactionOutputList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionOutput}
*/
  get(index: number): TransactionOutput;
/**
* @param {TransactionOutput} elem
*/
  add(elem: TransactionOutput): void;
}
/**
*/
export class TransactionUnspentOutput {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes.
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {TransactionUnspentOutput}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TransactionUnspentOutput;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type does NOT support fine-tuned encoding options so this may or may not be
*             * canonical CBOR and may or may not preserve round-trip encodings.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {TransactionUnspentOutput}
*/
  static from_cbor_hex(cbor_bytes: string): TransactionUnspentOutput;
/**
* @param {TransactionInput} input
* @param {TransactionOutput} output
* @returns {TransactionUnspentOutput}
*/
  static new(input: TransactionInput, output: TransactionOutput): TransactionUnspentOutput;
}
/**
*/
export class TransactionWitnessSet {
  free(): void;
/**
* @param {TransactionWitnessSet} other
*/
  add_all_witnesses(other: TransactionWitnessSet): void;
/**
* @returns {LanguageList}
*/
  languages(): LanguageList;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {TransactionWitnessSet}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TransactionWitnessSet;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {TransactionWitnessSet}
*/
  static from_cbor_hex(cbor_bytes: string): TransactionWitnessSet;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {TransactionWitnessSet}
*/
  static from_json(json: string): TransactionWitnessSet;
/**
* @param {VkeywitnessList} vkeywitnesses
*/
  set_vkeywitnesses(vkeywitnesses: VkeywitnessList): void;
/**
* @returns {VkeywitnessList | undefined}
*/
  vkeywitnesses(): VkeywitnessList | undefined;
/**
* @param {NativeScriptList} native_scripts
*/
  set_native_scripts(native_scripts: NativeScriptList): void;
/**
* @returns {NativeScriptList | undefined}
*/
  native_scripts(): NativeScriptList | undefined;
/**
* @param {BootstrapWitnessList} bootstrap_witnesses
*/
  set_bootstrap_witnesses(bootstrap_witnesses: BootstrapWitnessList): void;
/**
* @returns {BootstrapWitnessList | undefined}
*/
  bootstrap_witnesses(): BootstrapWitnessList | undefined;
/**
* @param {PlutusV1ScriptList} plutus_v1_scripts
*/
  set_plutus_v1_scripts(plutus_v1_scripts: PlutusV1ScriptList): void;
/**
* @returns {PlutusV1ScriptList | undefined}
*/
  plutus_v1_scripts(): PlutusV1ScriptList | undefined;
/**
* @param {PlutusDataList} plutus_datums
*/
  set_plutus_datums(plutus_datums: PlutusDataList): void;
/**
* @returns {PlutusDataList | undefined}
*/
  plutus_datums(): PlutusDataList | undefined;
/**
* @param {RedeemerList} redeemers
*/
  set_redeemers(redeemers: RedeemerList): void;
/**
* @returns {RedeemerList | undefined}
*/
  redeemers(): RedeemerList | undefined;
/**
* @param {PlutusV2ScriptList} plutus_v2_scripts
*/
  set_plutus_v2_scripts(plutus_v2_scripts: PlutusV2ScriptList): void;
/**
* @returns {PlutusV2ScriptList | undefined}
*/
  plutus_v2_scripts(): PlutusV2ScriptList | undefined;
/**
* @param {PlutusV3ScriptList} plutus_v3_scripts
*/
  set_plutus_v3_scripts(plutus_v3_scripts: PlutusV3ScriptList): void;
/**
* @returns {PlutusV3ScriptList | undefined}
*/
  plutus_v3_scripts(): PlutusV3ScriptList | undefined;
/**
* @returns {TransactionWitnessSet}
*/
  static new(): TransactionWitnessSet;
}
/**
* Builder de-duplicates witnesses as they are added
*/
export class TransactionWitnessSetBuilder {
  free(): void;
/**
* @param {Vkeywitness} vkey_witness
*/
  add_vkey(vkey_witness: Vkeywitness): void;
/**
* @param {BootstrapWitness} bootstrap
*/
  add_bootstrap(bootstrap: BootstrapWitness): void;
/**
* @param {Script} script
*/
  add_script(script: Script): void;
/**
* @returns {NativeScriptList}
*/
  get_native_script(): NativeScriptList;
/**
* @returns {PlutusV1ScriptList}
*/
  get_plutus_v1_script(): PlutusV1ScriptList;
/**
* @returns {PlutusV2ScriptList}
*/
  get_plutus_v2_script(): PlutusV2ScriptList;
/**
* @param {PlutusData} plutus_datum
*/
  add_plutus_datum(plutus_datum: PlutusData): void;
/**
* @returns {PlutusDataList}
*/
  get_plutus_datum(): PlutusDataList;
/**
* @param {Redeemer} redeemer
*/
  add_redeemer(redeemer: Redeemer): void;
/**
* @returns {RedeemerList}
*/
  get_redeemer(): RedeemerList;
/**
* @param {RequiredWitnessSet} required_wits
*/
  add_required_wits(required_wits: RequiredWitnessSet): void;
/**
* @returns {TransactionWitnessSetBuilder}
*/
  static new(): TransactionWitnessSetBuilder;
/**
* @param {TransactionWitnessSet} wit_set
*/
  add_existing(wit_set: TransactionWitnessSet): void;
/**
* @returns {TransactionWitnessSet}
*/
  build(): TransactionWitnessSet;
/**
* @returns {RequiredWitnessSet}
*/
  remaining_wits(): RequiredWitnessSet;
/**
* @returns {TransactionWitnessSet}
*/
  try_build(): TransactionWitnessSet;
/**
* @param {RequiredWitnessSet} required_wits
*/
  merge_fake_witness(required_wits: RequiredWitnessSet): void;
}
/**
*/
export class TransactionWitnessSetList {
  free(): void;
/**
* @returns {TransactionWitnessSetList}
*/
  static new(): TransactionWitnessSetList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionWitnessSet}
*/
  get(index: number): TransactionWitnessSet;
/**
* @param {TransactionWitnessSet} elem
*/
  add(elem: TransactionWitnessSet): void;
}
/**
*/
export class TreasuryWithdrawalsAction {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {TreasuryWithdrawalsAction}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): TreasuryWithdrawalsAction;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {TreasuryWithdrawalsAction}
*/
  static from_cbor_hex(cbor_bytes: string): TreasuryWithdrawalsAction;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {TreasuryWithdrawalsAction}
*/
  static from_json(json: string): TreasuryWithdrawalsAction;
/**
* @returns {MapRewardAccountToCoin}
*/
  withdrawal(): MapRewardAccountToCoin;
/**
* @param {MapRewardAccountToCoin} withdrawal
* @returns {TreasuryWithdrawalsAction}
*/
  static new(withdrawal: MapRewardAccountToCoin): TreasuryWithdrawalsAction;
}
/**
*/
export class TxRedeemerBuilder {
  free(): void;
/**
* Builds the transaction and moves to the next step where any real witness can be added
* NOTE: is_valid set to true
* Will NOT require you to have set required signers & witnesses
* @returns {RedeemerList}
*/
  build(): RedeemerList;
/**
* used to override the exunit values initially provided when adding inputs
* @param {RedeemerWitnessKey} redeemer
* @param {ExUnits} ex_units
*/
  set_exunits(redeemer: RedeemerWitnessKey, ex_units: ExUnits): void;
/**
* Transaction body with a dummy values for redeemers & script_data_hash
* Used for calculating exunits or required signers
* @returns {TransactionBody}
*/
  draft_body(): TransactionBody;
/**
* @returns {AuxiliaryData | undefined}
*/
  auxiliary_data(): AuxiliaryData | undefined;
/**
* Transaction body with a dummy values for redeemers & script_data_hash and padded with dummy witnesses
* Used for calculating exunits
* note: is_valid set to true
* @returns {Transaction}
*/
  draft_tx(): Transaction;
}
/**
*/
export class UnitInterval {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {UnitInterval}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): UnitInterval;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {UnitInterval}
*/
  static from_cbor_hex(cbor_bytes: string): UnitInterval;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {UnitInterval}
*/
  static from_json(json: string): UnitInterval;
/**
* @returns {bigint}
*/
  start(): bigint;
/**
* @returns {bigint}
*/
  end(): bigint;
/**
* @param {bigint} start
* @param {bigint} end
* @returns {UnitInterval}
*/
  static new(start: bigint, end: bigint): UnitInterval;
}
/**
*/
export class UnregCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {UnregCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): UnregCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {UnregCert}
*/
  static from_cbor_hex(cbor_bytes: string): UnregCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {UnregCert}
*/
  static from_json(json: string): UnregCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @param {Credential} stake_credential
* @param {bigint} coin
* @returns {UnregCert}
*/
  static new(stake_credential: Credential, coin: bigint): UnregCert;
}
/**
*/
export class UnregDrepCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {UnregDrepCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): UnregDrepCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {UnregDrepCert}
*/
  static from_cbor_hex(cbor_bytes: string): UnregDrepCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {UnregDrepCert}
*/
  static from_json(json: string): UnregDrepCert;
/**
* @returns {Credential}
*/
  drep_credential(): Credential;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @param {Credential} drep_credential
* @param {bigint} coin
* @returns {UnregDrepCert}
*/
  static new(drep_credential: Credential, coin: bigint): UnregDrepCert;
}
/**
* Redeemer without the tag of index
* This allows builder code to return partial redeemers
* and then later have them placed in the right context
*/
export class UntaggedRedeemer {
  free(): void;
/**
* @param {PlutusData} data
* @param {ExUnits} ex_units
* @returns {UntaggedRedeemer}
*/
  static new(data: PlutusData, ex_units: ExUnits): UntaggedRedeemer;
}
/**
*/
export class UpdateDrepCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {UpdateDrepCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): UpdateDrepCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {UpdateDrepCert}
*/
  static from_cbor_hex(cbor_bytes: string): UpdateDrepCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {UpdateDrepCert}
*/
  static from_json(json: string): UpdateDrepCert;
/**
* @returns {Credential}
*/
  drep_credential(): Credential;
/**
* @returns {Anchor | undefined}
*/
  anchor(): Anchor | undefined;
/**
* @param {Credential} drep_credential
* @param {Anchor | undefined} anchor
* @returns {UpdateDrepCert}
*/
  static new(drep_credential: Credential, anchor?: Anchor): UpdateDrepCert;
}
/**
*/
export class Url {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Url}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Url;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Url}
*/
  static from_cbor_hex(cbor_bytes: string): Url;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Url}
*/
  static from_json(json: string): Url;
/**
* @returns {string}
*/
  get(): string;
}
/**
*/
export class VRFCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {VRFCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): VRFCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {VRFCert}
*/
  static from_cbor_hex(cbor_bytes: string): VRFCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {VRFCert}
*/
  static from_json(json: string): VRFCert;
/**
* @returns {Uint8Array}
*/
  output(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  proof(): Uint8Array;
/**
* @param {Uint8Array} output
* @param {Uint8Array} proof
* @returns {VRFCert}
*/
  static new(output: Uint8Array, proof: Uint8Array): VRFCert;
}
/**
*/
export class VRFKeyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {VRFKeyHash}
*/
  static from_bech32(bech32_str: string): VRFKeyHash;
/**
* @param {string} input
* @returns {VRFKeyHash}
*/
  static from_hex(input: string): VRFKeyHash;
/**
* @param {Uint8Array} bytes
* @returns {VRFKeyHash}
*/
  static from_raw_bytes(bytes: Uint8Array): VRFKeyHash;
}
/**
*/
export class VRFVkey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_raw_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {VRFVkey}
*/
  static from_bech32(bech32_str: string): VRFVkey;
/**
* @param {string} input
* @returns {VRFVkey}
*/
  static from_hex(input: string): VRFVkey;
/**
* @param {Uint8Array} bytes
* @returns {VRFVkey}
*/
  static from_raw_bytes(bytes: Uint8Array): VRFVkey;
}
/**
*/
export class Value {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Value}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Value;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Value}
*/
  static from_cbor_hex(cbor_bytes: string): Value;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Value}
*/
  static from_json(json: string): Value;
/**
* @param {bigint} coin
* @returns {Value}
*/
  static from_coin(coin: bigint): Value;
/**
* @param {bigint} coin
* @param {MultiAsset} multiasset
* @returns {Value}
*/
  static new(coin: bigint, multiasset: MultiAsset): Value;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @returns {MultiAsset}
*/
  multi_asset(): MultiAsset;
/**
* @returns {Value}
*/
  static zero(): Value;
/**
* @returns {boolean}
*/
  is_zero(): boolean;
/**
* @returns {boolean}
*/
  has_multiassets(): boolean;
/**
* @param {Value} rhs
* @returns {Value}
*/
  checked_add(rhs: Value): Value;
/**
* Subtract ADA and/or assets
* Removes an asset from the list if the result is 0 or less
* Does not modify this object, instead the result is returned
* None is returned if there would be integer underflow
* @param {Value} rhs
* @returns {Value}
*/
  checked_sub(rhs: Value): Value;
/**
* @param {Value} rhs
* @returns {Value}
*/
  clamped_sub(rhs: Value): Value;
}
/**
*/
export class Vkeywitness {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Vkeywitness}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Vkeywitness;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Vkeywitness}
*/
  static from_cbor_hex(cbor_bytes: string): Vkeywitness;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Vkeywitness}
*/
  static from_json(json: string): Vkeywitness;
/**
* @returns {PublicKey}
*/
  vkey(): PublicKey;
/**
* @returns {Ed25519Signature}
*/
  ed25519_signature(): Ed25519Signature;
/**
* @param {PublicKey} vkey
* @param {Ed25519Signature} ed25519_signature
* @returns {Vkeywitness}
*/
  static new(vkey: PublicKey, ed25519_signature: Ed25519Signature): Vkeywitness;
}
/**
*/
export class VkeywitnessList {
  free(): void;
/**
* @returns {VkeywitnessList}
*/
  static new(): VkeywitnessList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Vkeywitness}
*/
  get(index: number): Vkeywitness;
/**
* @param {Vkeywitness} elem
*/
  add(elem: Vkeywitness): void;
}
/**
*/
export class VoteDelegCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {VoteDelegCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): VoteDelegCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {VoteDelegCert}
*/
  static from_cbor_hex(cbor_bytes: string): VoteDelegCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {VoteDelegCert}
*/
  static from_json(json: string): VoteDelegCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {DRep}
*/
  d_rep(): DRep;
/**
* @param {Credential} stake_credential
* @param {DRep} d_rep
* @returns {VoteDelegCert}
*/
  static new(stake_credential: Credential, d_rep: DRep): VoteDelegCert;
}
/**
*/
export class VoteRegDelegCert {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {VoteRegDelegCert}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): VoteRegDelegCert;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {VoteRegDelegCert}
*/
  static from_cbor_hex(cbor_bytes: string): VoteRegDelegCert;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {VoteRegDelegCert}
*/
  static from_json(json: string): VoteRegDelegCert;
/**
* @returns {Credential}
*/
  stake_credential(): Credential;
/**
* @returns {DRep}
*/
  d_rep(): DRep;
/**
* @returns {bigint}
*/
  coin(): bigint;
/**
* @param {Credential} stake_credential
* @param {DRep} d_rep
* @param {bigint} coin
* @returns {VoteRegDelegCert}
*/
  static new(stake_credential: Credential, d_rep: DRep, coin: bigint): VoteRegDelegCert;
}
/**
*/
export class Voter {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {Voter}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): Voter;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {Voter}
*/
  static from_cbor_hex(cbor_bytes: string): Voter;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {Voter}
*/
  static from_json(json: string): Voter;
/**
* @param {Ed25519KeyHash} ed25519_key_hash
* @returns {Voter}
*/
  static new_constitutional_committee_hot_key_hash(ed25519_key_hash: Ed25519KeyHash): Voter;
/**
* @param {ScriptHash} script_hash
* @returns {Voter}
*/
  static new_constitutional_committee_hot_script_hash(script_hash: ScriptHash): Voter;
/**
* @param {Ed25519KeyHash} ed25519_key_hash
* @returns {Voter}
*/
  static new_d_rep_key_hash(ed25519_key_hash: Ed25519KeyHash): Voter;
/**
* @param {ScriptHash} script_hash
* @returns {Voter}
*/
  static new_d_rep_script_hash(script_hash: ScriptHash): Voter;
/**
* @param {Ed25519KeyHash} ed25519_key_hash
* @returns {Voter}
*/
  static new_staking_pool_key_hash(ed25519_key_hash: Ed25519KeyHash): Voter;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  as_constitutional_committee_hot_key_hash(): Ed25519KeyHash | undefined;
/**
* @returns {ScriptHash | undefined}
*/
  as_constitutional_committee_hot_script_hash(): ScriptHash | undefined;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  as_d_rep_key_hash(): Ed25519KeyHash | undefined;
/**
* @returns {ScriptHash | undefined}
*/
  as_d_rep_script_hash(): ScriptHash | undefined;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  as_staking_pool_key_hash(): Ed25519KeyHash | undefined;
}
/**
*/
export class VoterList {
  free(): void;
/**
* @returns {VoterList}
*/
  static new(): VoterList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Voter}
*/
  get(index: number): Voter;
/**
* @param {Voter} elem
*/
  add(elem: Voter): void;
}
/**
*/
export class VotingProcedure {
  free(): void;
/**
*
*             * Serialize this type to CBOR bytes
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {Uint8Array}
*/
  to_cbor_bytes(): Uint8Array;
/**
*
*             * Create this type from CBOR bytes
*             
* @param {Uint8Array} cbor_bytes
* @returns {VotingProcedure}
*/
  static from_cbor_bytes(cbor_bytes: Uint8Array): VotingProcedure;
/**
*
*             * Serialize this type to CBOR bytes encoded as a hex string (useful for working with CIP30).
*             * This type type supports encoding preservation so this will preserve round-trip CBOR formats.
*             * If created from scratch the CBOR will be canonical.
*             
* @returns {string}
*/
  to_cbor_hex(): string;
/**
*
*             * Create this type from the CBOR bytes encoded as a hex string.
*             * This is useful for interfacing with CIP30
*             
* @param {string} cbor_bytes
* @returns {VotingProcedure}
*/
  static from_cbor_hex(cbor_bytes: string): VotingProcedure;
/**
* @returns {string}
*/
  to_json(): string;
/**
* @returns {any}
*/
  to_js_value(): any;
/**
* @param {string} json
* @returns {VotingProcedure}
*/
  static from_json(json: string): VotingProcedure;
/**
* @returns {number}
*/
  vote(): number;
/**
* @returns {Anchor | undefined}
*/
  anchor(): Anchor | undefined;
/**
* @param {number} vote
* @param {Anchor | undefined} anchor
* @returns {VotingProcedure}
*/
  static new(vote: number, anchor?: Anchor): VotingProcedure;
}
/**
*/
export class VotingProcedures {
  free(): void;
/**
* @returns {VotingProcedures}
*/
  static new(): VotingProcedures;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {Voter} key
* @param {MapGovActionIdToVotingProcedure} value
* @returns {MapGovActionIdToVotingProcedure | undefined}
*/
  insert(key: Voter, value: MapGovActionIdToVotingProcedure): MapGovActionIdToVotingProcedure | undefined;
/**
* @param {Voter} key
* @returns {MapGovActionIdToVotingProcedure | undefined}
*/
  get(key: Voter): MapGovActionIdToVotingProcedure | undefined;
/**
* @returns {VoterList}
*/
  keys(): VoterList;
}
/**
*/
export class WithdrawalBuilderResult {
  free(): void;
}
