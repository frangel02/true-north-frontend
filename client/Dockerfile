#FROM  nginx

#MAINTAINER Frangel Rodriguez <frangele331@gmail.com>

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
#COPY /dist/aston-villa-app /usr/share/nginx/html
EXPOSE 80
COPY build/  /usr/share/nginx/html
