FROM node:latest

RUN mkdir -p /usr/src/zane_docker
WORKDIR /usr/src/zane_docker

COPY package.json /usr/src/zane_docker
RUN npm install

COPY . /usr/src/zane_docker

#Deploy any changes to commands BEFORE COMMITTING
CMD ["node", "."]
