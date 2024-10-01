'use client'
import React, { useState } from 'react';

const FAQ = () => {
  // State to manage which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the open question
  const toggleQuestion = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <div className="bg-white p-6 mx-4 my-10 rounded-lg shadow-lg">
      {/* FAQ Section */}
      <h2 className="text-3xl font-bold text-center text-black mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {/* Question 1 */}
        <div>
          <h3
            onClick={() => toggleQuestion(1)}
            className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition-colors"
          >
            Currently there are two Payment Options:
          </h3>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openQuestion === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="mt-2 text-black">
              Bank Account Details: 
              <br /> Name of Bank: XYZ Bank
              <br /> IFSC Code: XYZ12345
              <br /> Account Number: 1234567890
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Question 2 */}
        <div>
          <h3
            onClick={() => toggleQuestion(2)}
            className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition-colors"
          >
            What is the Cancellation Policy?
          </h3>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openQuestion === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="mt-2 text-black">
              Cancellations are allowed up to 7 days before the event with a full refund.
              After that, no cancellations will be accepted.
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Question 3 */}
        <div>
          <h3
            onClick={() => toggleQuestion(3)}
            className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition-colors"
          >
            What is the Refund Policy?
          </h3>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openQuestion === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="mt-2 text-black">
              Refunds will be processed within 14 working days after the cancellation has been confirmed.
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Question 4 */}
        <div>
          <h3
            onClick={() => toggleQuestion(4)}
            className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition-colors"
          >
            How do I register once I have made payment through direct bank transfer?
          </h3>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openQuestion === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="mt-2 text-black">
              Once the payment is completed, email your transaction receipt to payments@event.com, and you will receive a registration confirmation.
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Question 5 */}
        <div>
          <h3
            onClick={() => toggleQuestion(5)}
            className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition-colors"
          >
            How do I claim GST input?
          </h3>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openQuestion === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="mt-2 text-black">
              You can claim GST input by providing your GST details during registration or after the event by contacting the finance department.
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
