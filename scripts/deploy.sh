#!/bin/bash
set -e

SERVER_USER="youruser"
SERVER_IP="your.server.ip.or.domain"
SSH_KEY="~/.ssh/id_rsa"

echo "Syncing website files..."
rsync -avz -e "ssh -o StrictHostKeyChecking=no -i $SSH_KEY" website/ ${SERVER_USER}@${SERVER_IP}:/opt/lampp/htdocs/

echo "Restarting XAMPP/Apache..."
ssh -o StrictHostKeyChecking=no -i $SSH_KEY ${SERVER_USER}@${SERVER_IP} "sudo systemctl restart lampp"

echo "Deployment complete!"
