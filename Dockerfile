# Build stage
FROM node:latest
WORKDIR /usr/app
COPY . /usr/app

RUN npm ci --silent && npm run build

# Runnig stage
FROM nginx:latest
COPY --from=0 /usr/app/dist /usr/app/dist

# Nginx configuration
ADD nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
