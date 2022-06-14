//import { useState } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'


export default function Home() {
  /**Connect Metamask */
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()

  const connectWalletHandler = async () => {
    /**Check if Metamask is installed */
    //&& typeof window.ethereum !== "undefined"
    if( typeof window !== "undifined" ) {
      try {
        /**request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts"})
        /**create web3 instance & set to state */
        const web3 = new Web3(window.ethereum)
        /**set web3 instance in React state */
        setWeb3(web3)
        /**get list of accounts */
        const accounts = await web3.eth.getAccounts()
        /**set account 1 to React state */
        setAddress(accounts[0])
      } catch(err) {
        console.log(err.message)
      }
    } else {
      /**Metamask is not installed */
      console.log("Please install MetaMask")
    }
  }

  return (
    <div>
      <Head>
        <title>Ether lottery</title>
        <meta name="description" content="An Ethereum Lottery dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar mt-4 mb-4">
          <div className="container">
            <div className="navbar-brand">
              <h1>Ether Lotery</h1>
            </div>
            <div className="navbar-end">
              <button onClick={connectWalletHandler} className="button is-link">Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className="column is-two-third">
                <section className="mt-5">
                  <p>Enter the lottery the by sending 0.01 Ether</p>
                  <button className="button is-link is-large is-light mt-4">Play now</button>
                </section>
                <section className="mt-6">
                  <p><b>Adim only:</b> Pick winner</p>
                  <button className="button is-primary is-large is-light mt-4">Pick winner</button>
                </section>
              </div>
              <div className="column is-one-third">
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div className="">Lottery #1 winner:</div>
                          <div className="">
                            <a href="https://etherscan.io/address/0x3EA3CD06c72fB8c6DAc1c57Bb4A183c61e725318" target="_blank">
                              0x3EA3CD06c72fB8c6DAc1c57Bb4A183c61e725318
                            </a>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Players (1)</h2>
                        <div className="">
                            <a href="https://etherscan.io/address/0x3EA3CD06c72fB8c6DAc1c57Bb4A183c61e725318" target="_blank">
                              0x3EA3CD06c72fB8c6DAc1c57Bb4A183c61e725318
                            </a>  
                          </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Pot</h2>
                        <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Block Explorer</p>
      </footer>
    </div>
  )
}
