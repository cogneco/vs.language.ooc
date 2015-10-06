# vscode-language-ooc
Adds ooc support to Visual Studio Code

## Requirements
* [Visual Studio Code, v0.8.0](https://code.visualstudio.com/Download)

## Install on Linux
Open up a terminal, then follow the steps outlined below.
* ```cd``` into the directory where you would like this repo to be created.
* ```git clone https://github.com/cogneco/vs.language.ooc```

Now that you have cloned the repo, we need to tell VS Code that it exists. A good way of doing this is
to create a symbolic link. This way, whenever ```vs.language.ooc``` is updated, VS Code will automatically
read in the changes when it restarts.

Let's assume that you have VS Code installed at ```/opt/vscode/```
and that the location of  ```vs.language.ooc```
is ```~/versioned/vs.language.ooc```

* ```cd /opt/vscode/resources/app/plugins```
* ```sudo ln -s ~/versioned/vs.language.ooc/ .```

If you installed VS Code to a location that is not in your PATH variable (which is probably the case if you installed it to the path specified above),
you can either add that location to your PATH variable, or better, create a link to VS Code in one of the standard system directories.
We'll do the latter:

* ```sudo ln -s /opt/vscode/Code /usr/local/bin/vscode```

Now you can start VS Code by simply issuing the command ```vscode``` in your terminal.

* Start or restart VS Code and open up any .ooc code file to verify that it recognizes the language.
