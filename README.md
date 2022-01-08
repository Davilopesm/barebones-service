# barebones-service
Simple barebone service for a Node application using Docker Compose, Node.js(Typescript), Express and Knex (MySQL)


# Runnning
`npm i`

`cp .env.example .env`

`docker-compose up mysql`

`npm run build && npm run start`

# Routes 
`GET - api/v1/health/ping`
- Simple route to ping and check if server is running

`GET - api/v1/health/check`
- Route to check if server is running and its correctly connected to the Database
