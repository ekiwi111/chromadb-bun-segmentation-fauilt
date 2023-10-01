#!/bin/bash
git submodule update
(cd chroma && docker-compose up -d --build)
bun install
(cd node_modules/sharp && bun install)
