# Dockerfile for frontend

# Sets the base image of the application to the node’s official image.
FROM node:17

# Sets the Working Directory as "../appr"
WORKDIR /usr/src/app

COPY package*.json ./

# Installing Dependencies
RUN npm i

# Copies the entire source code into "/server"
COPY . .

# Specifies the port the node app will be running on
EXPOSE 3000

# Runs "node start" after the above step is completed
CMD ["npm", "start"]
