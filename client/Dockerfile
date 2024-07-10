# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install client dependencies
RUN npm config set network-timeout 600000 && npm install

# Copy the rest of the client code
COPY . .

# Expose the port the client will run on
EXPOSE 8181

# Command to run the client
CMD [ "npm", "start" ]
