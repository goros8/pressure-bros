import React from 'react';
import "../css/Appointment.css";
const Appointment = () => {
    return (
        <div id="main-div">
            <div className="columns">
                <div className="one">
                    <div id="name">
                        <h6>Your Name</h6>
                        <input type="text" name="name" placeholder="Enter your name" required />
                    </div>
                    <div id="payment-method">
                        <h6>Payment Method</h6>
                        <div className="radio-option">
                            <input type="radio" id="credit-card" name="payment_method" value="credit-card" required />
                            <label htmlFor="credit-card">Credit Card</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="debit-card" name="payment_method" value="debit-card" />
                            <label htmlFor="debit-card">Debit Card</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="paypal" name="payment_method" value="paypal" />
                            <label htmlFor="paypal">PayPal/Venmo</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="cash" name="payment_method" value="cash" />
                            <label htmlFor="cash">Cash</label>
                        </div>
                    </div>
                </div>

                <div className="one">
                    <div id="email">
                        <h6>Email</h6>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div id="date">
                        <h6>Preferred Date</h6>
                        <input type="date" name="preferred_date" required />
                    </div>
                </div>


                <div className="one">
                    <div id="phone">
                        <h6>Phone Number</h6>
                        <input type="tel" name="phone" placeholder="123-456-7890" required />
                    </div>
                    <div id="service-type">
                        <h6>Service Type</h6>
                        <select name="service_type" id="service-dropdown" required>
                            <option value="" disabled selected>Select a service</option>
                            <option value="pressure-washing">Sidewalk</option>
                            <option value="window-cleaning">Patio</option>
                            <option value="gutter-cleaning">House</option>
                            <option value="deck-cleaning">Fences</option>
                            <option value="driveway-cleaning">Driveway</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="one">
                    <div id="address">
                        <h6>Address</h6>
                        <input type="text" name="address" placeholder="Address" required />
                    </div>
                </div>
                <div className="one" id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206689.49767539254!2d-84.08989299331402!3d35.95862721096097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c162246ce42a9%3A0x7bea92dac4f534c5!2sKnoxville%2C%20TN!5e0!3m2!1sen!2sus!4v1729018317886!5m2!1sen!2sus"
                        width="600"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
