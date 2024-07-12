import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      // Your payment processing logic goes here.
      // Use the `stripe` object to interact with the Stripe API.

      // Example: Create a payment intent on your server
      // const response = await fetch("/api/create-payment-intent", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ items: cartItems }),
      // });
      // const clientSecret = await response.json();

      // Call `stripe.confirmCardPayment` with the client secret.
      // const result = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(CardElement),
      //     billing_details: {
      //       // Include relevant billing details
      //     },
      //   },
      // });

      // Handle the result (success, failure, etc.)
      // if (result.error) {
      //   setError(`Payment failed: ${result.error.message}`);
      // } else {
      //   setSucceeded(true);
      //   setError(null);
      //   // Redirect to a success page or any other logic
      //   history.push("/success");
      // }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
    }

    setProcessing(false);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  useEffect(() => {
    // Handle any additional setup or cleanup logic
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement
              options={{
                hidePostalCode: true,
              }}
              onChange={handleChange}
            />
          </div>

          <motion.button
            type="submit"
            disabled={processing || disabled || succeeded}
            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-lg my-2 hover:shadow-lg"
          >
            {processing ? "Processing..." : "Pay Now"}
          </motion.button>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-red-500 mt-2"
            >
              {error}
            </motion.div>
          )}

          {succeeded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-500 mt-2"
            >
              Payment successful! Redirecting...
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Payment;
