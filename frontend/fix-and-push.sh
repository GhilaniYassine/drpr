#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Enhanced Git Push Script${NC}"
echo "============================"

# Check git configuration first
echo -e "${YELLOW}🔍 Checking git configuration...${NC}"
git_name=$(git config user.name)
git_email=$(git config user.email)

if [ -z "$git_name" ] || [ -z "$git_email" ]; then
    echo -e "${RED}❌ Git user not configured properly${NC}"
    echo "Current name: $git_name"
    echo "Current email: $git_email"
    
    read -p "Enter your GitHub username: " github_username
    read -p "Enter your GitHub email: " github_email
    
    git config --global user.name "$github_username"
    git config --global user.email "$github_email"
    echo -e "${GREEN}✅ Git configuration updated${NC}"
else
    echo -e "${GREEN}✅ Git configured as: $git_name <$git_email>${NC}"
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not a git repository${NC}"
    exit 1
fi

# Show current status
echo -e "${YELLOW}📋 Current git status:${NC}"
git status --porcelain

# Ask for commit message
echo ""
read -p "📝 Enter commit message: " commit_message

if [ -z "$commit_message" ]; then
    commit_message="Auto commit $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Add all changes
echo -e "${YELLOW}📦 Adding all changes...${NC}"
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
    exit 0
fi

# Commit with proper author
echo -e "${YELLOW}💾 Committing changes...${NC}"
if git commit -m "$commit_message" --author="$git_name <$git_email>"; then
    echo -e "${GREEN}✅ Commit successful${NC}"
else
    echo -e "${RED}❌ Commit failed${NC}"
    exit 1
fi

# Push to GitHub
echo -e "${YELLOW}🚀 Pushing to GitHub...${NC}"
current_branch=$(git branch --show-current)
echo "Pushing to branch: $current_branch"

if git push origin $current_branch; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo -e "${BLUE}📊 Your commit should appear on GitHub shortly${NC}"
    echo "If it doesn't appear on your profile:"
    echo "1. Check if the repository is public"
    echo "2. Verify your email matches your GitHub account"
    echo "3. Wait a few minutes for GitHub to update"
else
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 All done!${NC}"
