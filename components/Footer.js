import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg mb-4">
          For any Registration Queries or any further queries please contact on the below details.
        </p>
        <p className="mb-2">Event Agency: +91 865646XXXX | eventopXX@gmail.com</p>
        <p className="mb-6">CEO Club India: +91 786565XXXX, +91 040830XXXX</p>

        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube />
          </a>
        </div>

        <p className="text-sm mt-6">&copy; 2024 CEO Club India. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
