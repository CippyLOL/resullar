# Server Side

Using nodejs



If you encounter a similar problem "cannot be loaded because running scripts is disabled on this system." Follow the following instructions.

####Solution 1
go to File -> Preferences -> Settings -> Extensions -> Scroll down and find "Edit in settings.json". 
# Add the following code in settings.json
"terminal.integrated.shellArgs.windows": ["-ExecutionPolicy", "Bypass"]

# Solution 2
in vscode you will have to create a shell profile with these args by adding below in settings.json (ctrl + shift + p and type "settings.json")
# Add the following code in settings.json
"terminal.integrated.profiles.windows": {
  "PowerShell": {
    "source": "PowerShell",
    "icon": "terminal-powershell",
    "args": ["-ExecutionPolicy", "Bypass"]
  }
},
"terminal.integrated.defaultProfile.windows": "PowerShell",


# Do not forget to restart the visual studio code
