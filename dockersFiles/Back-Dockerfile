FROM node:12.8-alpine as node
WORKDIR /my-api
COPY . .
RUN npm install
#RUN npm run build

RUN npm install -g nodemon

EXPOSE 3002

ENTRYPOINT ["nodemon","index.js"]