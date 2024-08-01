FROM node:lts as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ .
RUN npm run build



FROM nginx:1.21.6 as production-stage

# не обязательно. Может быть удобно уметь в нотейенре исходники, чтобы при необходимости пересобрать
RUN apt update; apt install -y vim npm
RUN mkdir /app_source
COPY --from=build-stage /app/ /app_source

RUN mkdir /app
COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf
