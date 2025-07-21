#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Git Push Script${NC}"
echo "=========================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not a git repository${NC}"
    exit 1
fi

# Check git status
echo -e "${YELLOW}📋 Current git status:${NC}"
git status --porcelain

# Ask for commit message
echo ""
read -p "📝 Enter commit message: " commit_message

# If no message provided, use default
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

# Commit changes
echo -e "${YELLOW}💾 Committing changes...${NC}"
if git commit -m "$commit_message"; then
    echo -e "${GREEN}✅ Commit successful${NC}"
else
    echo -e "${RED}❌ Commit failed${NC}"
    exit 1
fi

# Push to GitHub
echo -e "${YELLOW}🚀 Pushing to GitHub...${NC}"
if git push; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
else
    echo -e "${RED}❌ Push failed${NC}"
    echo -e "${YELLOW}💡 Make sure you have proper access rights and the remote is set up correctly${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 All done!${NC}"
