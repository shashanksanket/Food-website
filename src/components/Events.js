import React from 'react'
import event_1 from '../images/event_1.jpg'

export default function () {
  return (
	<div>
		<section class="events">
		<div class="events-item">
                <div class="section-header">
                    <h5 class="section-label">Always Tasty Burger</h5>
                    <h2 class="section-title">Choose &amp; Enjoy</h2>
                    <p class="section-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <img src={event_1} alt="" class="events-item-image"/>
            </div>
			</section>
	</div>
  )
}
