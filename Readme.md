# Lung Xray CNN 

This project aims to define the condition of a lung using a convolutional neural network.

## Requirements

##### IA training
You will need [Docker](https://docs.docker.com/get-docker/) and [Docker-compose](https://docs.docker.com/compose/install/) installed on your machine and [download](https://icedrive.net/s/kak1xuNGbQbY43y7hkWDkx5SXtYg) the dataset in root folder.

##### Client demonstration
You will need [NodeJS](https://nodejs.org/en/download/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine.

## Usage

##### IA training
:whale2: Start the containered Jupyter Notebook using the following Make command:

```bash
make run/jupyter
```

:robot: Access notebooks and run it on localhost to train IA

:grey_exclamation: If you want to use the client to make predictions, after training and saving the model, use the following command to convert the final model to json format:

```bash
make model/json
```

##### Client demonstration

Move to app directory.

:point_right: Copy the `.env.example` file in a new `.env` file and replace path to the json model.

:cd: Install depandances:

```bash
npm install
```

:running: Run NodeJS server:
```bash
npm start
```