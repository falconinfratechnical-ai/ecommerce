import React from "react";
import "../styles/Privacy.css";

function ReturnPolicy() {

  window.scrollTo(0, 0);

  return (
    <div className="about-container">

      {/* Banner Section */}
      <div className="products-banner">
        <h1 className="products-heading">RETURN & REFUND POLICY</h1>
        <h3 className="products-subtitle">
          One of India's fastest-growing Food Processing Machines, Machineries & Tools brands.
        </h3>
      </div>

      <div className="about-content">

        <h2 className="shop">WELCOME TO MMSHOPPE</h2>
        <br />

        <h3>1. Return / Exchange Eligibility</h3>
        <p>mmSHOPPE allows return or replacement only in the following cases:</p>
        <ul>
          <li>Wrong product delivered</li>
          <li>Manufacturing defect</li>
          <li>
            Damaged product (must be reported within 24 hours of delivery via
            email with clear images of the product and packaging)
          </li>
          <li>Product significantly different from the description on the website</li>
        </ul>
        <p>
          📧 Email for reporting damage: <strong>support@mmshoppe.store</strong>
        </p>

        <h3>2. Non-Returnable Situations</h3>
        <ul>
          <li>Customer does not like the product</li>
          <li>Product is used, worn, altered, or tampered</li>
          <li>Physical damage caused after delivery</li>
          <li>Missing original packaging, labels, accessories, or invoice</li>
          <li>Sealed products once opened</li>
        </ul>

        <h3>3. Conditions for Return / Replacement</h3>
        <ul>
          <li>Product must be unused and in original condition</li>
          <li>Return request must be raised within 3 days of delivery</li>
          <li>All original packaging and invoice must be included</li>
        </ul>

        <h3>4. Refund & Replacement Timeline</h3>
        <ul>
          <li>Refund processed within 48 hours after inspection approval</li>
          <li>Amount credited within 7–10 working days</li>
          <li>Replacement issued subject to product availability</li>
        </ul>

        <h3>5. How to Raise a Return Request</h3>
        <p>You can initiate a return or replacement by:</p>
        <ul>
          <li>📞 Calling: <strong>+91 8595858422</strong></li>
          <li>📧 Emailing your Order ID and issue details</li>
        </ul>

        <h3>6. Order Cancellation Policy</h3>
        <ul>
          <li>Before shipment, or</li>
          <li>Within 4 hours of placing the order (whichever is earlier)</li>
        </ul>
        <p>
          ❌ Once shipped, cancellation is not allowed and will be treated as RTO.
        </p>

        <h3>7. Refund for Cancelled Orders</h3>
        <ul>
          <li>Refund processed within 24 hours of confirmation</li>
          <li>Amount credited within 7–10 working days</li>
          <li>2% payment gateway fee will be deducted</li>
        </ul>

        <h3>8. Cancellation by mmSHOPPE</h3>
        <ul>
          <li>Product unavailable or out of stock</li>
          <li>Non-serviceable delivery location</li>
          <li>Quantity restrictions</li>
          <li>Payment or fraud-related issues</li>
          <li>Incorrect shipping address</li>
        </ul>

        <h3>9. COD (Cash on Delivery) Orders</h3>
        <p>
          Additional verification may be required. Orders may be cancelled if
          verification fails.
        </p>

        <h3>10. Advance Payment (10% Online + 90% COD)</h3>
        <ul>
          <li>If not shipped: advance refunded within 7 business days (2% fee deducted)</li>
          <li>If shipped or pickup booked: advance is non-refundable</li>
          <li>If refused at delivery: advance amount is non-refundable</li>
        </ul>

        <h3>11. Final Notes</h3>
        <ul>
          <li>All refunds are subject to quality checks</li>
          <li>mmSHOPPE’s decision shall be final</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          📧 Email: <strong>support@mmshoppe.store</strong><br />
          📞 Customer Support: <strong>+91 8595858422</strong><br />
          🌐 Website: <strong>https://www.mmshoppe.store</strong>
        </p>

      </div>
    </div>
  );
}

export default ReturnPolicy;
