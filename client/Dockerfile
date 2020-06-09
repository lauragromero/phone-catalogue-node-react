FROM node:12.16.2-alpine3.11 as builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
FROM nginx:1.13.3-alpine
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]