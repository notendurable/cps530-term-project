import React from 'react';
import NavigationBar from './NavigationBar';

const NodeInstallTutorial = () => {
  return (
    <div>
      <NavigationBar />
      <br />
			<div className='row'>
		    <div className='col'>
			    <h1 className='text-center'>How to install NodeJS on Windows</h1>
		    </div>
	    </div>
	    <div className= 'row'>
	  	    <div className='col-3'></div>
	  	    <div className='col-6'></div>
	  		<hr />
	  		<h4>Introduction</h4>
              <p>
                <strong> Node.js </strong> is a run-time environment which includes everything you need to execute a program written in JavaScript. It’s used for running scripts on the server to render content before it is delivered to a web browser. <br />
                NPM stands for Node Package Manager, which is an application and repository for developing and sharing JavaScript code. <br />
                <strong> This guide will help you install and update Node.js and NPM on a Windows system and other useful Node.js commands. </strong>
              </p>
        <h4>Prerequisites</h4>
        <p>
         <li>A user account with administrator privileges (or the ability to download and install software)</li>
         <li> Access to the Windows command line (search - cmd - right-click - run as administrator) OR Windows PowerShell (Search - Powershell - right-click - run as administrator) </li>
        </p>
        <h3><strong>How to Install Node.js and NPM on Windows</strong></h3>
              <p>
                <p>
                  <h4>Step 1: Download Node.js Intaller</h4>
                    <p>
                        In a web browser, navigate to <a href="https://nodejs.org/en/download/.">node.js installer.</a> Click the <strong> Windows Installer </strong>button to download the latest default version.
                        At the time this article was written, version 10.16.0-x64 was the latest version.
                        The Node.js installer includes the NPM package manager. 
                      <figure>
                        <img src='' alt="" />
                      </figure>
                    </p>
                </p>
                <p>
                  <h4>Step 2: Install Node.js and NPM from Browser</h4>
                  <p>
                    <ol>
                      <li>
                        Once the installer finishes downloading, launch it. Open the <strong> downloads </strong> link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.
                      </li>
                      <li>
                        The system will ask if you want to run the software – click <strong> Run.</strong>
                      </li>
                      <li>
                        On the next screen, review the license agreement. Click <strong> Next </strong> if you agree to the terms and install the software. 
                      </li>
                      <li>
                        The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click <strong> Next. </strong>
                      </li>
                      <li>
                        The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking <strong> Next </strong>.
                      </li>
                      <li>
                        Finally click the <strong>Install</strong> button to run the installer. When it finishes, click <strong>Finish</strong>
                      </li>
                    </ol>
                  </p>
                </p>
                  <p>
                    <h4>Step 3: Verify Installation</h4>
                    <p>
                      Open a Command prompt/PowerShell, and enter the following code: <br />
                      <code>node -v</code><br />
                      The system should display the Node.js version installed on your system. You can do the same for NPM: <br />
                      <code>npm -v</code>
                    </p>
                  </p>
                  <p>
                    <h4>How to Update Node.js and NPM on Windows</h4>
                    <p>
                      The easiest way to <a href="https://phoenixnap.com/kb/update-node-js-version"> update Node.js </a> and NPM is to download the latest version of the software. 
                      On the Node.js download page, right below the Windows Installer link, it will display the latest version. You can compare this to the version you have installed.
                      To upgrade, download the installer and run it. The setup wizard will overwrite the old version, and replace it with the new version. 
                    </p>
                  </p>
              </p>
        </div>
	</div>
  );
}

export default ReactInstallTutorial;
