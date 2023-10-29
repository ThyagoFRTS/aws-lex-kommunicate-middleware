FROM node:20

WORKDIR /lex-api

COPY package*.json ./

RUN npm install

COPY . /lex-api/bot

EXPOSE 3000

# Inicialize o servidor Next.js
CMD ["npm", "run", "dev"]


