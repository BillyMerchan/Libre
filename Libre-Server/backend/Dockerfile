# Sets the base image of the application to the node’s official image.
FROM node:17

# Sets the Working Directory as "/server"
WORKDIR /server/frontend/usr/src/app
# Copies the package.json file into "/server" and runs npm i
COPY package.json /server
RUN npm i
# Copies the entire source code into "/server"
COPY . /server

# Specifies the port the node app will be running on
EXPOSE 5000

# Runs "node server.js" after the above step is completed
CMD ["node", "server.js"]
