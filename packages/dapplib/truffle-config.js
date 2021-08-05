require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strike crouch pitch pumpkin gesture lock tail thrive'; 
let testAccounts = [
"0x614514b1d88aa479b242ef37bea9e84c495a0b62203fb62f3a8bc3c5753d80e1",
"0xb4de14e58179cbbe9ae9102bf5d3ae01278639aa224b81b3e5567e84697dbd26",
"0x915cb01da187287c53c31205654c55096614786a3ceb1ccb519ff83e244cf2a3",
"0x8f8cbc379c55f74c9fb4e653569a941bf1f28a99a270e55f84fae3e22fef2d7b",
"0x4557ec29a4703ec05e3a00e76ed2dc0a2809f664f88f3df7e84a44f3618a5137",
"0x6fa3af98e2cd28e19e49e4d9120a2ed0ad4f4cc93d5ce04b813ae062c2dbeae3",
"0x52b21ccb0398d98b8f60f9716a3c4d39095fd39c31c4c39f127c26b472db0d4c",
"0x6a47dad8db85d120ac2674169daafc91e613e5344f30c3d0aefab9f22393011c",
"0x66d9880c66454fac46bd0916a66ee84d239e3a89cfc5e7b5906b23fcdc50ac29",
"0x4fb3591c07a3e986bf09f846c945007927e83219e04b7b941c52b39dfb07b523"
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

