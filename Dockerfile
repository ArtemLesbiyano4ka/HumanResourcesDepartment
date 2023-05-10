FROM node

WORKDIR /the/workdir/path

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
