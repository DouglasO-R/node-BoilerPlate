# FROM imagem de origem
FROM node:14-alpine
# diretorio da aplicação no container
WORKDIR /usr/app
# intalação das dependencias da aplicação
COPY ["package*.json", "yarn.lock", "./"]
# run yarn to install dependencies
RUN yarn
# copy local files to docker directories
COPY . ./
# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000
# execute script yarn start
CMD [ "yarn","dev" ]