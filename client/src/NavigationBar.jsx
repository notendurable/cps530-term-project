import React from 'react';
import './bootstrap.css';

const NavigationBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a class="navbar-brand" href="/">Home</a>

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Summary</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/react-summary">ReactJS</a>
                  <a class="dropdown-item" href="/node-summary">NodeJS</a>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/how-to-install">How to install</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/tutorial">Basic tutorial</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/conclusion">Conclusion</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/credits">Credits</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;