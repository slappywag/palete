Project Template
================
This is a project template that we can use at to start a project rather than going through the hassle of starting from scratch each time. It should be updated over time as we adapt and change the way we do things.

Usage
-----
1. Run npm install to install the latest version of our Gurt project builder.
2. Update bower.json to point at the repository with the projects global code.
3. Now you can run bower install.
4. The code/base directory is a symlink to the projects global bower component that got installed to the code/libs directory. Update the symlink using:
```bash
rm -rf code/base
ln -s code/libs/<project-global> code/base
```
5. Update the project location in rsyncToLsciLinux.sh script.
6. Now you run ```npm run serve``` and edit the rest of the app as you would normally.
7. Lastly run ```rm -rf .git``` to remove the templates git files so you can start fresh.