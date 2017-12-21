FROM node:6
MAINTAINER Daniel Rigoni
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]
