# Frontend Dockerfile
FROM node:20-alpine

# مسیر کاری داخل کانتینر
WORKDIR /app

# کپی پکیج‌ها و نصب
COPY package*.json ./
RUN npm install

# بقیه فایل‌ها
COPY . .

# Build production
RUN npm run build

# Serve با nginx یا http-server
RUN npm install -g serve

# Command to serve
CMD ["serve", "-s", "dist", "-l", "3000"]