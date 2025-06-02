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

# Pass build-time environment variables (especially VITE_ prefixed ones)
ARG VITE_WEBHOOK_URL
ENV VITE_WEBHOOK_URL=$VITE_WEBHOOK_URL

# Add cache bust for environment variable changes
ARG CACHE_BUST=1
RUN echo "Cache bust: $CACHE_BUST" && echo "VITE_WEBHOOK_URL available: $VITE_WEBHOOK_URL"

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

# Start the application (serve binds to 0.0.0.0 by default)
CMD ["npm", "run", "start"] 