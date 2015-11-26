# vscode-language-ooc
Adds ooc support to Visual Studio Code

## Requirements
* [Visual Studio Code, >= v0.10.1](https://code.visualstudio.com/Download)

## Install on Linux
Open up a terminal, then follow the steps outlined below.
* ```cd``` into the directory where you would like this repo to be created.
* ```git clone https://github.com/cogneco/vs.language.ooc```

Now that you have cloned the repo, we need to tell VS Code that it exists. A good way of doing this is
to create a symbolic link. This way, whenever ```vs.language.ooc``` is updated, VS Code will automatically
read in the changes when it restarts.

Since VS Code 0.9.1, all your custom extensions are saved in your home directory,
namely in ```~/.vscode/extensions```

Issue the following commands in the terminal:
* ```cd ~/.vscode/extensions```
* ```ln -s path-to-vs.language.ooc ooc```

If you have installed VS Code to a location that is not in your PATH variable, you can either add that location
to your PATH variable, or better, create a link to VS Code in one of the standard system directories.
We'll do the latter:

* ```sudo ln -s path-to-vs-code/Code /usr/local/bin/vscode```

Now you can start VS Code by simply issuing the command ```vscode``` in your terminal.

* Start or restart VS Code and open up any .ooc code file to verify that it recognizes the language.

## Updating
* If you cloned the ```vs.language.ooc``` repo, you can simply go to your ```vs.language.ooc``` directory and
do a ```git pull```.
* If you downloaded the repo as an archive or otherwise, you can download the archive and simply overwrite the old one.
* Restart VS Code to allow changes to take effect.
