import React from "react";
import "../styles/Privacy.css";

function ShippingPolicy() {

  window.scrollTo(0, 0);

  return (
    <div className="about-container">

      {/* Banner Section */}
      <div className="products-banner">
        <h1 className="products-heading">Shipping & Delivery Policy</h1>
        <h3 className="products-subtitle">
          One of India's fastest-growing Food Processing Machines, Machineries & Tools brands.
        </h3>
      </div>

      <div className="about-content">

        <h2 className="shop">Shipping & Delivery Policy</h2>
        <br />

        <h3>1. Shipping Coverage</h3>
        <p>
          mmSHOPPE delivers products across India. Delivery availability depends on
          courier serviceability for the customer’s location.
        </p>

        <h3>2. Order Processing Time</h3>
        <ul>
          <li>Orders are processed within <strong>24–48 working hours</strong> after confirmation</li>
          <li>Orders placed on Sundays or public holidays are processed the next working day</li>
          <li>Bulk or machinery orders may require additional processing time</li>
        </ul>

        <h3>3. Estimated Delivery Time</h3>
        <ul>
          <li>Metro cities: <strong>3–6 working days</strong></li>
          <li>Non-metro & rural areas: <strong>5–10 working days</strong></li>
          <li>Remote locations may take longer depending on courier access</li>
        </ul>

        <h3>4. Shipping Charges</h3>
        <ul>
          <li>Shipping charges (if applicable) are calculated at checkout</li>
          <li>Heavy machinery and bulk orders may incur additional logistics charges</li>
          <li>Any extra charges will be communicated before dispatch</li>
        </ul>

        <h3>5. Dispatch & Tracking</h3>
        <ul>
          <li>Once shipped, tracking details will be shared via SMS or email</li>
          <li>Customers can track orders using the provided courier tracking link</li>
          <li>Delays caused by courier partners are beyond mmSHOPPE’s control</li>
        </ul>

        <h3>6. Delivery Guidelines</h3>
        <ul>
          <li>Ensure someone is available at the delivery address to receive the order</li>
          <li>Provide correct and complete shipping details while placing the order</li>
          <li>Courier partners may contact the customer before delivery</li>
        </ul>

        <h3>7. Damaged or Missing Packages</h3>
        <p>
          If the package appears damaged or tampered with at the time of delivery:
        </p>
        <ul>
          <li>Do not accept the delivery</li>
          <li>Take clear photos of the package</li>
          <li>Report the issue within <strong>24 hours</strong> of delivery</li>
        </ul>
        <p>
          📧 Report to: <strong>support@mmshoppe.store</strong>
        </p>

        <h3>8. Delivery Delays</h3>
        <ul>
          <li>Delays due to weather, strikes, natural calamities, or logistics issues may occur</li>
          <li>Such delays do not qualify for cancellation or compensation</li>
        </ul>

        <h3>9. Cash on Delivery (COD)</h3>
        <ul>
          <li>COD is available for selected products and locations</li>
          <li>Additional verification may be required for COD orders</li>
          <li>mmSHOPPE reserves the right to cancel COD orders if verification fails</li>
        </ul>

        <h3>10. Incorrect Address or Failed Delivery</h3>
        <ul>
          <li>Orders with incorrect or incomplete addresses may be delayed or cancelled</li>
          <li>Re-delivery charges may apply if delivery fails due to customer unavailability</li>
        </ul>

        <h3>11. Final Notes</h3>
        <ul>
          <li>Delivery timelines are estimates, not guarantees</li>
          <li>mmSHOPPE reserves the right to modify this policy without prior notice</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          📧 Email: <strong>support@mmshoppe.store</strong><br />
          📞 Customer Support: <strong>+91 7510155444</strong><br />
          🌐 Website: <strong>https://www.mmshoppe.store</strong>
        </p>

      </div>
    </div>
  );
}

export default ShippingPolicy;
