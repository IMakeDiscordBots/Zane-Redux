FROM node:alpine

WORKDIR /usr/src/zane_docker

COPY package*.json ./
RUN npm install

COPY . .

#Deploy any changes to commands BEFORE COMMITTING
CMD ["node", "."]
