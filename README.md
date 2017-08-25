# Summary
This is a source code for the https://vmware.github.io website.
It is created using Angular, which means it needs to be compiled into a HTML file structure ready to be served as a website. 
We work on the source code on the gh-pages-source branch, then compile and finally deploy to the master branch where it is auto-served from by GitHub at https://vmware.github.io
The [Steps](#steps) section below describes the above workflow in more detail.


# Required tools 
* Angular Client - https://cli.angular.io/
* Angular Client GH Pages.
Install with `npm install angular-cli-ghpages` (if you're curious, find out more at: https://github.com/angular-buch/angular-cli-ghpages).
 
 
# Steps
1. Make your changes to the website content (the site is created using Angular 4, so knowledge of that framework will help, however the site is also very simple so there is not that much to it).
2. Compile the source code into a set of files ready to be served as a website: `ng build --prod --base-href "https://vmware.github.io"`
3. Deploy the built code to the master branch, so that it will be automatically served by GitHub at: https://vmware.github.io
`angular-cli-ghpages --branch master`
    