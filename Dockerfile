FROM php:8.2-cli

# Install packages
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libssl-dev \
    pkg-config

# Install MongoDB extension
RUN pecl install mongodb && docker-php-ext-enable mongodb

# Install MySQL extension
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy project
COPY . .

# Install dependencies
RUN composer install --no-dev --optimize-autoloader --ignore-platform-req=ext-mongodb

# Start PHP server
CMD php -S 0.0.0.0:$PORT