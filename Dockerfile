FROM node:22-alpine3.19

# copy all project files to /app/ folder. create the directory if it dosen't exits
COPY . /home/app

# switch to the current working directory
WORKDIR /home/app

RUN npm install

CMD [ "npm", "start" ]
