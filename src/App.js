import { ConnectWallet, useBalance } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./styles/Home.css";

const contractABI = [
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "outputs": [
        {
            "name": "amount",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "rewardDebt",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "rewardDebtAtBlock",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "lastWithdrawBlock",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "firstDepositBlock",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "blockdelta",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "lastDepositBlock",
            "internalType": "uint256",
            "type": "uint256"
        }
    ],
    "inputs": [
        {
            "name": "",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "",
            "internalType": "address",
            "type": "address"
        }
    ],
    "name": "userInfo",
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x93f1a40b"
  },
  {
    "outputs": [
        {
            "name": "",
            "internalType": "uint256",
            "type": "uint256"
        }
    ],
    "inputs": [
        {
            "name": "_pid",
            "internalType": "uint256",
            "type": "uint256"
        },
        {
            "name": "_user",
            "internalType": "address",
            "type": "address"
        }
    ],
    "name": "pendingReward",
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x98969e82"
  }
];

export default function Home() {

  const [myHNAUTSName,setMyHNAUTSName]=useState();
  const [myHNAUTSSymbol,setMyHNAUTSSymbol]=useState();
  const [myHNAUTSBalanceOfParsed,setMyHNAUTSBalanceOf]=useState();

  const [myWHNAUTSName,setMyWHNAUTSName]=useState();
  const [myWHNAUTSSymbol,setMyWHNAUTSSymbol]=useState();
  const [myWHNAUTSBalanceOfParsed,setMyWHNAUTSBalanceOf]=useState();

  const [myUserInfoAmount,setMyUserInfoAmount]=useState();
  const [myPendingReward,setMyPendingReward]=useState();

  const {data:myHOGBalance}=useBalance("0xa0F92Df550E1E12452C250465E54fDF77B9cf64d");

  const {data:my1USDCBalance}=useBalance("0x985458E523dB3d53125813eD68c274899e9DfAb4");
  const {data:myLPHOG1USDCBalance}=useBalance("0xff7674AB8dc1FF39E5226555C5Fd4919A246A538");

  const {data:my1USDCPegBalance}=useBalance("0xBC594CABd205bD993e7FfA6F3e9ceA75c1110da5");

  const {data:myWONEBalance}=useBalance("0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a");
  const {data:myLPHOGWONEBalance}=useBalance("0x0561827bdcc40a1d3556f5aa32022c81c2175ee8");

  const {data:mySONICBalance}=useBalance("0x1e05C8B69e4128949FcEf16811a819eF2f55D33E");
  const {data:myLPSonicBalance}=useBalance("0xc01537d6d2305408d6045c1B96e88174cbd32b5b");

  const {data:myWaruBalance}=useBalance("0x59fA612968F54080aba370Fd822343c43F23C874");
  const {data:myLPWaruBalance}=useBalance("0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67");

  const {data:myHoundBalance}=useBalance("0x58055c005526a4cF357bE16180d9cfc9d8daEc8c");
  const {data:myLPHOGHoundBalance}=useBalance("0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5");

  const {data:myNeuronsBalance}=useBalance("0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259");
  const {data:MyLPNeuronsSSBalance}=useBalance("0x32a4fcCc27BE6873541c3667EED11628490aDCa2");

  const {data:myWCBalance}=useBalance("0xA4fE0e18506B3D171c7674698991DfAF238621a6");
  const {data:MyLPWCBalance}=useBalance("0x8fE16B69d13577Cac8A3178672935C6e3512913d");

  useEffect(() => {
    fetchInfo();
  }, [])

  async function fetchInfo() {
    if(typeof window.ethereum !== 'undefined') {
          const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    
          const mySigner = myProvider.getSigner();
          const myAddress = await mySigner.getAddress();

          const myContractHNAUTS = new ethers.Contract("0xD7745A515beDD91eE9024b6C31dc1E75a10dC618", contractABI, myProvider);
          const myContractWHNAUTS = new ethers.Contract("0xC29Ca7c72Da0873693BF2d686544C17222EC2659", contractABI, myProvider);
          const myContractMasterSonicer = new ethers.Contract("0x65bFeeC6E0679EB5913b25063Aab228ccab43161", contractABI, myProvider);

          const myHNAUTSName = await myContractHNAUTS.name();
          setMyHNAUTSName(myHNAUTSName);

          const myHNAUTSSymbol = await myContractHNAUTS.symbol();
          setMyHNAUTSSymbol(myHNAUTSSymbol);

          const myHNAUTSBalanceOf = await myContractHNAUTS.balanceOf(myAddress);
          const myHNAUTSBalanceOfParsed = parseInt(myHNAUTSBalanceOf._hex, 16);
          setMyHNAUTSBalanceOf(myHNAUTSBalanceOfParsed);
    
          const myWHNAUTSName = await myContractWHNAUTS.name();
          setMyWHNAUTSName(myWHNAUTSName);

          const myWHNAUTSSymbol = await myContractWHNAUTS.symbol();
          setMyWHNAUTSSymbol(myWHNAUTSSymbol);

          const myWHNAUTSBalanceOf = await myContractWHNAUTS.balanceOf(myAddress);
          const myWHNAUTSBalanceOfParsed = parseInt(myWHNAUTSBalanceOf._hex, 16);
          setMyWHNAUTSBalanceOf(myWHNAUTSBalanceOfParsed);

          const myUserInfoAmount = await myContractMasterSonicer.userInfo(41,myAddress);
          const myUserInfoAmountParsed = parseInt(myUserInfoAmount.amount._hex, 16);
          const myUserInfoAmountParsedDiv = myUserInfoAmountParsed/1000000000000000;
          const myUserInfoAmountParsedDivDiv = myUserInfoAmountParsedDiv/1000;
          setMyUserInfoAmount(myUserInfoAmountParsedDivDiv);

          const myPendingReward = await myContractMasterSonicer.pendingReward(41,myAddress);
          const myPendingRewardParsed = parseInt(myPendingReward._hex, 16);
          const myPendingRewardParsedDiv = myPendingRewardParsed/1000000000000000;
          const myPendingRewardParsedDivDiv = myPendingRewardParsedDiv/1000;
          setMyPendingReward(myPendingRewardParsedDivDiv);
    }
  }

  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">Harmonauts DaoBoard</h1>
          <p className="description">1. Connect your Wallet to Harmony blockchain</p>
          <div className="connect"><ConnectWallet/></div>
          <p className="description">2. Render your Assets</p>
          <div className="connect"><button onClick={() => fetchInfo()}>Render Assets</button></div>
        </div>
        <div className="grid">
          <div className="card">
            <p>{myHNAUTSName} : {myHNAUTSBalanceOfParsed} {myHNAUTSSymbol} | <a href="https://explorer.harmony.one/address/0xd7745a515bedd91ee9024b6c31dc1e75a10dc618?activeTab=5">0xD7745A515beDD91eE9024b6C31dc1E75a10dC618</a></p><br/>
            <p>{myWHNAUTSName} : {myWHNAUTSBalanceOfParsed} {myWHNAUTSSymbol} | <a href="https://explorer.harmony.one/address/0xC29Ca7c72Da0873693BF2d686544C17222EC2659?activeTab=5">0xC29Ca7c72Da0873693BF2d686544C17222EC2659</a></p><br/>
            <p>{myHOGBalance?.name} : {myHOGBalance?.displayValue} {myHOGBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d?activeTab=6">0xa0F92Df550E1E12452C250465E54fDF77B9cf64d</a></p>
          </div>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>1USDC DE-PEGGED</h3>
            <p>{my1USDCBalance?.name} : {my1USDCBalance?.displayValue} {my1USDCBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x985458E523dB3d53125813eD68c274899e9DfAb4?activeTab=6">0x985458E523dB3d53125813eD68c274899e9DfAb4</a></p><br/>
            <p>{myLPHOG1USDCBalance?.name} : {myLPHOG1USDCBalance?.displayValue} {myLPHOG1USDCBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xff7674AB8dc1FF39E5226555C5Fd4919A246A538?activeTab=6">0xff7674AB8dc1FF39E5226555C5Fd4919A246A538</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x985458E523dB3d53125813eD68c274899e9DfAb4&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap 1USDC DE-PEGGED -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x985458E523dB3d53125813eD68c274899e9DfAb4">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="1USDC" src="https://dexscreener.com/harmony/0xff7674AB8dc1FF39E5226555C5Fd4919A246A538?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>1USDC PEGGED</h3>
            <p>{my1USDCPegBalance?.name} : {my1USDCPegBalance?.displayValue} {my1USDCPegBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xBC594CABd205bD993e7FfA6F3e9ceA75c1110da5?activeTab=6">0xBC594CABd205bD993e7FfA6F3e9ceA75c1110da5</a></p><br/>
            <p><a href="https://swap.country/#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xBC594CABd205bD993e7FfA6F3e9ceA75c1110da5/">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="1USDCPeg" src="https://dexscreener.com/harmony/0x817f0a6C8080E539A188e27223E246F567eA01F1?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WONE</h3>
            <p>{myWONEBalance?.name} : {myWONEBalance?.displayValue} {myWONEBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a?activeTab=6">0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a</a></p><br/>
            <p>{myLPHOGWONEBalance?.name} : {myLPHOGWONEBalance?.displayValue} {myLPHOGWONEBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x0561827bdcc40a1d3556f5aa32022c81c2175ee8?activeTab=6">0x0561827bdcc40a1d3556f5aa32022c81c2175ee8</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap WONE -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a">Add Liquidity</a></p><br/>
            <p>Swap.country : <a href="https://swap.country/#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a/">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="WONE" src="https://dexscreener.com/harmony/0x0561827bdcc40a1d3556f5aa32022c81c2175ee8?embed=1&theme=dark"/>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="WONECOUNTRY" src="https://dexscreener.com/harmony/0xFd77d42601C6185aebbee521820E6FbEaDaC9d32?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>SONIC</h3>
            <p>{mySONICBalance?.name} : {mySONICBalance?.displayValue} {mySONICBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x1e05C8B69e4128949FcEf16811a819eF2f55D33E?activeTab=6">0x1e05C8B69e4128949FcEf16811a819eF2f55D33E</a></p><br/>
            <p>{myLPSonicBalance?.name} : {myLPSonicBalance?.displayValue} {myLPSonicBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xc01537d6d2305408d6045c1B96e88174cbd32b5b?activeTab=6">0xc01537d6d2305408d6045c1B96e88174cbd32b5b</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x1e05C8B69e4128949FcEf16811a819eF2f55D33E&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap SONIC -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x1e05C8B69e4128949FcEf16811a819eF2f55D33E">Add Liquidity</a> | <a href="https://harmony.sonicswap.io/swap#/staking/0x1e05C8B69e4128949FcEf16811a819eF2f55D33E/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Stake LP Tokens</a></p><br/>
            <p>Staked LP Tokens : {myUserInfoAmount}</p><br/>
            <p>Pending Rewards : {myPendingReward}</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="SONIC" src="https://dexscreener.com/harmony/0xc01537d6d2305408d6045c1B96e88174cbd32b5b?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WARU</h3>
            <p>{myWaruBalance?.name} : {myWaruBalance?.displayValue} {myWaruBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x59fA612968F54080aba370Fd822343c43F23C874?activeTab=6">0x59fA612968F54080aba370Fd822343c43F23C874</a></p><br/>
            <p>{myLPWaruBalance?.name} : {myLPWaruBalance?.displayValue} {myLPWaruBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67?activeTab=6">0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x59fA612968F54080aba370Fd822343c43F23C874&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap WARU -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x59fA612968F54080aba370Fd822343c43F23C874">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="WARU" src="https://dexscreener.com/harmony/0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>HOUND</h3>
            <p>{myHoundBalance?.name} : {myHoundBalance?.displayValue} {myHoundBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x58055c005526a4cF357bE16180d9cfc9d8daEc8c?activeTab=6">0x58055c005526a4cF357bE16180d9cfc9d8daEc8c</a></p><br/>
            <p>{myLPHOGHoundBalance?.name} : {myLPHOGHoundBalance?.displayValue} {myLPHOGHoundBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5?activeTab=6">0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x58055c005526a4cF357bE16180d9cfc9d8daEc8c&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap HOUND -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x58055c005526a4cF357bE16180d9cfc9d8daEc8c">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="HOUND" src="https://dexscreener.com/harmony/0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>NEURONS</h3>
            <p>{myNeuronsBalance?.name} : {myNeuronsBalance?.displayValue} {myNeuronsBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259?activeTab=6">0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259</a></p><br/>
            <p>{MyLPNeuronsSSBalance?.name} : {MyLPNeuronsSSBalance?.displayValue} {MyLPNeuronsSSBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x32a4fcCc27BE6873541c3667EED11628490aDCa2?activeTab=6">0x32a4fcCc27BE6873541c3667EED11628490aDCa2</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap NEURONS -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="NEURONS" src="https://dexscreener.com/harmony/0x32a4fcCc27BE6873541c3667EED11628490aDCa2?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WEEDCOMMERCE</h3>
            <p>{myWCBalance?.name} : {myWCBalance?.displayValue} {myWCBalance?.symbol} | <a href="https://explorer.harmony.one/address/0xA4fE0e18506B3D171c7674698991DfAF238621a6?activeTab=6">0xA4fE0e18506B3D171c7674698991DfAF238621a6</a></p><br/>
            <p>{MyLPWCBalance?.name} : {MyLPWCBalance?.displayValue} {MyLPWCBalance?.symbol} | <a href="https://explorer.harmony.one/address/0x8fE16B69d13577Cac8A3178672935C6e3512913d?activeTab=6">0x8fE16B69d13577Cac8A3178672935C6e3512913d</a> | <a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0xA4fE0e18506B3D171c7674698991DfAF238621a6&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap WEEDCOMMERCE -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xA4fE0e18506B3D171c7674698991DfAF238621a6">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="WEEDCOMMERCE" src="https://dexscreener.com/harmony/0x8fE16B69d13577Cac8A3178672935C6e3512913d?embed=1&theme=dark"/>
        </div>

        {/* <div className="grid">
          <a
            href="https://portal.thirdweb.com/"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Portal ➜</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/dashboard"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Dashboard ➜</h2>
              <p>
                Deploy, configure, and manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/templates"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Templates ➜</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a>
        </div> */}
      </div>
    </main>
  );
}