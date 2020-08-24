# node.js CommandLineTool

 A node.js application which can be used to list all the files and folders of the any directory. The files are displayed in a different color to differentiate them from the folder.
# Node.js modules used
 Filesystem,
 Path
# External packages used
 npm Chalk 
 
 
 Running Node.js program as an Executable means we do not have to go to the program directory, from anywhere in the terminal, we can execute our program with a specific self-registered word.
There are four steps to follow to run a node.js program as Executable.

# Add bin section in package.json
# Change index.js file permission (not for windows operating system).
# Add comment to index.js file to allow it to be treated like an executable.
# Link the project.


Adding bin section in package.json file:

"bin" : {
    "execute" : "index.js"
}
Add any resanable word in place of ‘execute’.

Change File permission
chmod +x index.js

Add comment to index.js

#!/usr/bin/env node
Command to link projects

npm link
