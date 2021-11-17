import React from 'react';
import NavigationBar from './NavigationBar';

const ReactSummary = () => {
	return (
		<div>
			<NavigationBar />
			<br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Summary of ReactJS</h1>
				</div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>What is ReactJS?</h4>
					<p>
						React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
						<br />
						<br />
						<img src="/images/react.png" alt="React logo" height='60rem' />
						<br />
						<br />
						React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

						{/* Source: https://en.wikipedia.org/wiki/React_(JavaScript_library) */}
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>What are the pros of React?</h4>
					<p>
						There are many big benefits to React, but the main ones are:
						<ul>
							<li>
								<strong>Clean Programming.</strong> By creating your views with React, you get easy-to-read and easy-to-reuse code.
							</li>
							<li>
								<strong>Strong Community.</strong> If you need a package like a map or a graph, you can bet that there's a great package that you can install. The strong community means you have a breadth of packages that you can install and use immediately. Less writing for you!
							</li>
							<li>
								<strong>Fast Performance.</strong> React for small and large projects works very quickly thanks to the Virtual DOM it uses.
							</li>
						</ul>

						{/* Source: https://www.better.dev/react-popularity */}
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>What are the cons of React?</h4>
					<p>
						These are the cons of React:
						<ul>
							<li>
								<strong>JSX Syntax.</strong> While the JSX syntax extension makes things easier for some developers, there is another group of developers that find JSX to be a disadvantage of React. Some web developers and designers find the JSX code to be too complex and difficult to grasp.
							</li>
							<li>
								<strong>Development Pace.</strong> ReactJS is constantly evolving and changing. The pace at which React is developed can be seen as an advantage or a disadvantage depending on who you are.
							</li>
							<li>
								<strong>Documentation.</strong> As a result of rapid development, educational documentation and resources can be sparse in covering the latest updates and changes.
							</li>
						</ul>

						{/* Source: https://www.koombea.com/blog/react-pros-and-cons-what-are-the-advantages-and-disadvantages-of-reactjs/ */}
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>Who uses React?</h4>
					<p>
						Many large scale companies are using React in production. This is very encouraging when deciding to use React for your own projects, big and small.

						<br />
						<br />
						Some examples are: <br /><br />
						<div className='row'>
							<div className='col-2'>
								<img src="/images/netflix.jpg" alt="Netflix logo" width='100rem' />
							</div>
							<div className='col-2'>
								<img src="/images/facebook.png" alt="Facebook logo" width='100rem' />
							</div>
							<div className='col-2'>
								<img src="/images/instagram.png" alt="Instagram logo" width='100rem' />
							</div>
							<div className='col-2'>
								<img src="/images/dropbox.jpg" alt="Dropbox logo" width='100rem' />
							</div>
							<div className='col-2'>
								<img src="/images/reddit.png" alt="Reddit logo" width='100rem' />
							</div>
							<div className='col-2'>
								<img src="/images/airbnb.jpg" alt="Airbnb logo" width='100rem' />
							</div>
						</div>

						{/* Source: https://www.better.dev/react-popularity */}
					</p>
				</div>
				<div className='col-3'></div>
			</div>

			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<h4>How popular is React?</h4>
					<p>
						According to 2021's Stack Overflow Developer Survey, React has overtaken jQuery to become the most used web framework in the world, by both professional and hobbyist developers.
						<br />
						<br />
						<img src="/images/react-popularity.png" alt="React popularity" width='800rem' />
						<br />
						<br />
						<img src="/images/react-popularity2.png" alt="React popularity" width='800rem' />
					</p>
				</div>
				<div className='col-3'></div>
			</div>
		</div>
	);
}

export default ReactSummary;