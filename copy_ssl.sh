#!/bin/bash

# Domain configuration for casino
DOMAIN="cashout.realconnect.online"
SSL_DIR="/home/i0vvny0u/Applications/opensource-casino-v10/casino/PTWebSocket/ssl"

echo "Copying Let's Encrypt certificates for $DOMAIN to casino SSL directory..."

# Copy certificate files
sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem $SSL_DIR/crt.crt
sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem $SSL_DIR/key.key
sudo cp /etc/letsencrypt/live/$DOMAIN/chain.pem $SSL_DIR/intermediate.pem

# Set proper permissions
sudo chown $(whoami):$(whoami) $SSL_DIR/*.crt $SSL_DIR/*.key $SSL_DIR/*.pem
sudo chmod 600 $SSL_DIR/key.key
sudo chmod 644 $SSL_DIR/crt.crt $SSL_DIR/intermediate.pem

echo "SSL certificates for $DOMAIN copied successfully!"
echo "Files copied to: $SSL_DIR"