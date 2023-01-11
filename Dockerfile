# ==== CONFIGURE =====
# Use a Node 19 base image
FROM node:19-alpine  as builder
# Set the working directory to /app inside the container
WORKDIR /app

# ==== BUILD =====
# Copy package.json and package-lock.json file
COPY package.json .
COPY package-lock.json .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Copy remaining app files
COPY . .
# Build the app
RUN npm run build

# ==== RUN =======
# Set the env to "production"
# ENV NODE_ENV production
# Fetching the nginx image
FROM nginx:1.19.0
# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
# Fire up nginx
ENTRYPOINT ["nginx","-g","demond off;"]