FROM node:alpine
WORKDIR /usr/app/noughtscrosses
EXPOSE 3000
COPY ./ ./
RUN npm install
CMD ["npm", "start"]