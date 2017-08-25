Steps to make changes to this GH page:
1. Make your changes in the source code.
2. Build the code: `ng build --prod --base-href "https://vmware.github.io"`
3. Deploy the built code to the master branch, so that it will be automatically served by GitHub at: https://vmware.github.io
`angular-cli-ghpages --branch master`
For the last step you will need the angular-cli-ghpages tool.
Install it with: `npm install angular-cli-ghpages` (if you're curious, find out more at: https://github.com/angular-buch/angular-cli-ghpages).

NOTE: Because the site is written in Angular, we develop it on the gh-page-source branch, and then built/compile it and deploy to master where it is auto-served from by GitHub at https://vmware.github.io  
    