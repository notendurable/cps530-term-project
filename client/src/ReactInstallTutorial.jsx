import React from 'react';
import NavigationBar from './NavigationBar';
import './style.css'

const ReactInstallTutorial = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>How to install ReactJS on Windows</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4>Prerequisites</h4>
          <p>
            <ul>
              <li>Install the latest version of Windows 10(Version 1903+, Build 18362+)</li>
              <li><a href="https://docs.microsoft.com/en-us/windows/wsl/install">Install Windows Subsystem for Linux(WSL),</a> including a Linux distribution
                and make sure it is running in WSL 2 mode. You can check this by opening PowerShell and entering: <code className='code'>wsl -l -v</code> </li>
              <li><a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl">Install Node.js on WSL 2: </a> These instructions use Node Version Manager (nvm) for installation,
                you will need a recent version of NodeJS to run create-react-app, as well as a recent version of Node Package Manager (npm). For exact version requirements, see the <a href="https://reactjs.org/docs/create-a-new-react-app.html#create-react-app">
                  Create React App website.</a> </li>
            </ul>
          </p>
          <h4>Create your React app</h4>
          <p>
            To install the full React toolchain on WSL, we recommend using create-react-app:
            <ol>
              <li>
                Open a terminal(Windows Command Prompt or PowerShell).
              </li>
              <li>
                Create a new project folder: mkdir ReactProjects and enter that directory: <code className='code'>cd ReactProjects.</code>
              </li>
              <li>
                Install React using create-react-app, a tool that installs all of the dependencies to build and run a full React.js application: <code className='code'>npx create-react-app my-app</code>
              </li>
              <li>
                This will first ask for your permission to temporarily install create-react-app and it's associated packages. Once completed, change directories into your new app ("my-app" or whatever you've chosen to call it): <code className='code'>cd my-app</code>
              </li>
              <li>
                Start your new React app: <br />
                <code className='code'>npm start</code> <br />
                This command will start up the Node.js server and launch a new browser window displaying your app. You can use Ctrl + c to stop running the React app in your command line.
              </li>
              <li>
                When you're ready to deploy your web app to production, running npm run build will create a build of your app in the "build" folder. You can learn more in the Create React App User Guide.
              </li>
            </ol>
            <p>
              Note: <br />
              Create React App includes a frontend build pipeline using Babel and webpack, but doesn't handle backend logic or databases. If you are seeking to build a server-rendered website with React that uses a Node.js backend, we recommend installing Next.js, rather than this create-react-app installation, which is intended more for single-page apps. You also may want to consider installing Gatsby if you want to build a static content-oriented website.
            </p>
          </p>
          <h4>Addtional Resources</h4>
          <p>
            <ul>
              <li><a href="https://reactjs.org/">React Docs</a></li>
              <li><a href="https://create-react-app.dev/docs/getting-started/">Create React App docs</a></li>
              <li><a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/windows-or-wsl">Should I install on Windows or Windows Subsystem for Linux(WSL)?</a></li>
              <li><a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nextjs-on-wsl">Install Next.js</a></li>
              <li><a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/gatsby-on-wsl">Install Gatsby</a></li>
              <li><a href="https://microsoft.github.io/react-native-windows/docs/getting-started">Install React Native for Windows</a></li>
              <li><a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows">Install NodeJS on Windows</a></li>
              <li><a href="https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl">Install NodeJS on WSL</a></li>
              <li>Try the tutorial:<a href="https://code.visualstudio.com/docs/nodejs/reactjs-tutorial">Using React in Visual Studio Code </a></li>
              <li>Try the Microsoft Learn online course: <a href="https://docs.microsoft.com/en-us/learn/paths/react/">React </a></li>
            </ul>
          </p>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
}

export default ReactInstallTutorial;
