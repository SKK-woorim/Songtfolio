FROM nginx:latest

COPY image/ /usr/share/nginx/html/image/
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/