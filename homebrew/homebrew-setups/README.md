# Overview
This is a basic example of putting multiple shell scripts in /usr/local/bin
via homebrew.

# What it does

To install from source, create a tarball of the source code and then run the following
command.

```
brew install --build-from-source ./setups.rb
```

The above command will put every script inside the bin directory as an excutable
under /usr/local/bin

# What did I learn ?

- Homebrew docs suck!
- You create a formula using
  ```
  brew create
  ```
- You add a tap using
  ```
  brew tap foo/bar <url>
  ```
  > the url in the above command, can be file:// if installing from local directory

- Uninstall a tap using
  ```
  brew untap foo/bar
  ```
- Uninstall formula
  ```
  brew uninstall
  ```
