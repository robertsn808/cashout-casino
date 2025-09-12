#!/bin/bash

# Namecheap SSL HTTP Validation Setup Script
VALIDATION_DIR="/home/i0vvny0u/Applications/opensource-casino-v10/.well-known/pki-validation"
VALIDATION_FILE="1B85305154B6039B7D0E53248CFA636A.txt"

echo "Namecheap SSL HTTP Validation Setup"
echo "===================================="
echo ""

# Check if validation content is provided
if [ -z "$1" ]; then
    echo "Usage: $0 'VALIDATION_CONTENT_FROM_NAMECHEAP'"
    echo ""
    echo "Steps to get validation content:"
    echo "1. Go to your Namecheap SSL dashboard"
    echo "2. Click 'Edit methods' or 'Download' for HTTP validation"
    echo "3. Copy the validation content and run:"
    echo "   $0 'paste_validation_content_here'"
    echo ""
    echo "Current validation file location:"
    echo "$VALIDATION_DIR/$VALIDATION_FILE"
    exit 1
fi

# Write validation content to file
echo "$1" > "$VALIDATION_DIR/$VALIDATION_FILE"

echo "✅ Validation file created successfully!"
echo "📁 File location: $VALIDATION_DIR/$VALIDATION_FILE"
echo ""
echo "🔗 Test URLs (should return the validation content):"
echo "   http://cashout.realconnect.online/.well-known/pki-validation/$VALIDATION_FILE"
echo "   http://www.cashout.realconnect.online/.well-known/pki-validation/$VALIDATION_FILE"
echo ""
echo "📝 File contents:"
cat "$VALIDATION_DIR/$VALIDATION_FILE"
echo ""
echo ""
echo "🚀 Next steps:"
echo "1. Make sure your domain points to this server"
echo "2. Ensure Apache/Nginx is serving files from this directory"
echo "3. Test the URLs above in your browser"
echo "4. Complete validation in Namecheap dashboard"