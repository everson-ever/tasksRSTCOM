FROM node:12 as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
COPY public/ ./public/
RUN npm run build

FROM nginx:latest
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80