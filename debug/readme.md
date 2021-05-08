# These files are for debugging SvelteKit and Vite together.

### newkit.sh

This script:
 
- Clones vite-plugin-svelte, vite and kit.  
- Removes the .git folder, since you won't be committing back to Github.
- Sets up the dependencies to these cloned versions
- Builds the cloned versions
- Sets up a launch.json for debugging (using kit.vscode for kit, vite.vscode for vite)
- This assumes that your kit project is named 'testing-kit' and is in the ~/Projects/testing-kit folder.

As is, it assumes that kit.vscode and vite.vscode are in the ~/shell-commands directory.  Yep, those aren't shell commands -- I'm just lazy.

### kit.vscode

This is the launch.json file for kit

### vite.vscode

This is the launch.json file for vite

### shelly.sh

Just a script I put in my ~/.local directory.  It runs shell scripts from my ~/shell-commands directory.  I should add support for parameters :)

So, from a command line, I just type in "shelly newkit" and it prepares my testing environment.





