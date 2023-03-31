# Dockerfile for backend

# Sets the base image of the application to the node’s official image.
FROM node:17

# Sets the Working Directory as "/server"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing Dependencies
COPY package*.json ./
RUN npm i

# Copies the entire source code
COPY . .

# Specifies the port the node app will be running on
EXPOSE 5000

# Runs "npm start" after the above step is completed
CMD ["npm", "start"]
