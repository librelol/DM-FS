# Stage 1: Build the application
FROM node:alpine as build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Pass the environment variable as a build argument
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Create an environment file
RUN echo "VITE_API_URL=${VITE_API_URL}" > .env

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine as production-stage

# Copy the built application from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]