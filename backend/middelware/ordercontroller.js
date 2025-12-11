import Order from "../schema/order.js";
import transporter from "../utils/mailer.js";

export const placeOrder = async (req, res) => {
  try {
    const { formData, cart, total } = req.body;

    // ✅ Save order to DB
    const order = await Order.create({
      customer: formData,
      items: cart,
      total,
      paymentMethod: formData.paymentMethod
    });

    // ✅ Format cart items for email
    const itemsHTML = cart
      .map(
        (item) => `
          <li>
            ${item.machineName} × ${item.quantity} <br/>
            Price: ₹${(item.offerPrice || item.price) * item.quantity}
          </li>
        `
      )
      .join("");

    //  EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: `"mmShoppes" <${process.env.ALERT_EMAIL}>`,
      to: formData.email,
      subject: "✅ Order Confirmed - MMSHOPPE",
      html: `
        <h2>Thank you, ${formData.name}!</h2>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>State:</strong> ${formData.state}</p>
        <p><strong>Pincode:</strong> ${formData.pincode}</p>
        <p><strong>Payment Method:</strong> ${formData.paymentMethod}</p>
        <p><strong>GST:</strong> ${formData.gst || "N/A"}</p>

        <h3>Order Items</h3>
        <ul>${itemsHTML}</ul>

        <h2>Total Amount: ₹${total}</h2>

        <p>We will contact you soon.</p>
      `
    });
    // ✅ EMAIL TO OWNER (YOU)
    await transporter.sendMail({
      from: `"mmShoppes" <${process.env.ALERT_EMAIL}>`,
      to: process.env.ORDER_NOTIFICATION_EMAIL,
      subject: "🛒 New Order Received",
      html: `
        <h2>New Order Alert</h2>

        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>State:</strong> ${formData.state}</p>
        <p><strong>Pincode:</strong> ${formData.pincode}</p>
        <p><strong>Payment:</strong> ${formData.paymentMethod}</p>
        <p><strong>GST:</strong> ${formData.gst || "N/A"}</p>

        <h3>Items Ordered</h3>
        <ul>${itemsHTML}</ul>

        <h2>Total: ₹${total}</h2>
      `
    });

    console.log("✅ ORDER SUCCESS | Emails sent");

    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id
    });

  } catch (err) {
    console.error("❌ ORDER ERROR:", err);
    res.status(500).json({ message: "Order failed" });
  }
};
