FROM node:20-alpine3.17
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY . .
RUN npm install
RUN npx prisma generate
CMD npm start