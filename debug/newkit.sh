#!/bin/bash

cd ~/Projects
rm -rf kit
rm -rf vite
rm -rf vite-plugin-svelte

cd ~/Projects
git clone https://github.com/sveltejs/vite-plugin-svelte vite-plugin-svelte
cd vite-plugin-svelte
rm -rf .git
pnpm i
pnpm build

cd ~/Projects
git clone https://github.com/vitejs/vite vite
cd vite
rm -rf .git
mkdir .vscode
cp ~/shell-commands/vite.vscode ./.vscode/launch.json
yarn install --skip-builds
yarn run build-vite
# cd ./packages/vite
# tsc --p src/node
# tsc --p src/client

cd ~/Projects
git clone https://github.com/sveltejs/kit kit
cd ~/Projects/kit
rm -rf .git
// mkdir .vscode
cp ~/shell-commands/kit.vscode ./.vscode/launch.json
rm pnpm-lock.yaml
cd ~/Projects/kit/packages/kit
pnpm remove vite @sveltejs/vite-plugin-svelte
pnpm add ~/Projects/vite/packages/vite -D --save-peer
pnpm add ~/Projects/vite-plugin-svelte/packages/vite-plugin-svelte
cd ~/Projects/kit/packages/create-svelte/templates/default
pnpm remove vite 
pnpm add ~/Projects/vite/packages/vite -D 
cd ~/Projects/kit
pnpm i
pnpm build

cd ~/Projects/testing-kit
rm -rf pnpm-lock.yaml
rm -rf package-lock.json
rm -rf node-modules
pnpm remove @sveltejs/kit vite
pnpm add ~/Projects/vite/packages/vite -D
pnpm add ~/Projects/kit/packages/kit -D
pnpm i




# cd $HOME/Projects/kit-clone/packages/kit
# code . 
# code --add ~/Projects/vite-clone/packages/vite ~/Projects/vite-plugin-svelte-clone

