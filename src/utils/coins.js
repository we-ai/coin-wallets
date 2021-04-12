import * as bitcoin from './bitcoin';
import * as ethereum from './ethereum';

const coins = { bitcoin, ethereum };

export const supportedCoins = Object.keys(coins);

export const createAddresses = (coinType, count) => {
  if (!coinType || isNaN(count)) return;
  const coin = coinType.toLowerCase();
  const ct = 0 | count;
  if (!supportedCoins.includes(coin) || ct <= 0) return;
  let addresses = [];
  const createAddress = coins[coin].createAddress;
  for (let i = 1; i <= ct; i++) {
    let { address, privateKey } = createAddress();
    addresses.push({ id: i, address, privateKey });
  }
  return addresses;
};

export const baseUrl = {
  bitcoin: 'https://www.blockchain.com/btc/address/',
  ethereum: 'https://www.blockchain.com/eth/address/',
};
