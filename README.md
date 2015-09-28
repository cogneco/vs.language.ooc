# vscode-language-ooc
Adds ooc support to Visual Studio Code

## Requirements
* Visual Studio Code, v0.8.0

## Install on Linux
Open up a terminal, then follow the steps outlined below.
* ```cd``` into the directory where you would like this repo to be created.
* ```git clone https://github.com/cogneco/vs.language.ooc```

Now that you have cloned the repo, we need to tell VSCode that it exists. A good way of doing this is
to create a symbolic link. This way, whenever ```vs.language.ooc``` is updated, VSCode will automatically
read in the changes when it restarts.

Let's assume that you have VSCode installed at ```/opt/vscode/``` and that the location of  ```vs.language.ooc```
is ```~/versioned/vs.language.ooc```

* ```cd /opt/vscode/resources/app/plugins```
* ```sudo ln -s ~/versioned/vs.language.ooc/ .```

Now verify that everything went ok, issue the command ```ln -la```, and you should see something like
```vs.language.ooc -> /home/<YOUR-USERNAME>/versioned/vs.language.ooc```.

* Start or restart VSCode and open up any .ooc code file to verify that it recognizes the language.
