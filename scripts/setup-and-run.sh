#!/bin/sh

echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Running tests..."
npm test

echo "Starting the development server..."
npm run dev
