# Movie Consensus
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)     [![HitCount](http://hits.dwyl.io/rajatthepagal/MovieConsensus.svg)](http://hits.dwyl.io/rajatthepagal/MovieConsensus)

It is a demo decentralised application for requesting movie reviews and commenting on the movie card as reviews. The application itself is hosted from a Google Clous Network compute engine. The application contacts with a Smart contract that is hosted in the Ethereum blockchain network. Currently it is hosted over the Rinkeby network. Since Rinkeby is a test network anyone can get eth for publishing reviews over the application. The smart contract are written using solidity and once deployed are immutable. That means now this application belongs to its users. Remember you will need eth to add new data to the smart contract. We will discuss all of these in a while.

This project is part of my internship project at [TechVariable](http://techvariable.com/) 

## Getting Started

First we need to get clear with the model of how blockchain works.  
There is this nice video from 3blue1brown.[How cryptocurrency work](https://www.youtube.com/watch?v=bBC-nXj3Ng4)  
Also just for understanding of 256bit SHA that sits at the heart of crypto currency.[SHA 256](https://www.youtube.com/watch?v=S9JGmA5_unY)  
Since breaking it is computationally hard. Pssst ever heard Quantum computing.  

Now if you are clear with crypto currency and what mining is all about we can start with understanding what Ethereum is.
In theory Ethereum is also a blockchain implementation that has all the capabilities of the BitCoin i.e first generation of blockchains. Ya there are three generation of them. Ethereum stands in the second one. The second generation of cryptocurrency supports programmable agreement of blockchain state. This is also called the <b>SMART CONTRACT</b>.  

This is Vitalik Buterin exmplaining Ethereum [Ethereum](https://www.youtube.com/watch?v=TDGq4aeevgY)  

You can follow this if you intend to use your own node for setting up the Decentralised Application [Setting up Rinkeyby](https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc)  

This is one video series you can look into for ethereum development [Coursetro Ethereum beginner course](https://coursetro.com/courses/20/Developing-Ethereum-Smart-Contracts-for-Beginners)  

If you didn't get that then know this Ethereum blockchain nodes i.e the client application running on any computer connected to the internet have the ability to run scripts on its own Ethereum Virtual Machine. EVM is capable of running scripts written in the Solidity language. Now the smart contracts allow you to do conditional transactions. A transaction can be either between two parties i.e accounts over ethereum node for eth or any unit of eth that is token or it can be of the data stored by the smart contract.  

<b>ethereum node:</b> Ethereum node is just a machine that have ethereum client installed and is capable of being part of the existing blockchain network.

There are a few prerequisites we need to get cleared with first
### Prerequisites

* Setting up the application as a standalone
  * Remember if you need your application to work without needing to setup a Geth node in your personel server or over the
    cloud then you will need your users of the application to have installed Metamask plugin in their chrome. [Metamask](metamask.io)  
  * <b>What is metamask?</b>  
    
    Metamask is a web3 injector that allows you to connect to any node of any ethereum network. (test or the homestad)  
    Now what is web3. [Web3.js](https://github.com/ethereum/web3.js/). Remember in order to use metamask you must create 
    metamask account and in order to do transaction you much have eth in your account.  
    Well web3 is a javscript api for interacting with ethereum node or smart contract hosted over the blockchain that the       node is currently part of. It can be used both at the backend i.e from a nodejs server or from the front end as a 
    Javascript plugin ala Jquery. Imagin Web3 as an interface to your current node setup or to any random one if using 
    metmask to inject web3 in your application.
    
* Setting up the Ethereum node through GETH installation  
  * You can follow the tutorial link given above for setting up the Geth node with rinkeby network. I am using rinkeby
    only because getting eth over it is pretty easy. [Set up geth with rinkeby](https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc)  

* Development prerequisite  
    Install Node
    
    ```
    sudo apt-get install node
    #for arch
    pacman -S node
    #for brew
    brew install node
    
    ```
    Install bower 
    
    ```
    # for brew
    brew install bower
    
    # for node 
    node install bower -g
    
    ```
    Install Testrpc
    ```
    node install testrpc -g
    ```
    Install http-server (if you do not intend to write node server for deployment purpose)
    ```
    node install http-server -g
    ```
    Remember having your front end application hosted from  localhost is important since metamask only injects web3 when the 
    application is hosted.  
    
    Remix browser editor [editor](remix.ethereum.org)  
    
### Installing

I will be writing the process down for a terminal oriented approach so most commands since done in node setup should be   
same for bothe windows and linux installation  

* have git installed otherwise git clone won't work but you can always download yourself and unzip the package

  ```
  git clone  https://github.com/rajatthepagal/MovieConsensus
  ```
  ```
  cd MovieConsensus
  ```
  ```
  http-server -a localhost -p 3000
  ```
If you now have metamask installed in your browser you can just navigate your browser to localhost:3000 and have metamask point to rinkeyby test network.  

And the application should show the view.  

For having deployed on your own testrpc
  ```
  testrpc --seed 10
  ```
Then point metamask to locahost:8454  

This covers up having this applications frontend deployed on any server or even on own personal network.  

## Deployment

But we also need to have the smart contract deployed. The smart contract that governs the transaction rule in the  
blockchain is to be deployed as follows

* Get the Remix editor and open the movie.sol file in it. You should have the movie.sol in its editor pane

* Compile it. Its in autocompile most of the times , but just to be double sure of any errors. Because once deployed  
  and mined your contract will remain the part of the blockchain forever and ever with its designated address.
  
* In the <b>Run</b> panel to the top right corner you can find all the option regarding which web3 provider do you intend  
  to use how much gas you want to give for the contract or which account to use. If using this through Metamask which is  
  which again is highly recommended because otherwise you will need to set up your own clients. 
  
* Configure the above sections and then click on create. That will generate the contract as a block transaction in the  
  the network and you must pay with eth for deploying it.  

* Wait for few minutes or hours !!! It will be mined and your contract will be deployed with a particular address. You can  
  find this address to the right bottom corner of <b>Run</b> panel. This address is important. Because it will allow you  
  to interact with your contract through web3.js.
  
That is all about Deploying the contract and the application.

## Development

If you are familiar with the above procedures and have done them successfully I believe you can start developing your own  
your own applications. 

I would advice to look at few of these links they should augment your understanding of DAPs a lot  

* [Ethereum Builders](https://ethereumbuilders.gitbooks.io/guide/content/en/index.html)  
* [Solidity event interactions](https://zupzup.org/smart-contract-interaction/)
* [Ethereums official doc for solidity and smart contracts](http://www.ethdocs.org/en/latest/contracts-and-transactions/index.html)  

<img src="http://web3j.readthedocs.io/en/stable/_images/web3j_transaction.png"/>  

Have a look at the above image. It should a clear understanding from a standpoint of traditional developer of web services who have been working on centralised servers till date.

### Bugs and Stuff

Yes they are annoying and get on your nerves. The ethereum VM language is not highly mature when it comes to sending data  
From limitation of sending two dimensional data to having querry repeated times for array of data at times.You can send  
fixed size arrays but when was the last time it happened in a dynamic system where users and data content is increasing.  

Here are few links of common bugs

* [SSHin into GCN console and you find geth is running/not running unexpectedly](https://ethereum.stackexchange.com/questions/10679/when-my-app-disconnects-from-remote-geth-does-it-mean-it-lose-whole-sync-informa)

* [When you want web3.js badly as single script](https://cdn.jsdelivr.net/npm/web3@0.19.0/dist/web3.min.js). Finding the  
  cdn was hard even though it shouldn't have been.  

* [Public and private data](https://ethereum.stackexchange.com/questions/7557/syntax-for-calling-contract-state-changing-methods). In case you are not a Object Oriented guy with view control you are in for the show. Sarcastically !!.  

* [The dreaded issue of Metamask not receiving events](https://github.com/MetaMask/metamask-extension/issues/2393#issuecomment-351291768).  
  The solution ? Do not change your network in metamask while browsing this actually fails to load some state variables  
  hence it fails to get the event logs of the new network. i.e if you want to shift from testrpc(localhost:8545) to  
  ethereum network , do so and then restart browser otherwise Metamask bugs out and wont show event logs or capture them.  
  Also Meta mask currently captures events twice. Its a bounty !!  

* ---- You are welcome to add more ----




## Built With

* [Bootstrap](https://getbootstrap.com/)
* [Jquery](https://jquery.com/)
* [Web3.js](https://github.com/ethereum/web3.js/)
* [geth](https://github.com/ethereum/go-ethereum/wiki/geth)
* [Metamask](http://metamask.io/)
* [npm](https://www.npmjs.com/)
* [bower](https://bower.io/)

## Contributing

A simple merge request will do. Will review the stuff and add it. :) Its a demo project none the less.


## Authors

* **Rajat Kanti Bhattacharjee** 

## License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE.md) file for details
