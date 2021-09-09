FROM node:12-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:alpine AS nginx
ENV PORT=80
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf etc/nginx/conf.d/default.conf

# Heroku provide dynamic port to app, thus need to update PORT number in config file accordingly:
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'