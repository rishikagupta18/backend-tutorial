#!/usr/bin/env bash
# Run from inside the backend-tutorial folder.
set -e
git init -b main 2>/dev/null || true
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/rishikagupta18/backend-tutorial.git
git add .
git commit -m "Add Express + MongoDB CRUD API with Postman collection"
git pull origin main --allow-unrelated-histories --no-edit 2>/dev/null || true
git push -u origin main
