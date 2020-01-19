FROM node:13.6.0-alpine3.10
COPY package.json package.json
COPY index.js index.js
RUN npm install
ENTRYPOINT [ "node", "." ]