#!/bin/bash

echo "Casino Database Setup Script"
echo "============================"
echo ""

# Check if MySQL is running
if ! systemctl is-active --quiet mysql; then
    echo "❌ MySQL service is not running. Starting MySQL..."
    sudo systemctl start mysql
    sleep 2
fi

echo "🔧 Creating database and user..."
echo ""
echo "You will be prompted for the MySQL root password."
echo "If you don't have a root password set, just press Enter."
echo ""

# Create database and user
mysql -u root -p << 'EOF'
CREATE DATABASE IF NOT EXISTS laravel;
DROP USER IF EXISTS 'casino_user'@'localhost';
DROP USER IF EXISTS 'casino_user'@'127.0.0.1';
CREATE USER 'casino_user'@'localhost' IDENTIFIED BY '!nt0Th3D4rk';
CREATE USER 'casino_user'@'127.0.0.1' IDENTIFIED BY '!nt0Th3D4rk';
GRANT ALL PRIVILEGES ON laravel.* TO 'casino_user'@'localhost';
GRANT ALL PRIVILEGES ON laravel.* TO 'casino_user'@'127.0.0.1';
FLUSH PRIVILEGES;
SHOW DATABASES;
SELECT User, Host FROM mysql.user WHERE User = 'casino_user';
EXIT;
EOF

echo ""
echo "✅ Database and user created successfully!"
echo ""
echo "🔍 Testing database connection..."
mysql -u casino_user -p'!nt0Th3D4rk' -e "USE laravel; SELECT 'Connection successful!' as Status;"

if [ $? -eq 0 ]; then
    echo "✅ Database connection test passed!"
    echo ""
    echo "📥 Importing casino data from v105.sql..."
    mysql -u casino_user -p'!nt0Th3D4rk' laravel < v105.sql
    
    if [ $? -eq 0 ]; then
        echo "✅ Database import completed successfully!"
        echo ""
        echo "🔧 Generating Laravel application key..."
        cd casino && php artisan key:generate --force
        echo ""
        echo "🎉 Database setup complete!"
        echo ""
        echo "📊 Database statistics:"
        mysql -u casino_user -p'!nt0Th3D4rk' -e "USE laravel; SELECT COUNT(*) as 'Total Tables' FROM information_schema.tables WHERE table_schema = 'laravel';"
    else
        echo "❌ Database import failed!"
    fi
else
    echo "❌ Database connection test failed!"
    echo "Please check the MySQL credentials and try again."
fi