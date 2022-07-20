import React from 'react'
import menu_1 from '../images/menu_1.png'
import menu_2 from '../images/menu_2.png'
import menu_3 from '../images/menu_3.png'


export default function
	() {
	return (
		<div>
			<div class="menu">
				<section class="section" id="menu">
					<div class="section-header text-center">
						<h5 class="section-label label">Always Tasty Burger</h5>
						<h2 class="section-title">Choose &amp; Enjoy</h2>
						<p class="section-subtitle text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
							Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
						</p>
					</div>
					<div class="menu-items">
						<div class="menu-item" >
                			<div class="menu-item-image">
                    			<img src={menu_1} alt="" class="menu-item-burger"/>
                			</div>
							<div class="menu-item-desc">
								<h4 class="menu-item-title">Hamburger1</h4>
								<p class="menu-item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
								<a href="#contact" class="button">Order Now</a>
							</div>
            			</div>
						<div class="menu-item">
							<div class="menu-item-image">
								<img src={menu_2} alt="" class="menu-item-burger"/>
							</div>
							<div class="menu-item-desc">
								<h4 class="menu-item-title">Hamburger2</h4>
								<p class="menu-item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
								<a href="#contact" class="button">Order Now</a>
							</div>
						</div>
						<div class="menu-item">
							<div class="menu-item-image">
								<img src={menu_3} alt="" class="menu-item-burger"/>
							</div>
							<div class="menu-item-desc">
								<h4 class="menu-item-title">Hamburger3</h4>
								<p class="menu-item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
								<a href="#contact" class="button">Order Now</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>

	)
}
