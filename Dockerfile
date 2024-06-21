FROM node:22-alpine3.19

RUN mkdir -p /home/app

COPY . /home/app

CMD [ "npm", "run start:dev" ]