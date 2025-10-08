#!/bin/bash

# GitHub Repository Setup Script for Pamilla Website
# Run this script after creating the repository on GitHub

echo "🚀 Setting up GitHub repository for Pamilla Website..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the Pamilla Website project directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

echo "✅ Git repository found"

# Check current status
echo "📋 Current git status:"
git status

echo ""
echo "🔗 To connect to your GitHub repository, run these commands:"
echo ""
echo "1. Add remote origin (replace YOUR_USERNAME with your GitHub username):"
echo "   git remote add origin https://github.com/YOUR_USERNAME/pamilla-website.git"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Verify the connection:"
echo "   git remote -v"
echo ""

# Check if remote is already configured
if git remote get-url origin 2>/dev/null; then
    echo "✅ Remote origin is already configured:"
    git remote -v
    echo ""
    echo "To push your code:"
    echo "git push -u origin main"
else
    echo "⚠️  No remote origin configured yet"
    echo "Please run the commands above to connect to GitHub"
fi

echo ""
echo "📖 After pushing to GitHub, you can:"
echo "   - Share the repository URL with the owner"
echo "   - Deploy to Netlify/Vercel directly from GitHub"
echo "   - Collaborate on future updates"
echo ""
echo "🎉 Your Pamilla Website is ready for GitHub!"
