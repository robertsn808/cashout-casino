#!/bin/bash

# DigitalOcean Casino Setup Script
# Run this script on your NEW DigitalOcean droplet

echo "🌊 DigitalOcean Casino Setup"
echo "=========================="

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required software
echo "🔧 Installing LAMP stack..."
apt install -y apache2 mysql-server php8.1 php8.1-mysql php8.1-mbstring php8.1-xml php8.1-curl php8.1-zip php8.1-gd php8.1-bcmath unzip curl

# Install Node.js and PM2
echo "📦 Installing Node.js and PM2..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
npm install -g pm2

# Install Composer
echo "🎼 Installing Composer..."
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

# Configure MySQL
echo "🗄️ Setting up MySQL..."
mysql_secure_installation

# Create database and user
mysql -u root -p << 'EOF'
CREATE DATABASE laravel;
CREATE USER 'casino_user'@'localhost' IDENTIFIED BY '!nt0Th3D4rk';
GRANT ALL PRIVILEGES ON laravel.* TO 'casino_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
EOF

# Configure Apache
echo "🌐 Configuring Apache..."
a2enmod rewrite ssl
a2ensite default-ssl

# Create application directory
mkdir -p /var/www/casino
chown www-data:www-data /var/www/casino

echo ""
echo "✅ Base setup completed!"
echo ""
echo "🔄 Next steps:"
echo "1. Upload your casino files to /var/www/casino"
echo "2. Import your database"
echo "3. Configure Apache virtual host"
echo "4. Set up SSL certificates"
echo "5. Update DNS to point to this server"
echo ""
echo "🔧 Server IP Address:"
curl -s ifconfig.me
echo ""