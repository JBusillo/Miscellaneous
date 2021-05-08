#These files are for debugging SvelteKit and Vite together.

### newkit.sh

This script:
 
- Clones vite-plugin-svelte, vite and kit.  
- Removes the .git folder, since you won't be committing back to Github.
- Sets up the dependencies to these cloned versions
- Builds the cloned versions
- Sets up a launch.json for debugging (using kit.vscode for kit, vite.vscode for vite)

### kit.vscode

This is the launch.json file for kit

### vite.vscode

This is the launch.json file for vite





