FROM node:latest

ARG NPM_TOKEN

WORKDIR /app

#COPY . .

COPY package.json /app/package.json  

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /app/.npmrc && \
    npm install && \
    rm -f /app/.npmrc

ENV PORT=3000

COPY . .

#RUN npm install
#RUN rm -f .npmrc

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "local-cl"]

