import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Route, HashRouter, NavLink, BrowserRouter } from 'react-router-dom';
import CommonValidationEngine from '../../lib/CommonValidationEngine';


class Footer extends Component {
	constructor(props) {
		super(props);
		this.emailSubscribeSubmission = this.emailSubscribeSubmission.bind(this);
	}
	emailSubscribeSubmission(e) {
		let email = document.getElementById("emailSubscribe").value;
		let form = document.getElementById("dryfruit-emailSubscribe").getElementsByTagName("input"),
			form_validator_check = {
				email: {
					verify: ["email"],
					message: ["Please enter the email"]
				}
			};
		let validationOps = new CommonValidationEngine(form, form_validator_check);
		if (validationOps.commonValidationFields()) {
			const postData = {
				"emailSubscribeRequest": {
					"email": email
				}
			};
			let finalRes = this.props.setEmailSubscribe(postData);
			console.log("Final results :: " + JSON.stringify(finalRes))
		}
		e.preventDefault();
	}
	render() {
		return (
			<footer>
				<div className="footer-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="footer-box about-widget">
									<h2 className="widget-title">About us</h2>
									<p>Agrofine is the largest edible nuts and dry fruits brand in India, offering the widest range of raw and flavored products. At Agrofine, We have dedicated processing facilities for Almonds, Cashews, Pistachios and other dry fruits.<br />
										We have invested heavily in mechanization to achieve huge volumes with high hygiene standards required for the ever-growing segment. We have a diverse portfolio with a product-focused approach to ensure highest quality of production in our world-class facilities.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box get-in-touch">
									<h2 className="widget-title">Get in Touch</h2>
									<ul>
										<li>Bengaluru</li>
										<li>subhrajitsahu1990@gmail.com</li>
										<li>+91 740*******</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box pages">
									<h2 className="widget-title">Pages</h2>

									<nav>
										<ul className="sub-menu">
											<li><NavLink to="/">Home</NavLink></li>
											<li><NavLink to="/contact-us">Contact</NavLink></li>
											<li><NavLink to="/About">About Us</NavLink></li>
											<li><NavLink to="/HealthTips">Health Tips</NavLink></li>
											<li><NavLink to="/News">News</NavLink></li>

										</ul>
									</nav>

								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-box subscribe">
									<h2 className="widget-title">Subscribe</h2>
									<p>Subscribe to our mailing list to get the latest updates.</p>
									<form id="dryfruit-emailSubscribe">
										<input id="emailSubscribe" name="email" type="email" placeholder="Email" />
										<button type="submit" onClick={this.emailSubscribeSubmission}><i className="fas fa-paper-plane"></i></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<p>Copyrights © 2022 - <a href="">Subhrajit Sahu</a>,  All Rights Reserved.<br />
									Distributed By - <a href="">Subhrajit</a>
								</p>
							</div>
							<div className="col-lg-6 text-right col-md-12">
								<div className="social-icons">
									<ul>
										<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
export default connect("", actions)(Footer);
