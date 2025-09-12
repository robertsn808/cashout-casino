#!/bin/bash

# Namecheap SSL Certificate Installation Script
# Domain: cashout.realconnect.online

SSL_DIR="/home/i0vvny0u/Applications/opensource-casino-v10/casino/PTWebSocket/ssl"
TEMP_DIR="/home/i0vvny0u/Applications/opensource-casino-v10/ssl_temp"

echo "Installing Namecheap SSL Certificate for cashout.realconnect.online"
echo "=================================================="

# Check if certificate files exist
if [ ! -f "$TEMP_DIR/cashout_realconnect_online.crt" ]; then
    echo "ERROR: Certificate file not found!"
    echo "Please save your certificate from Namecheap as: $TEMP_DIR/cashout_realconnect_online.crt"
    exit 1
fi

if [ ! -f "$TEMP_DIR/cashout_realconnect_online.ca-bundle" ]; then
    echo "ERROR: CA Bundle file not found!"
    echo "Please save your CA bundle from Namecheap as: $TEMP_DIR/cashout_realconnect_online.ca-bundle"
    exit 1
fi

# Copy private key (already generated)
echo "Copying private key..."
cp "$TEMP_DIR/cashout.realconnect.online.key" "$SSL_DIR/key.key"

# Copy certificate
echo "Copying SSL certificate..."
cp "$TEMP_DIR/cashout_realconnect_online.crt" "$SSL_DIR/crt.crt"

# Copy CA bundle (intermediate certificates)
echo "Copying CA bundle..."
cp "$TEMP_DIR/cashout_realconnect_online.ca-bundle" "$SSL_DIR/intermediate.pem"

# Set proper permissions
chmod 600 "$SSL_DIR/key.key"
chmod 644 "$SSL_DIR/crt.crt"
chmod 644 "$SSL_DIR/intermediate.pem"

echo "SSL Certificate installation completed!"
echo "Files installed to: $SSL_DIR"
echo ""
echo "Certificate files:"
echo "- Private Key: $SSL_DIR/key.key"
echo "- Certificate: $SSL_DIR/crt.crt" 
echo "- CA Bundle: $SSL_DIR/intermediate.pem"
echo ""
echo "You can now configure your web server to use these certificates."