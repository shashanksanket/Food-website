import React from 'react'
import logo from '../images/logo.png';


export default function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand ml-5" href="#"><img src={logo} alt=""/><b> BURGER HOUSE</b></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div class="collapse navbar-collapse " id="navbarNav">

					<ul class="navbar-nav ml-auto ">
						<li class="nav-item active ml-4">
							<a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item active ml-4">
							<a class="nav-link" href="#">MENU</a>
						</li>
						<li class="nav-item active ml-4">
							<a class="nav-link" href="#">RESERVATION</a>
						</li>
						<li class="nav-item active ml-4">
							<a class="nav-link " href="#">EVENTS</a>
						</li>
						<li class="nav-item active ml-4">
							<a class="nav-link " href="#">CONTACT US</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
