# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.



### COMMAND

yarn redwood generate page home /

The command above does four things:

1.  Creates web/src/pages/HomePage/HomePage.js. Redwood takes the name you specified as the first argument, capitalizes it, and appends "Page" to construct your new page component.
2.  Creates a test file to go along with this new page component at web/src/pages/HomePage/HomePage.test.js with a single, passing test. You do write tests for your components, don't you??
3.  Creates a Storybook file for this component at web/src/pages/HomePage/HomePage.stories.js. Storybook is a wonderful tool for efficiently developing and organizing UI components. If you'd like to learn more, see this Redwood Forum topic to start using it in your development process.
4.  Adds a <Route> in web/src/Routes.js that maps the path / to the new HomePage page.



The src alias

Notice that the import statement uses src/layouts/BlogLayout and not ../src/layouts/BlogLayout or ./src/layouts/BlogLayout.
Being able to use just src is a convenience feature provided by Redwood: src is an alias to the src path in the current workspace.
So if you're working in web then src points to web/src and in api it points to api/src.
