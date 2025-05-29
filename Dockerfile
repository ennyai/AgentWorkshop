# Build stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using legacy peer deps for compatibility
RUN npm cache clean --force && \
    npm install --legacy-peer-deps --no-audit --no-fund

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies with legacy peer deps
RUN npm ci --omit=dev --legacy-peer-deps --no-audit --no-fund && \
    npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy any other necessary files
COPY --from=builder /app/package.json ./

# Expose port
EXPOSE ${PORT:-4173}

# Start the application
CMD ["npm", "run", "start"] 