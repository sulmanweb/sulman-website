FROM node:14.5.0-alpine
WORKDIR /front
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["yarn", "serve"]