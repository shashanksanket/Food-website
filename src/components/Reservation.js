import React from 'react';
import burger from '../images/burger.png'
import bottle from '../images/bottle.png'
import burger_food from '../images/burger-food.png'


export default function
	() {
	return (
		<div>
			<div>
				<section class="section" id="reservation">
					<div class="reservation">
						<div class="reservation-left">
							<img src={burger} alt="" />
							<img src={bottle} alt="" />
						</div>
						<div class="reservation-center">
							<div class="section-header text-center">
								<h5 class="section-label">Reservation</h5>
								<h2 class="section-title">Book Your Table</h2>
							</div>
							<form class="reservation-form" method="post">
								<div class="row">
									<div class="col-sm-6">
										<div class="form-group form_pos">
											<input type="text" name="name" required="" placeholder="Name" class="form-control" spellcheck="false" data-ms-editor="true" />
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group form_pos">
											<input type="email" name="email" required="" placeholder="Email" class="form-control" />
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group form_pos">
											<input type="text" name="date" required="" placeholder="Date" class="form-control" id="reserv_date" spellcheck="false" data-ms-editor="true" />
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group form_pos">
											<input type="text" name="time" required="" placeholder="Time" class="form-control" id="reserv_time" spellcheck="false" data-ms-editor="true" />
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group form_pos">
											<input type="number" name="people" required="" placeholder="People" class="form-control" />
										</div>
									</div>
									<div class="col-sm-6">
										<button type="submit" class="button">Find a table</button>
									</div>
								</div>
							</form>
						</div>
						<div class="reservation-right">
							<img src={burger_food} alt="" />
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
