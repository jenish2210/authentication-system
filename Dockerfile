FROM php:8.2-apache

# Fix Apache MPM conflict
RUN a2dismod mpm_event
RUN a2enmod mpm_prefork

# Install MongoDB extension
RUN pecl install mongodb && docker-php-ext-enable mongodb

COPY . /var/www/html