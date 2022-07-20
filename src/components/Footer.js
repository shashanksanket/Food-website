import React from 'react';
import logo_footer from '../images/logo-footer.png'
import location from '../images/location.svg'
import email from '../images/email.svg'

export default function Footer() {
  return (
	<div>
		<div>
		<footer id="contact">
        <div class="footer-top">
            <div class="footer-logo">
                <img src={logo_footer} alt=""/>
                <span>Burger House</span>
            </div>
        </div>
        <div class="footer-middle">
            <p class="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
            <div class="footer-contact">
                <div class="footer-contact-item">
                    <img src={location} alt="" class="footer-contact-icon"/>
                    <a  href="#" class="footer-contact-text">Address</a>
                </div>
                <div class="footer-contact-item">
                    <img src={email} alt="" class="footer-contact-icon"/>
                    <a href="mailto:info@companyname.com" class="footer-contact-text">info@companyname.com</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copyright">© Company Name 2021. All rights reserved.</p>
            <div class="footer-social">
                <a href="" class="instagram"><i class="fab fa-instagram"></i></a>
                <a href="" class="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>
		</div>
	</div>
  )
}
