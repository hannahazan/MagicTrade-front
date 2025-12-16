# 1) Build Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# 2) Serve with Nginx
FROM nginx:alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# IMPORTANT: on enlève la page par défaut nginx
RUN rm -rf /usr/share/nginx/html/*

# IMPORTANT: le / final copie le CONTENU (index.html, assets, js...) à la racine
COPY --from=build /app/dist/magic-trade-front/ /usr/share/nginx/html/

EXPOSE 80

