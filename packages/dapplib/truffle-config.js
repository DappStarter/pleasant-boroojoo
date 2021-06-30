require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain evil include kiwi surround text'; 
let testAccounts = [
"0x7843fa7e1175b21e9c5a42f41f54c5d2c43bdb1c0458de39825dd3dc4de6f5ed",
"0x9ad37fc2ff4d50eea645a89e02e15f012edd1c795f9e52491f544f020f1e23c6",
"0x700be835fb35bc1fb061694552d338f88389635b606a437eeebd936c25cef6fb",
"0x19fc9a53517d64f3175d18e6542e72b9d56a0716c91cfff9652fa1660525ce02",
"0xb6655b5b06293118729a3ba76bef80216038bca9f62d478d1ff19d550c3db17b",
"0xf43341ed1853beac4d12dd853b9b5f37a39a53d2dfeb00dba4d2c464c8d8a3fe",
"0x794ac7990428316d25a163c3232afed589cacf147df35b71d08b7ab406cc9646",
"0x1249d2b3d6740c89bdd1f5da727f1919a197f6e09f4a43bc67fd9d0e3dc6f0a2",
"0xe28efd49525d5b85a5ca8ead7252e902fa8f56a32dd169cce03de52394f56c84",
"0x3fe31873d454f1f703337eae53a5905e76f42b463887a18871cd39503e0ee6f5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

