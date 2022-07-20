import React from 'react'
import bi from '../images/1.png'
import b1 from '../images/b1.png'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'

export default function 
() {
  return (
	<div class="home">
		<section class="banner">
			<div class="container">
				<h3 class="banner-subtitle">It is a good time for the great taste of burgers</h3><br/>
				<h1 class="banner-title">Speciall<br/> <span>Burger</span></h1>
			</div>
			<div>
				<img src={bi}/>
			</div>
		</section>
		<section class="">
		<div class="banner-grid-row">
            <div class="banner-grid-column">
                <a href="" title="" class="banner-grid-big">
                    <div class="banner-grid-text">
                        <h4 class="banner-grid-subject">Try it today</h4>
                        <h3 class="banner-grid-title">Most popular banner</h3>
                    </div>
                    <img src={b1} alt="" class="banner-grid-image"/>
                </a>
            </div>
            <div class="banner-grid-column">
                <a href="" title="" class="banner-grid-small">
                    <div class="banner-grid-text">
                        <h4 class="banner-grid-subject">Try it today</h4>
                        <h3 class="banner-grid-title">More fun more taste</h3>
                    </div>
                    <img src={s1} alt="" class="banner-grid-image"/>
                </a>
                <a href="" title="" class="banner-grid-small">
                    <div class="banner-grid-text">
                        <h4 class="banner-grid-subject">Try it today</h4>
                        <h3 class="banner-grid-title">Fresh &amp; Chili</h3>
                    </div>
                    <img src={s2} alt="" class="banner-grid-image"/>
                </a>
            </div>
        </div>
		
		</section>
	</div>
  )
}
