FROM node:20

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only lockfile and package.json first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Build the project
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
