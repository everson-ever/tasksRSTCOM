FROM node:14.15.3-alpine3.10

RUN npm i -g create-react-app
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm", "start"]
