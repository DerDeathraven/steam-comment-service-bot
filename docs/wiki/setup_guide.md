# Setup Guide
[⬅️ Go back to wiki home](./#readme)

&nbsp;

This page will walk you through downloading, setting up and configuring the bot!  
This process usually takes around 5-10 minutes.  

If you would like to rather follow a video than these written instructions, click: <a href="https://youtu.be/8J78rC9Z28U" target="_blank"><img src="https://img.shields.io/badge/YouTube-Tutorial-red"></a>  
Every headline on this page also contains a YouTube badge which will take you to the corresponding video part when clicked!  

**Disclaimer!**  
> I, 3urobeat (the developer), am not responsible and cannot be held liable for any action the operator/user of this bot uses it for.  
> By using this application you agree to not misuse it!  

&nbsp;

## Table Of Contents
- [Download](#download-)
- [Setup & Configuration](#setup--configuration-)
  - [Accounts](#accounts)
  - [Config](#config-)
  - [Custom Quotes](#custom-quotes)
- [Usage](#usage-)

&nbsp;

## Download: <a href="https://youtu.be/8J78rC9Z28U?t=45" target="_blank"><img align="right" src="https://img.shields.io/badge/YouTube-Tutorial%20section-red"></a>

Click here: [Download](https://github.com/3urobeat/steam-comment-service-bot/archive/master.zip)  
Extract the zip and open the `steam-comment-service-bot` folder.  
  
You need to have at least node.js version 14.15.0 installed: [Download](https://nodejs.org)  
To get your version number type `node --version` in your console or terminal.  
If you need a tutorial for this specific node part, [click here.](https://youtu.be/8J78rC9Z28U?t=60)  

&nbsp;

## Setup & Configuration: <a href="https://youtu.be/8J78rC9Z28U?t=125" target="_blank"><img align="right" src="https://img.shields.io/badge/YouTube-Tutorial%20section-red"></a>
#### Accounts:
Open the `accounts.txt` file and provide your accounts in the `username:password:shared_secret` format, one account per line.  
If you don't want to use a shared_secret just leave it out and only provide the account in the `username:password` format.  
  
Please make sure you know about limited/unlimited accounts. Your accounts also need to have E-Mail Steam Guard active.  
You can read a detailed explanation [here in the wiki](./steam_limitations.md).
  
<details>
  <summary>Another, optional method (not recommended anymore):</summary>
  
  If you'd rather like to provide your accounts in an object notation (JSON), then empty the accounts.txt file and create a `logininfo.json` file.  
  Fill out the usernames and passwords of each bot account you want to use, following this object notation format:  
  ```
  {
    "bot0": ["username0", "password0", "shared_secret"],
    "bot1": ["username1", "password1", "shared_secret"],
    "bot2": ["username2", "password2", "shared_secret"]
  }
  ```
  If you have a shared_secret then you can add it there too, otherwise just leave the brackets empty.  
  You can add more accounts by extending the list ("bot4": ["username4", "password4", "shared_secret"], etc...).  
    
  Make sure to **NOT** forget a comma after each line, **ONLY** the last line **MUST NOT** have a comma! (ignoring this will cause errors!)  
</details>  
  
&nbsp;

#### Config: <a href="https://youtu.be/8J78rC9Z28U?t=181" target="_blank"><img align="right" src="https://img.shields.io/badge/YouTube-Tutorial%20section-red"></a> 
Open `config.json` with a text editor.  
You need to provide the link to your steam profile at "owner" and the link or your steam64id of your profile at "ownerid", following the existing template.  
Make sure to put your link and or ID inside the brackets, just like the template shows.  
  
Set an amount of comments a normal user and the amount an owner is allowed to request from the bot.  
This largely depends on how many accounts you use, the commentdelay set and if you use proxies.  
I would recommend max 2 comments per account if you use no proxies and default settings, so if you use 5 accounts, try setting maxComments and maxOwnerComments to 10.  
  
For now you can ignore all the other settings, however if you'd like to customize more values later on then check out the [complete config documentation](./config_doc.md).  

&nbsp;

<a id="custom-quotes"></a>
<details>
  <summary><strong>Custom Quotes:</strong> (optional)</summary>

  The bot comes with a default set of quotes which are randomly selected for each comment.  
  If you'd like to specify your own selection of quotes you can do so:  
    
  Open `quotes.txt` with a text editor. You can add as many quotes as you want, line by line.  
  Make sure to not leave a line empty as it can otherwise lead to errors.   
  The bot will choose a random quote for **every** comment. If you only provide one quote, the bot will only use that one for all comments.  

  You can also use comments that go over multiple lines (ASCII-Art, etc.).  
  To do that, just put a `\n` at the end of each line of the multi-line comment. Then move the next line of your comment behind the `\n` so that your multi line comment is **only one line** in your quotes.txt, with each line of the actual comment seperated by a `\n`.  

  > Example: `My cool comment: \nline1\nline2\nline3`  
</details>
  
&nbsp;

The bot is now ready! Do not modify any of the other files.  

&nbsp;

## Usage: <a href="https://youtu.be/8J78rC9Z28U?t=239" target="_blank"><img align="right" src="https://img.shields.io/badge/YouTube-Tutorial%20section-red"></a>
Open up a power shell/terminal in this folder and type `node start.js`.  

> **Important Disclaimer:** Do not start the bot with a tool that restarts on changes (like nodemon etc)! Only use normal `node`.  

Head over to your Steam client, add the main bot (the first account in your accounts.txt) as friend and send him the message `!help`.  
It should respond with a list of commands available to you.  

To request a comment, simply type `!comment 1`!  
Click on the <a href="https://youtu.be/8J78rC9Z28U?t=239" target="_blank"><img src="https://img.shields.io/badge/YouTube-Tutorial%20section-red"></a> badge to see a demo.  

You can see all commands and their usage [here in the wiki](./commands_doc.md).  

&nbsp;

## That's it! 🎉
Congrats, you've successfully set up the bot!  
Head back to the README by [clicking here](../..#setup--config-guide)!