#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" == "master" ]]; then
  cp node-express-server/.env.uat node-express-server/.env
else
  cp node-express-server/.env.dev node-express-server/.env
fi

echo "✅ Environment set for branch: $BRANCH"
