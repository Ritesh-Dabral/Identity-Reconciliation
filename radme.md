# Identity Reconciliation
## Tech

Identity Reconciliation uses a number of open source projects to work properly:

- node.js - I/O for the backend
- Express - fast node.js network app framework
- Sequalize - Node.js ORM


## Installation

#### Identity Reconciliation requires [Node.js](https://nodejs.org/) v14+ to run.
###### `Configure Environment Variables. Refer the .env.example file`
- Copy the `.env.example` file to a new file named `.env`
- Open the `.env` file and fill in the required environment variables

##### Install the dependencies and devDependencies and start the server.
#
```sh
cd Identity-Reconciliation
npm i
npm start
```

### For production environments...

```sh
NODE_ENV=production node app
```

#### Building for source

```sh
npm run build
```
