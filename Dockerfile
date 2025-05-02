FROM nginx:latest

COPY index.html /usr/share/nginx/html/index.html
COPY image/ /usr/share/nginx/html/image/
