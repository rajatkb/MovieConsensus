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

If you didn't get that then know this Ethereum blockchain nodes i.e the client application running on any computer connected to the internet have the ability to run scripts on its own Ethereum Virtual Machine. EVM is capable of running scripts written in the Solidity language.  



### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
