#!/bin/bash

echo "Setting up firewall rules for ports 80 and 443..."

# UFW Method (Ubuntu/Debian)
echo "Configuring UFW firewall..."
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow ssh
sudo ufw --force enable

# iptables Method (alternative)
echo "Configuring iptables rules..."
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Save iptables rules
sudo iptables-save > /etc/iptables/rules.v4 2>/dev/null || echo "iptables-persistent not installed"

echo "Firewall configuration completed!"
echo "Ports 80 and 443 are now open."

# Check listening ports
echo "Current listening ports:"
ss -tlnp | grep -E ':80|:443'