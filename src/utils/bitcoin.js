import { crypto as bcrypto, ECPair } from 'bitcoinjs-lib';
import bs58check from 'bs58check';
import { bitcoin as bitcoinNet } from '../utils/networks';

export const createAddress = () => {
  const keyPair = ECPair.makeRandom();
  const privateKey = keyPair.privateKey.toString('hex');
  const publicKey = keyPair.publicKey;
  console.log('publicKey:', publicKey.toString('hex'), publicKey.length);
  let address = getAddressFromPublicKey(publicKey);
  return { privateKey, address };
};

export const getAddressFromPublicKey = (publicKey) => {
  const publicKeyHash = bcrypto.hash160(publicKey);
  const payload = Buffer.allocUnsafe(21);
  payload.writeUInt8(bitcoinNet.pubKeyHash);
  publicKeyHash.copy(payload, 1);
  return bs58check.encode(payload);
};
