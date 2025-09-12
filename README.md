# 🎰 Cashout Casino

A comprehensive online casino platform built with Laravel 11 and real-time WebSocket gaming.

## 🌟 Features

- **Full Casino Platform**: Complete casino management system
- **Real-time Gaming**: WebSocket-powered slots, arcade games, and live gaming
- **SSL Security**: Fully secured with HTTPS and SSL certificates
- **Responsive Design**: Mobile-friendly interface
- **Payment Integration**: Multiple payment gateway support
- **Admin Dashboard**: Complete backend management
- **Multi-game Support**: Slots, arcade games, and more

## 🛠️ Technology Stack

- **Backend**: Laravel 11, PHP 8.3+
- **Frontend**: HTML5, CSS3, JavaScript
- **Database**: MySQL 8.0+
- **WebSocket**: Node.js with PM2
- **Web Server**: Apache/Nginx
- **Package Manager**: Composer, NPM

## 📋 Requirements

- PHP 8.1 or higher
- MySQL 8.0 or higher
- Node.js 16+ and NPM
- Composer
- Apache or Nginx
- SSL Certificate

## 🚀 Quick Deploy to DigitalOcean

```bash
# 1. Create DigitalOcean droplet (Ubuntu 22.04 LTS)
# 2. Clone and deploy
git clone https://github.com/robertsn808/cashout-casino.git
cd cashout-casino
chmod +x scripts/digitalocean_setup.sh
./scripts/digitalocean_setup.sh

# 3. Configure domain DNS to point to your droplet IP
```

## 🔧 Manual Installation

### 1. Server Requirements
```bash
# Install LAMP stack
sudo apt update
sudo apt install apache2 mysql-server php8.1 php8.1-mysql php8.1-mbstring php8.1-xml php8.1-curl

# Install Node.js and PM2
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

# Install Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### 2. Database Setup
```sql
CREATE DATABASE laravel;
CREATE USER 'casino_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON laravel.* TO 'casino_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Application Setup
```bash
# Install dependencies
cd casino
composer install
php artisan key:generate

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Import database
mysql -u casino_user -p laravel < ../database/casino_schema.sql

# Start WebSocket servers
cd PTWebSocket
npm install
pm2 start Arcade.js --watch
pm2 start Server.js --watch
pm2 start Slots.js --watch
```

## 🔐 Security Setup

### SSL Configuration
Place your SSL certificates in `casino/PTWebSocket/ssl/`:
- `crt.crt` - SSL certificate
- `key.key` - Private key
- `intermediate.pem` - Certificate bundle

### Default Passwords
Update default user passwords after installation:
```sql
UPDATE w_users SET password = '$2a$12$s1RpwEx/oTL3vYQGZjC33eBHECRJb7gkjmAk9Tmyefub7gQ4nh8XS';
```
*This sets all passwords to 'Test123'*

## 📁 Project Structure

```
cashout-casino/
├── casino/                 # Main Laravel application
│   ├── PTWebSocket/       # WebSocket servers & SSL
│   ├── app/               # Application logic
│   ├── public/           # Web root
│   └── .env              # Environment config
├── scripts/              # Deployment scripts
├── database/             # Database schema
└── README.md
```

## 🎮 Gaming Features

- **Slot Machines**: Multiple variations with progressive jackpots
- **Arcade Games**: Classic casino arcade games
- **Real-time Gaming**: Live WebSocket connections
- **Payment Processing**: Integrated payment systems
- **Admin Dashboard**: Complete management interface

## 🚀 Production Deployment

### DigitalOcean (Recommended)
1. Create Ubuntu 22.04 droplet ($6/month minimum)
2. Run deployment script
3. Update DNS A record to droplet IP
4. Configure SSL certificates

### Firewall Ports
- **80**: HTTP (redirects to HTTPS)
- **443**: HTTPS
- **22154, 22188, 22197**: WebSocket servers

## 📊 Environment Variables

Key variables in `casino/.env`:
```env
APP_URL=https://cashout.realconnect.online
DB_DATABASE=laravel
DB_USERNAME=casino_user
DB_PASSWORD=your_password
```

## ⚠️ Important Notes

- **Legal Compliance**: Ensure gambling laws compliance in your jurisdiction
- **Security**: Change all default passwords before going live
- **SSL Required**: HTTPS is enforced for all connections
- **Database**: Regular backups recommended

## 🆘 Support

- Create GitHub issues for bugs
- Check `/scripts` for deployment helpers
- Review Laravel logs in `casino/storage/logs`

---

**🎰 Ready to deploy your casino? Start with the DigitalOcean quick deploy!**