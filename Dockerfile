# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache g++ make python3 py3-pip

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts -g
RUN npm rebuild node-sass --force

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# debug app
# CMD ["sleep", "1d"]