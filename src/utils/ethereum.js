const Account = require('eth-lib/lib/account');

export const createAddress = () => {
  let { privateKey, address } = Account.create();
  return { privateKey, address };
};
