FROM php:8.2-apache

# Install dependencies
RUN apt-get update && apt-get install -y \
    git unzip libssl-dev pkg-config

# Install MongoDB extension
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Enable Apache rewrite
RUN a2enmod rewrite

# Copy project files
COPY . /var/www/html/

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-interaction --no-dev --optimize-autoloader