# React Demo

### What's this?

> Isomorphic JavaScript apps are JavaScript applications that can run both client-side and server-side. The backend and frontend share the same code.
> 
From http://isomorphic.net/

In this repo, you can see an example of an isomorphic application using:
+ NodeJS with Express
+ ReactJS
+ Webpack
+ Parse for datastore

### The Setup

First, I did a npm init and decided the technologies I was going to use. 
[Webpack](http://webpack.github.io/) for module bundling and [Browserify](http://browserify.org/) (also Express and React).
Since I'm sharing some files for running in browsers and Node, Browserify fits perfectly in this project.

webpack.config is the file used to setup webpack. Webpack takes the main.js file in the client folder and dig for all the dependencies and creates a single file.
I also needed to add a jsx-loader to compile the React components.

For Node, I'm using [Nodemon](https://github.com/remy/nodemon) to reload the app when it changes. In the Nodemon configuration, a watch to shared and server is added and when something changes in those files, webpack also runs again.

There is also a script that starts the app. It's binded to the npm run dev command. 

### The Structure

+ Client Folder: code created to run specifically in the browser.
+ Public Folder: Express static files folder. Used to server css and js.
+ Server Folder: code created to run specifically in Node. It contains the Express setup and the routes.
+ Shared: this is the interesting part of this project. It contains the React components and some utility services. This code runs in both Node and browsers.
+ tpls Folder: in this folder I have the HTML templates.

### How to test it? Is it really working?

To make sure the HTML is server side rendered, you can turn off the Javascript in the browser and the application will look exactly the same. (What would happen if you do this in an Angular application?)

### Some annotations

###### What's jsObjs for?
I was getting a weird react error telling me I wasn't taking advantage of SSR because a hash issue. Everything was being rerendered in the frontend.
> React attempted to use reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server.

As you can see here  
http://stackoverflow.com/questions/20978946/facebook-react-js-how-do-you-render-statefull-components-on-the-server

In my case, React tried to rerender the component but it had to make a request to Parse. The first time this happened, the React component didn't have a state, so it rendered an empty table that didn't match the backend rendered table.

###### parse-access.js Why can you use https.request in the browser?
Browserify has a wrapper to make this calls in the browser.
