# Use Node.js 18 Alpine for a lightweight, stable base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE ${PORT:-4173}

# Start the application
CMD ["npm", "run", "start"] 