 import React from 'react';
 import "../NotFoundPage/NotFoundPage.scss"
 
 const NotFoundPage = () => {
   return <div>


<header>
		<h4>404 not found</h4>
	</header>

	<main>
		<section class="section--image">
			<img src="https://vetri-suriya.web.app/devchallenges/404-not-found/Scarecrow.png" alt=""/>
		</section>
		<section class="section--content">
			<h5>I have bad news for you</h5>
			<p>The page you are looking for might be removed or is temporarily unavailable</p>
		  <button><a href="/">HomePage</a></button>
		</section>
	</main>

	<footer>
		<p>Created by - <a href="https://vetri-suriya.web.app/"><span>Vetri Suriya</span></a></p>
	</footer>
	


   </div>;
 };
 
 export default NotFoundPage;
 