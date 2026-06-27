FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libssl-dev \
    pkg-config

# Install PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install MongoDB extension
RUN pecl install mongodb-1.21.0 \ 
    && docker-php-ext-enable mongodb

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Start PHP server
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-10000} -t ."]
