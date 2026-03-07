FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libssl-dev \
    pkg-config

# Install mysqli
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN composer install --no-dev --optimize-autoloader --ignore-platform-req=ext-mongodb

CMD php -S 0.0.0.0:$PORT