FROM node:20-alpine
WORKDIR /usr/src/app
COPY ./ ./
COPY package*.json ./
RUN npm install 
CMD ["npm","run","server"]
EXPOSE 3000
