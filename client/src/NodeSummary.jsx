import React from 'react';
import NavigationBar from './NavigationBar';

const NodeSummary = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Summary of NodeJS</h1>
        </div>
      </div>

      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4>What is NodeJS?</h4>
          <p>
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
            <br />
            <br />
            <img src="/images/node.png" alt="Node logo" height='60rem' />
            <br />
            <br />
            Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.

            {/* Source: https://en.wikipedia.org/wiki/Node.js */}
          </p>
        </div>
        <div className='col-3'></div>
      </div>

      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4>What are the pros of Node?</h4>
          <p>
            <ul>
              <li>
                <strong>Easy To Learn.</strong> According to Node.js’s 2016 User Survey Javascript is one of the most popular programming languages for front-end development. Nearly every front-end developer is familiar with this universal language. Therefore, it is much easier for them to switch to using Node.js at the back-end.
              </li>
              <li>
                <strong>Freedom In Building Apps.</strong> Node.js is completely unopinionated, meaning you start building everything from scratch. It can execute basic tasks, but gives you only the bare minimum from a fresh install, making it less restricted.
              </li>
              <li>
                <strong>Fullstack JS.</strong> Before Node.js, JavaScript was only used for client-side development. It was necessary to use a different server-side programming language. With a growing popularity of Node.js fullstack JavaScript became a reality.
              </li>
            </ul>

            {/* Source: https://www.netguru.com/blog/pros-cons-use-node.js-backend */}
          </p>
        </div>
        <div className='col-3'></div>
      </div>

      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4>What are the cons of Node?</h4>
          <p>
            <ul>
              <li>
                <strong>Unstable API.</strong> One of the biggest disadvantages of Node.js is that it lacks consistency. Node.js’ API changes frequently, and the changes are often backward-incompatible.
              </li>
              <li>
                <strong>More Development Time.</strong> The fact that Node.js is unopinionated can also be seen as a drawback by some developers, with Node.js you basically need to write everything from scratch. It might result in a decrease in productivity, slowing your work down.
              </li>
              <li>
                <strong>Not Suitable for Heavy-Computing Apps.</strong> Node.js doesn’t support multi-threaded programming yet. Heavy computations block the incoming requests, which can lead to decrease of performance .
              </li>
            </ul>

            {/* Source: https://www.netguru.com/blog/pros-cons-use-node.js-backend */}
          </p>
        </div>
        <div className='col-3'></div>
      </div>

      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4>Who uses Node?</h4>
          <p>
            Some examples of companies that uses Node are: <br /><br />
            <div className='row'>
              <div className='col-2'>
                <img src="/images/linkedin.png" alt="LinkedIn logo" width='100rem' />
              </div>
              <div className='col-2'>
                <img src="/images/uber.png" alt="Uber logo" width='100rem' />
              </div>
              <div className='col-2'>
                <img src="/images/trello.png" alt="Trello logo" width='100rem' />
              </div>
              <div className='col-2'>
                <img src="/images/paypal.png" alt="PayPal logo" width='100rem' />
              </div>
              <div className='col-2'>
                <img src="/images/ebay.png" alt="eBay logo" width='100rem' />
              </div>
              <div className='col-2'>
                <img src="/images/mozilla.png" alt="Mozilla logo" width='100rem' />
              </div>
            </div>

            {/* Source: https://trio.dev/blog/companies-use-node-js */}
          </p>
        </div>
        <div className='col-3'></div>
      </div>

      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <h4>How popular is Node?</h4>
          <p>
            For the second year in a row, Node.js won the top spot in the StackOverflow’s 2020 developer survey. Over half of the respondents in the survey reported having used it in their projects.
            <br />
            <br />
            <img src="/images/node-popularity.jpg" alt="Node popularity" width='600rem' />

            {/* Source: https://www.section.io/engineering-education/why-node-js-is-popular/ */}
          </p>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
}

export default NodeSummary;