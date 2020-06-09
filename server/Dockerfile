FROM node:12.16.2-alpine3.11
WORKDIR /usr/src/app
COPY . .
RUN npm ci --production
EXPOSE 3000
CMD [ "node", "app" ]