# Product Stock Monitor
Monitor product changes on online storefronts to be the first to know when something new is released!

## Description

This is a website product stock monitoring program that will notify users whenever new products are added to a websites storefront. Once there is a change in the inital products, users will receive a discord webhook notification which will include all of the new products name, price, image and product url. This is a very useful tool when it comes to making a profit off of highy desired items with a limited stock, as users will be one of the first to know, especially if whatever is released comes at a random time.

## Getting Started

### Dependencies

* axios@1.5.0
* cheerio@1.0.0-rc.12
* discord.js@13.12.0

### Installing

* Downlaod the project folder, update the required changes and run the below command
    ```
    node vanBot.js
    ```

### Executing program

* In the source code, change the login cookie if needed for a website with login token
* Create a discord webhook within a server in which you have full access to
* In the source code, add the discord webhook ID and Token
* Change the website url to the website that you want to monitor
* Feel free to change the montior delay (in MS) if you want a slower or faster refresh rate
```
code blocks for commands
```

## Help

It is highly recommended you don't use the a refresh delay of under 5 MS for more than 5 minutes to avoid IP bans (unless using proxies which is currently not supported)

## Authors

Christian Allbright  

## Version History

* 1.1
    * Added more webhook features including product image and price
* 1.0
    * Initial Release

## License

This project is licensed under the Christian Allbright License

## Acknowledgments

Thank you to everyone who has used this and supporting my endeavors as a progammer!
