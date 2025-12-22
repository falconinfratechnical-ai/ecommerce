import React from "react";
import "../styles/Footer.css";
import fafa from "../assets/facebook.png"
import insta from "../assets/instagram.png"
import you from "../assets/youtube.png"
import amazon from "../assets/payments/amazon.png";
import visa from "../assets/payments/visa.jpg";
import master from "../assets/payments/mastercard.png";
import razor from "../assets/payments/razor.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top-icons">
                <div className="icon-box"><i>💎</i><p>Best Quality Material</p></div>
                <div className="icon-box"><i>💳</i><p>Safe Payment Method</p></div>
                <div className="icon-box"><i>🚚</i><p>Free Delivery</p></div>
                <div className="icon-box"><i>🔄</i><p>Easy Returns</p></div>
                <div className="icon-box"><i>📦</i><p>Reliable Delivery</p></div>
                <div className="icon-box"><i>🎧</i><p>24/7 Customer Support</p></div>
            </div>
            <div className="footer-main">
                
                <div className="footer-col">
                    <h3>mmShoppe</h3>
                    <p>
                        MMShoppe is India’s trusted ecommerce platform for high-quality food equipment and machinery. We provide reliable, innovative, and affordable machines that help businesses boost productivity and efficiency. From grinders and mixers to sealing machines and commercial kitchen equipment, MMShoppe delivers durable solutions built for real performance.
Your growth starts with the right tools — and we’re here to provide them.
                    </p>
                   
                </div>
               <div className="footer-col">
                    <h3>Contact Us</h3>
                    {/* <a href="#">Shipping policy</a> */}
                    <a href="/terms">Terms and conditions</a>
                    <a href="/privacy" >Privacy and policy</a>
                    <a href="/return">Refund and return policy</a>
                         <a href="/ship">Shipping & Delivery Policy</a>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <a href="/about">About us</a>
                    <a href="/products">Products</a>
                    <a href="/contact">Contact us</a>
                    {/* <a href="/login">Login</a> */}
                </div>
                <div className="footer-col social-section">
                    <h3>Follow Us</h3>

                    <div className="social-icons">
                        <a href="https://www.youtube.com/"
                          target="_blank"
  rel="noopener noreferrer">
                            <img  src={fafa} alt="facebook" className="social-img" />
                        </a>

                        <a href="https://www.instagram.com/"   target="_blank"
  rel="noopener noreferrer">
                            <img src={insta} alt="instagram" className="social-img" />
                        </a>

                        <a href="https://www.facebook.com/"   target="_blank"
  rel="noopener noreferrer">
                            <img src={you} alt="facebook" className="social-img1" />
                        </a>
                    </div>
                    <a href="tel:+917510155444">+91 7510155444</a>
                      <a href="mailto:mmshoppes@gmail.com">mmshoppes@gmail.com</a>
                      <br/>
                   <strong>  MMSHOPPE</strong>
                   <p>
                      ERNAKULAM,KERALA,INDIA<br/>
                      683501
                         </p>
                         <strong>GST:93**********</strong>
                        
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <div className="payment-icons">
                    <img src={amazon} alt="Amazon Pay" />
                    <img src={visa} alt="Visa" />
                    <img src={master} alt="Mastercard" />
                    <img src={razor} alt="razor" />
                </div>

                <p>All Rights Reserved © 2025 , Powered by Wondermill Studio LLP</p>
            </div>
        </footer>
    );
};

export default Footer;
