// import * as wasm from '../wasm/cardano_multiplatform_lib/cardano_multiplatform_lib';
// import * as wasm2 from '../wasm/cardano_message_signing/cardano_message_signing';

/**
 * Loads the WASM modules
 */

class Loader {
  async load() {
    if (this._wasm && this._wasm2) return;
    /**
     * @private
     */
    this._wasm = await import(
      '../wasm/cardano_multiplatform_lib/cardano_multiplatform_lib'
    );
    /**
     * @private
     */
    this._wasm2 = await import(
      '../wasm/cardano_message_signing/cardano_message_signing'
    );
  }

  get Cardano() {
    return this._wasm;
  }

  get Message() {
    return this._wasm2;
  }
}

export default new Loader();
