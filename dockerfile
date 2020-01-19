FROM node:13.6.0-alpine3.10
COPY package.json package.json
COPY index.js index.js
COPY entrypoint.sh entrypoint.sh

RUN apk add --update mysql-client && rm -f /var/cache/apk/*

RUN chmod +x entrypoint.sh
RUN npm install
ENTRYPOINT [ "./entrypoint.sh"]