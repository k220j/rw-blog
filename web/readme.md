The /web Directory
src contains several subdirectories:
components contain your traditional React components as well as Redwood Cells (more about those soon).

layouts contain HTML/components that wrap your content and are shared across Pages.

pages contain components and are optionally wrapped inside Layouts and are the "landing page" for a given URL (a URL like /articles/hello-world will map to one page and /contact-us will map to another). There are two pages included in a new app:

NotFoundPage.js will be served when no other route is found (see Routes.js below).

FatalErrorPage.js will be rendered when there is an uncaught error that can't be recovered from and would otherwise cause our application to really blow up (normally rendering a blank page).

index.css is a generic place to put your CSS, but there are many options.

index.html is the standard React starting point for our app.

index.js the bootstraping code to get our Redwood app up and running.

Routes.js the route definitions for our app which map a URL to a Page.

public contains assets not used by React components (they will be copied over unmodified to the final app's root directory):

favicon.png is the icon that goes in a browser tab when your page is open (apps start with the RedwoodJS logo).

robots.txt can be used to control what web indexers are allowed to do.

README.md explains how, and when, to use the public folder for static assets. It also covers best practices for importing assets within components via Webpack. You can also read this README.md file on GitHub.
