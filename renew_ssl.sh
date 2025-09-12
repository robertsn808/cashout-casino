#!/bin/bash

# Auto-renewal script for Let's Encrypt with casino SSL copy
DOMAIN="cashout.realconnect.online"
SSL_DIR="/home/i0vvny0u/Applications/opensource-casino-v10/casino/PTWebSocket/ssl"

echo "Renewing Let's Encrypt certificates for $DOMAIN..."

# Renew certificates
sudo certbot renew --quiet

# Copy renewed certificates
sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem $SSL_DIR/crt.crt
sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem $SSL_DIR/key.key  
sudo cp /etc/letsencrypt/live/$DOMAIN/chain.pem $SSL_DIR/intermediate.pem

# Set permissions
sudo chown $(whoami):$(whoami) $SSL_DIR/*.crt $SSL_DIR/*.key $SSL_DIR/*.pem
sudo chmod 600 $SSL_DIR/key.key
sudo chmod 644 $SSL_DIR/crt.crt $SSL_DIR/intermediate.pem

# Restart web server
sudo systemctl reload apache2 || sudo systemctl reload nginx

echo "SSL renewal for $DOMAIN completed!"