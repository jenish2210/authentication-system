FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libssl-dev \
    pkg-config

# Install MySQL extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install MongoDB extension
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN composer install --no-dev --optimize-autoloader

CMD php -S 0.0.0.0:$PORT