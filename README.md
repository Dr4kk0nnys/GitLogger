# Git Logger for terminal

This version of git logger is made using typescript.  

## Dependencies
* (linux) sudo apt install libxtst-dev libpng++-dev (dependencies to robotjs)
* RobotJS [yarn add robotjs](https://robotjs.io)
* Typescript ( duh )

## How it's going to work
It expects you already executed the 'git push' command ( oh my zsh alias ).  
It then types the username passed inside the `emailOrUsername` variable, and then types the password ( encrypted in the `encryptedPassword` variable ).  

## How to create the 'alias'
I personally use [oh-my-zsh](https://ohmyz.sh/).  
You can look into other terminals ( you can do the same thing with bash btw ).  
In my case, I add the following line to my .zshrc file
`alias push="git push -u origin master | node ~/.git_logger/main.js"`.  
So every time I type 'push' it does the following:
1. Type 'git push -u origin master'
1. In another process ( without interrupting the git push ) it types my username, press enter, types my password, press enter. Finishes the process.  