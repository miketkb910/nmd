FROM node:20-alpine
WORKDIR /usr/src/app
COPY ./ ./
WORKDIR /usr/src/app/backend
RUN npm install 
CMD ["npm","run","server"]
EXPOSE 3000
