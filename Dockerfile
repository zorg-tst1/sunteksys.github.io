FROM node:lts-alpine
WORKDIR /app
COPY package.json .
RUN npm install --save --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
#CMD ["npm", "start"]