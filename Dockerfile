FROM php:8.2-cli

# Install system deps
RUN apt-get update && apt-get install -y \
    git unzip libssl-dev pkg-config

# Install MongoDB extension
RUN pecl install mongodb && docker-php-ext-enable mongodb

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy project
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --ignore-platform-req=ext-mongodb

# Railway provides $PORT
CMD php -S 0.0.0.0:$PORT