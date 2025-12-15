FROM node:latest
WORKDIR /usr/src/app
COPY ./ ./
WORKDIR /usr/src/app/backend
RUN npm install 
CMD ["npm","run","server"]
EXPOSE 3000
