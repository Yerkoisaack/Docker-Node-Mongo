FROM node:10

WORKDIR /usr/src/app2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]