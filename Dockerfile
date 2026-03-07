FROM php:8.2-apache

# Install system packages
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libssl-dev \
    pkg-config

# Fix Apache MPM conflict
RUN a2dismod mpm_event && a2enmod mpm_prefork

# Install MongoDB extension
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Enable rewrite module
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --ignore-platform-req=ext-mongodb

EXPOSE 80