# multi-container-application

This is based off the DevOps Roadmap Project [Multi-Container Application](https://roadmap.sh/projects/multi-container-service)

Use Docker Compose to run a multi-container application  

This is number 16 of [DevOps Projects](https://roadmap.sh/devops/projects) as per roadmap.sh

## Description From Site 

The goal of this project is to practice using Docker Compose to run a multi-container application in production. You will use Docker Compose to run a Node.js application and a MongoDB database.

## Requirements

Create a simple unauthenticated Node.js API service for creating a simple todo list. The API should have the following endpoints:

- `GET /todos` — get all todos
- `POST /todos` — create a new todo
- `GET /todos/:id` — get a single todo by id
- `PUT /todos/:id` — update a single todo by id
- `DELETE /todos/:id` — delete a single todo by id

The API should connect to MongoDB to store the todo items. You can use [Express](https://expressjs.com) for the API and [Mongoose](https://mongoosejs.com/) to connect to MongoDB. You can use `nodemon` to automatically restart the server when the source code changes.

### Requirement #1 - Dockerize the API 

You are required to dockerize the API and have a ``docker-compose.yml`` file which will spin up a [MongoDB_container](https://hub.docker.com/_/mongo) and the API container. If everything works, you should be able to access the API via ``http://localhost:3000`` and the todos should be saved to the MongoDB container. Data should be persisted when the containers are stopped and started.

### Requirement #2 = Setup a Remote Server 

Setup a remote server on Digital Ocean, AWS or any other cloud provider. You should use terraform to create the server and Ansible to configure it properly i.e. setup docker, docker-compose, pulling the image from Docker Hub and running the containers.

### Requirement #3 - Setup a CI/CD Pipeline 

Once you have everything working locally, push your code to GitHub and setup a CI/CD pipeline to deploy the application to the remote server. You can use GitHub Actions to setup the pipeline. Make sure to use `docker-compose` to run the application in the production environment.

### Bonus - Setup a Reverse Proxy

Setup a reverse proxy using Nginx to allow you to access the application via `http://your_domain.com.` You should use `docker-compose` to setup the reverse proxy.


After completing this project, you will have a good understanding of Docker Compose, multi-container applications, CI/CD pipelines, and more.

## To Run Locally

- Step 1


## To Run CI/CD

- Setup the following repository secrets:
    - DO_TOKEN : Digital Ocean access token
    - DO_SPACES_SECRET_KEY : Digital Ocean spaces secret key (for Terraform state file)
    - DO_SPACES_ACCESS_KEY : Digital Ocean spaces access key (for Terraform state file)
    - DO_SSH_PUBLIC_KEY : Keypair to be used for VM 
    - DO_SSH_PRIVATE_KEY : Keypair to be used for VM

- Run workflow: This will build and install everything.
- Access webpage from `http://<ip_address>`

## Notes 

- Note 1


## Lessons Learned

- Lesson 1