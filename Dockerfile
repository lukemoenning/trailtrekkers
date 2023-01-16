# Use Node as a base image
FROM node:19-alpine

# Set the working directory of the container
WORKDIR /app

# Copy package.json into the working directory
# Copy package.json individually to take advantage of caching
COPY package.json .

# Install npm into the working directory
RUN npm install

# Copy all the contents of trackify into the working directory
COPY . .

# Expose the port
EXPOSE 3000

# Start the React App
CMD ["npm", "start"]