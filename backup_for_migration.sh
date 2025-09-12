#!/bin/bash

echo "Creating migration backup for DigitalOcean..."
BACKUP_DIR="/home/i0vvny0u/casino_migration_backup"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR"
cd "/home/i0vvny0u/Applications/opensource-casino-v10"

echo "📁 Backing up application files..."
tar -czf "$BACKUP_DIR/casino_files_$TIMESTAMP.tar.gz" \
    --exclude="casino/vendor" \
    --exclude="casino/node_modules" \
    --exclude="casino/storage/logs" \
    --exclude="casino/storage/framework/cache" \
    --exclude="casino/storage/framework/sessions" \
    --exclude="casino/storage/framework/views" \
    ./

echo "🗄️ Backing up database..."
mysqldump -u casino_user -p'!nt0Th3D4rk' laravel > "$BACKUP_DIR/casino_database_$TIMESTAMP.sql"

echo "🔑 Backing up SSL certificates..."
cp -r casino/PTWebSocket/ssl "$BACKUP_DIR/ssl_certs_$TIMESTAMP"

echo "📋 Creating setup instructions..."
cat > "$BACKUP_DIR/migration_instructions.txt" << 'EOF'
DigitalOcean Migration Instructions
==================================

1. Upload casino_files_*.tar.gz to your DigitalOcean droplet
2. Upload casino_database_*.sql to your droplet
3. Upload ssl_certs_* directory to your droplet

Files to transfer:
- Application: casino_files_*.tar.gz
- Database: casino_database_*.sql  
- SSL Certs: ssl_certs_*

Your current configuration:
- Domain: cashout.realconnect.online
- Database: laravel
- User: casino_user
- Password: !nt0Th3D4rk
- APP_KEY: base64:urJxcFCpdCPcmor/rKREFx/D8kkmY4K71fSaTgatOCM=
EOF

echo ""
echo "✅ Backup completed!"
echo "📂 Files saved to: $BACKUP_DIR"
echo ""
ls -lah "$BACKUP_DIR/"
echo ""
echo "🚀 Ready for DigitalOcean migration!"