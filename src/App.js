import { ConnectWallet, useBalance } from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import "./styles/Home.css";

export default function Home() {

  const {data:myNativeToken}=useBalance(NATIVE_TOKEN_ADDRESS);
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

  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">Harmonauts DAO</h1>
          <p className="description">Get started by connecting your MetMask Wallet to Harmony One BlockChain</p>
          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <h2>My Tokens</h2>
        <div className="grid">
          <div className="card">
            <p>{myNativeToken?.name} : {myNativeToken?.displayValue} {myNativeToken?.symbol}</p><br/>
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
            <p>0xff7674AB8dc1FF39E5226555C5Fd4919A246A538</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0xff7674AB8dc1FF39E5226555C5Fd4919A246A538?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WONE</h3>
            <p>{myWONEBalance?.name} : {myWONEBalance?.displayValue} {myWONEBalance?.symbol}</p>
            <p>0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a</p><br/>
            <p>{myLPHOGWONEBalance?.name} : {myLPHOGWONEBalance?.displayValue} {myLPHOGWONEBalance?.symbol}</p>
            <p>0x0561827bdcc40a1d3556f5aa32022c81c2175ee8</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0x0561827bdcc40a1d3556f5aa32022c81c2175ee8?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>SONIC</h3>
            <p>{mySONICBalance?.name} : {mySONICBalance?.displayValue} {mySONICBalance?.symbol}</p>
            <p>0x1e05C8B69e4128949FcEf16811a819eF2f55D33E</p><br/>
            <p>{myLPSonicBalance?.name} : {myLPSonicBalance?.displayValue} {myLPSonicBalance?.symbol}</p>
            <p>0xc01537d6d2305408d6045c1B96e88174cbd32b5b</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0xc01537d6d2305408d6045c1B96e88174cbd32b5b?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WARU</h3>
            <p>{myWaruBalance?.name} : {myWaruBalance?.displayValue} {myWaruBalance?.symbol}</p>
            <p>0x59fA612968F54080aba370Fd822343c43F23C874</p><br/>
            <p>{myLPWaruBalance?.name} : {myLPWaruBalance?.displayValue} {myLPWaruBalance?.symbol}</p>
            <p>0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0x752630C2E39eB9D81fA3F263cF9A9cB81C81CD67?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>HOUND</h3>
            <p>{myHoundBalance?.name} : {myHoundBalance?.displayValue} {myHoundBalance?.symbol}</p>
            <p>0x58055c005526a4cF357bE16180d9cfc9d8daEc8c</p><br/>
            <p>{myLPHOGHoundBalance?.name} : {myLPHOGHoundBalance?.displayValue} {myLPHOGHoundBalance?.symbol}</p>
            <p>0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0x05c14496aAe75106aFA5A8E5204A8f0C61f377d5?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>NEURONS</h3>
            <p>{myNeuronsBalance?.name} : {myNeuronsBalance?.displayValue} {myNeuronsBalance?.symbol}</p>
            <p>0xFb5e55b89dbeAF01797Be3F744bd556E4d9FB259</p><br/>
            <p>{MyLPNeuronsSSBalance?.name} : {MyLPNeuronsSSBalance?.displayValue} {MyLPNeuronsSSBalance?.symbol}</p>
            <p>0x32a4fcCc27BE6873541c3667EED11628490aDCa2</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0x32a4fcCc27BE6873541c3667EED11628490aDCa2?embed=1&theme=dark"/>
        </div>
        <hr/>
        <div className="grid">
          <div className="card">
            <h3>WEEDCOMMERCE</h3>
            <p>{myWCBalance?.name} : {myWCBalance?.displayValue} {myWCBalance?.symbol}</p>
            <p>0xA4fE0e18506B3D171c7674698991DfAF238621a6</p><br/>
            <p>{MyLPWCBalance?.name} : {MyLPWCBalance?.displayValue} {MyLPWCBalance?.symbol}</p>
            <p>0x8fE16B69d13577Cac8A3178672935C6e3512913d</p>
          </div>
        </div>
        <div id="dexscreener-embed">
          <iframe height="800" width="1400" src="https://dexscreener.com/harmony/0x8fE16B69d13577Cac8A3178672935C6e3512913d?embed=1&theme=dark"/>
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