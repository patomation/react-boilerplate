# Build Stage
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Deployment Stage
FROM httpd:latest
COPY --from=0 /app/dist /usr/local/apache2/htdocs/