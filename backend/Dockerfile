FROM node:12.18.3-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g pm2
RUN npm install
COPY . .
EXPOSE 3333
CMD ["npm", "start"]
