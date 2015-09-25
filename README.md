# vscode-language-ooc
Adds ooc support to Visual Studio Code

## Requirements
* Visual Studio Code, v0.8.0

## Install on Linux
Open up a terminal, then follow the steps outlined below.
* ```cd``` into the directory where you would like this repo to be created.
* ```git clone https://github.com/cogneco/vs.language.ooc```

Now that you have cloned the repo, let's create a symbolic link to let VS Code know that a new
language support has been installed. Currently, the best of doing this is to create a symbolic link.
This way, whenever ```vs.language.ooc``` is updated, VS Code will automatically read in the changes when
it restarts.

Let's assume that you have VS Code installed at ```/opt/vscode/``` and that the location of  ```vs.language.ooc```
is ```~/versioned/vs.language.ooc```

* ```cd /opt/vscode/resources/app/plugins```
* ```sudo ln -s ~/versioned/vs.language.ooc/ .```
* Start or restart VS Code and open up any .ooc code file to verify that the syntax highlighting works.
