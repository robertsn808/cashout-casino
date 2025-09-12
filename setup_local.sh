#!/bin/bash

echo "Setting up local Apache configuration for casino..."

# Install Apache virtual host
sudo cp casino-vhost.conf /etc/apache2/sites-available/
sudo a2ensite casino-vhost.conf
sudo a2enmod ssl rewrite
sudo a2dissite 000-default

# Restart Apache
sudo systemctl reload apache2

echo "Testing local configuration..."

# Add local DNS entry for testing
echo "127.0.0.1 cashout.realconnect.online" | sudo tee -a /etc/hosts

echo "Setup complete!"
echo "Test URL: http://cashout.realconnect.online (locally)"
echo ""
echo "To make it accessible externally, consider:"
echo "1. Cloud hosting (DigitalOcean, Vultr, etc.)"
echo "2. Cloudflare Tunnel (free)"
echo "3. Router port forwarding (if possible)"