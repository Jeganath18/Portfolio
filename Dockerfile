# Step 1: Build React app
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve using Nginx
FROM --platform=linux/amd64 nginx:1.21-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx directory
COPY --from=build /app/dest /usr/share/nginx/html

# Optional: custom Nginx config for SPA (fixes routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
