# Movie Consensus

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

```
until finished
```

## Deployment

Add additional notes about how to deploy this on a live system

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
