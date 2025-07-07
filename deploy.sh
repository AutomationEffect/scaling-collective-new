#!/bin/bash

# Scaling Collective Deployment Script
# This script helps automate the deployment process

echo "🚀 Scaling Collective Deployment Helper"
echo "======================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized. Please run 'git init' first."
    exit 1
fi

echo "✅ Project structure verified"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check dependencies
echo "🔍 Checking dependencies..."

if ! command_exists git; then
    echo "❌ Git is not installed"
    exit 1
fi

if ! command_exists node; then
    echo "❌ Node.js is not installed"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ All dependencies found"

# Get GitHub username
echo ""
echo "📝 GitHub Configuration"
echo "======================="
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Repository name
REPO_NAME="scaling-collective-redesign"
GITHUB_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo "📦 Repository URL: $GITHUB_URL"

# Check if remote already exists
if git remote get-url origin >/dev/null 2>&1; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "$GITHUB_URL"
else
    echo "🔗 Adding GitHub remote..."
    git remote add origin "$GITHUB_URL"
fi

# Build the project
echo ""
echo "🏗️  Building project..."
echo "====================="

if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Check git status
echo ""
echo "📊 Git Status"
echo "============="
git status --porcelain

# Commit any changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Uncommitted changes found. Committing..."
    git add .
    git commit -m "Deploy: Updated website for deployment $(date)"
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo "======================"
echo "⚠️  You will be prompted for your GitHub credentials:"
echo "   Username: $GITHUB_USERNAME"
echo "   Password: Use your Personal Access Token (NOT your GitHub password)"
echo ""
echo "🔐 If you haven't created a Personal Access Token yet:"
echo "   1. Go to: https://github.com/settings/tokens"
echo "   2. Generate new token with 'repo' permissions"
echo "   3. Use that token as your password"
echo ""

read -p "Press Enter to continue with GitHub push..."

if git push -u origin main; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials."
    echo "💡 Make sure you're using a Personal Access Token as your password."
    exit 1
fi

# Vercel deployment instructions
echo ""
echo "🌐 Vercel Deployment"
echo "==================="
echo "Your code is now on GitHub! Next steps for Vercel:"
echo ""
echo "1. Go to: https://vercel.com/dashboard"
echo "2. Click 'New Project'"
echo "3. Import your repository: $GITHUB_USERNAME/$REPO_NAME"
echo "4. Vercel will auto-detect Vite settings"
echo "5. Click 'Deploy'"
echo ""
echo "🎉 Your site will be live in 2-3 minutes!"
echo ""
echo "📋 Quick Links:"
echo "   GitHub Repo: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "   Vercel Dashboard: https://vercel.com/dashboard"
echo "   Deployment Guide: ./DEPLOYMENT.md"
echo ""
echo "💪 Your King Kong-inspired website is ready to dominate!"

# Optional: Open URLs
if command_exists open; then
    read -p "Open GitHub repository in browser? (y/n): " OPEN_GITHUB
    if [ "$OPEN_GITHUB" = "y" ] || [ "$OPEN_GITHUB" = "Y" ]; then
        open "https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    fi
    
    read -p "Open Vercel dashboard in browser? (y/n): " OPEN_VERCEL
    if [ "$OPEN_VERCEL" = "y" ] || [ "$OPEN_VERCEL" = "Y" ]; then
        open "https://vercel.com/dashboard"
    fi
fi

echo ""
echo "🚀 Deployment helper completed successfully!"

