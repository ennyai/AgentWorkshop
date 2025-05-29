#!/bin/bash

echo "🔍 Debug Build Script for Content Automation Webinar App"
echo "==========================================================="

echo "📦 Cleaning up..."
rm -rf node_modules package-lock.json dist

echo "🧹 Clearing npm cache..."
npm cache clean --force

echo "📥 Installing dependencies..."
npm ci --include=optional

echo "🔍 Checking Rollup installation..."
if npm ls rollup; then
    echo "✅ Rollup found"
else
    echo "❌ Rollup not found - attempting to install manually"
    npm install rollup --save-dev
fi

echo "🏗️ Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the 'dist' directory"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi 