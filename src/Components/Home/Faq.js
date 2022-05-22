import React from 'react';
import { Fade } from 'react-reveal';
import faq from "../../Assets/faq.png";

const Faq = () => {
    return (
        <Fade top>
            <section className='my-28'>
                <h1 className='lg:text-6xl text-3xl font-semibold text-primary text-center'>Frequently Asked Questions</h1>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={faq} class="lg:w-3/6" alt="" />
                        <div>
                            <div class="collapse collapse-plus border-4 border-base-300 bg-base-100 rounded-box mb-3">
                                <input type="checkbox" />
                                <div class="collapse-title text-xl font-medium">
                                    WHAT IS YOUR SHIPPING POLICY?
                                </div>
                                <div class="collapse-content">
                                    <p>For Orders Under $98 Incl GST; The standard freight charge on all orders is $9.90 Flat Fee Australia Wide. For Orders Over $98* Incl GST; Shipping is Free! (*only to an Australian delivery address and excludes bulky items. See below for bulky items)</p>
                                </div>
                            </div>
                            <div class="collapse collapse-plus border-4 border-base-300 bg-base-100 rounded-box mb-3">
                                <input type="checkbox" />
                                <div class="collapse-title text-xl font-medium">
                                    WHAT PAYMENT METHODS DO YOU ACCEPT?
                                </div>
                                <div class="collapse-content">
                                    <p>We accept pay on collection at store. We also accept PayPal, Credit/debit card (VISA & Mastercard), Bank transfer/deposit and Cheque/money order. We're always looking for new and innovative ways to help our customers, so if you'd like to pay using an alternative method, please let us know - we may be able to help.</p>
                                </div>
                            </div>
                            <div class="collapse collapse-plus border-4 border-base-300 bg-base-100 rounded-box mb-3">
                                <input type="checkbox" />
                                <div class="collapse-title text-xl font-medium">
                                    CREDIT CARD SECURITY
                                </div>
                                <div class="collapse-content">
                                    <p>If you choose to pay for your order by credit card, you can be assured that we employ the latest security measures to ensure the safety of your details. We use eWAY for our online credit card processing facility and they provide the most secure encryptions for online businesses. This includes, but is not limited to: We do not store your credit card details. We will never ask you to email your credit card number to us (although we may ask for additional information to verify the details provided at order time). If your order is over $300 in value and or its your first time ordering with us; we will do additional security checks with you to ensure you are the genuine credit card owner that has been used. One our sales team members will get in touch with you to verify some information.</p>
                                </div>
                            </div>
                            <div class="collapse collapse-plus border-4 border-base-300 bg-base-100 rounded-box mb-3">
                                <input type="checkbox" />
                                <div class="collapse-title text-xl font-medium">
                                    WHAT WARRANTY IS PROVIDED?
                                </div>
                                <div class="collapse-content">
                                    <p>All products are genuine, Australian-sourced products and are provided with full manufacturer''s warranty. This will vary between products, but is typically 12 months cover against manufacturing failure, in some cases like Canon, Nikon and Olympus Cameras and Lenses its 2 Years Warranty. All warranties are issued on a ''return to base'' basis. I.e. you will be responsible for the cost of returning the goods to us or the manufacturer if a claim is necessary. For more information on warranty periods and additional information available, send us an email or call us on 02 9558 3116</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default Faq;