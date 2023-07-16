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
  }
];

export default function Home() {

  const [myHNAUTSName,setMyHNAUTSName]=useState();
  const [myHNAUTSSymbol,setMyHNAUTSSymbol]=useState();
  const [myHNAUTSBalanceOfParsed,setMyHNAUTSBalanceOf]=useState();
  const [myWHNAUTSName,setMyWHNAUTSName]=useState();
  const [myWHNAUTSSymbol,setMyWHNAUTSSymbol]=useState();
  const [myWHNAUTSBalanceOfParsed,setMyWHNAUTSBalanceOf]=useState();

  const {data:myHOGBalance}=useBalance("0xa0F92Df550E1E12452C250465E54fDF77B9cf64d");

  const {data:my1USDCBalance}=useBalance("0x985458E523dB3d53125813eD68c274899e9DfAb4");
  const {data:myLPHOG1USDCBalance}=useBalance("0xff7674AB8dc1FF39E5226555C5Fd4919A246A538");

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
    }
  }

  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">Harmonauts DAO</h1>
          <p className="description">1. Connect your Wallet to Harmony blockchain</p>
          <div className="connect"><ConnectWallet/></div>
          <p className="description">2. Render your Assets</p>
          <div className="connect"><button onClick={() => fetchInfo()}>Render Assets</button></div>
        </div>

        <div className="grid">
          <div className="card">
            <p>{myHNAUTSName} : {myHNAUTSBalanceOfParsed} {myHNAUTSSymbol}</p>
            <p>0xD7745A515beDD91eE9024b6C31dc1E75a10dC618</p>
            <br/>
            <p>{myWHNAUTSName} : {myWHNAUTSBalanceOfParsed} {myWHNAUTSSymbol}</p>
            <p>0xC29Ca7c72Da0873693BF2d686544C17222EC2659</p><br/>
            <p>{myHOGBalance?.name} : {myHOGBalance?.displayValue} {myHOGBalance?.symbol}</p>
            <p>0xa0F92Df550E1E12452C250465E54fDF77B9cf64d</p>
          </div>
        </div>
        <hr/>

        <div className="grid">
          <div className="card">
            <h3>1USDC</h3>
            <p>{my1USDCBalance?.name} : {my1USDCBalance?.displayValue} {my1USDCBalance?.symbol}</p>
            <p>0x985458E523dB3d53125813eD68c274899e9DfAb4</p><br/>
            <p>{myLPHOG1USDCBalance?.name} : {myLPHOG1USDCBalance?.displayValue} {myLPHOG1USDCBalance?.symbol}</p>
            <p>0xff7674AB8dc1FF39E5226555C5Fd4919A246A538</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x985458E523dB3d53125813eD68c274899e9DfAb4&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap 1USDC -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x985458E523dB3d53125813eD68c274899e9DfAb4">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="1USDC" src="https://dexscreener.com/harmony/0xff7674AB8dc1FF39E5226555C5Fd4919A246A538?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WONE</h3>
            <p>{myWONEBalance?.name} : {myWONEBalance?.displayValue} {myWONEBalance?.symbol}</p>
            <p>0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a</p><br/>
            <p>{myLPHOGWONEBalance?.name} : {myLPHOGWONEBalance?.displayValue} {myLPHOGWONEBalance?.symbol}</p>
            <p>0x0561827bdcc40a1d3556f5aa32022c81c2175ee8</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap WONE -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="WONE" src="https://dexscreener.com/harmony/0x0561827bdcc40a1d3556f5aa32022c81c2175ee8?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>SONIC</h3>
            <p>{mySONICBalance?.name} : {mySONICBalance?.displayValue} {mySONICBalance?.symbol}</p>
            <p>0x1e05C8B69e4128949FcEf16811a819eF2f55D33E</p><br/>
            <p>{myLPSonicBalance?.name} : {myLPSonicBalance?.displayValue} {myLPSonicBalance?.symbol}</p>
            <p>0xc01537d6d2305408d6045c1B96e88174cbd32b5b</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x1e05C8B69e4128949FcEf16811a819eF2f55D33E&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap SONIC -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x1e05C8B69e4128949FcEf16811a819eF2f55D33E">Add Liquidity</a> | <a href="https://harmony.sonicswap.io/swap#/staking/0x1e05C8B69e4128949FcEf16811a819eF2f55D33E/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Stake LP Tokens</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="SONIC" src="https://dexscreener.com/harmony/0xc01537d6d2305408d6045c1B96e88174cbd32b5b?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WARU</h3>
            <p>{myWaruBalance?.name} : {myWaruBalance?.displayValue} {myWaruBalance?.symbol}</p>
            <p>0x59fA612968F54080aba370Fd822343c43F23C874</p><br/>
            <p>{myLPWaruBalance?.name} : {myLPWaruBalance?.displayValue} {myLPWaruBalance?.symbol}</p>
            <p>0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x59fA612968F54080aba370Fd822343c43F23C874&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap WARU -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x59fA612968F54080aba370Fd822343c43F23C874">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="WARU" src="https://dexscreener.com/harmony/0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>HOUND</h3>
            <p>{myHoundBalance?.name} : {myHoundBalance?.displayValue} {myHoundBalance?.symbol}</p>
            <p>0x58055c005526a4cF357bE16180d9cfc9d8daEc8c</p><br/>
            <p>{myLPHOGHoundBalance?.name} : {myLPHOGHoundBalance?.displayValue} {myLPHOGHoundBalance?.symbol}</p>
            <p>0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0x58055c005526a4cF357bE16180d9cfc9d8daEc8c&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap HOUND -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0x58055c005526a4cF357bE16180d9cfc9d8daEc8c">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="HOUND" src="https://dexscreener.com/harmony/0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>NEURONS</h3>
            <p>{myNeuronsBalance?.name} : {myNeuronsBalance?.displayValue} {myNeuronsBalance?.symbol}</p>
            <p>0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259</p><br/>
            <p>{MyLPNeuronsSSBalance?.name} : {MyLPNeuronsSSBalance?.displayValue} {MyLPNeuronsSSBalance?.symbol}</p>
            <p>0x32a4fcCc27BE6873541c3667EED11628490aDCa2</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap NEURONS -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259">Add Liquidity</a></p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1250" title="NEURONS" src="https://dexscreener.com/harmony/0x32a4fcCc27BE6873541c3667EED11628490aDCa2?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WEEDCOMMERCE</h3>
            <p>{myWCBalance?.name} : {myWCBalance?.displayValue} {myWCBalance?.symbol}</p>
            <p>0xA4fE0e18506B3D171c7674698991DfAF238621a6</p><br/>
            <p>{MyLPWCBalance?.name} : {MyLPWCBalance?.displayValue} {MyLPWCBalance?.symbol}</p>
            <p>0x8fE16B69d13577Cac8A3178672935C6e3512913d</p><br/>
            <p><a href="https://harmony.sonicswap.io/swap#/swap?inputCurrency=0xA4fE0e18506B3D171c7674698991DfAF238621a6&outputCurrency=0xa0F92Df550E1E12452C250465E54fDF77B9cf64d">Swap WEEDCOMMERCE -> HOG</a> | <a href="https://harmony.sonicswap.io/swap#/add/0xa0F92Df550E1E12452C250465E54fDF77B9cf64d/0xA4fE0e18506B3D171c7674698991DfAF238621a6">Add Liquidity</a></p>
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