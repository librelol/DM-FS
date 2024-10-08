# Use the official Node.js image as the base image
FROM node:alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
# RUN npm run build

# Use a smaller base image for the final image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app .

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable
ENV PORT=3000

# Start the application
CMD ["node", "server.js"]