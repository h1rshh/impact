'use client'
import React from 'react';
import styles from './AboveFooter.module.css';

const AboveFooter = () => {
    return (
        <div 
            className="min-h-screen bg-cover bg-center flex items-center justify-center" 
            style={{ backgroundImage: "url('')" }} // Ensure the background image path is set properly
        >
            <div className={`${styles.glass} max-w-md md:max-w-lg w-full p-12`}> 
                <h1 className="text-center text-3xl font-semibold text-black mb-6">Send Message</h1> 
                <p className="text-center text-black mb-8 text-lg">Please fill out the form below to send us a message.</p>

                <form>
                    {/* First Line: Name, Email */}
                    <div className="flex space-x-6 mb-6">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className={`${styles['glass-input']} w-1/2 p-4 rounded-lg placeholder-black`}
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className={`${styles['glass-input']} w-1/2 p-4 rounded-lg placeholder-black`} 
                        />
                    </div>

                    {/* Second Line: Phone, Address */}
                    <div className="flex space-x-6 mb-6">
                        <input 
                            type="text" 
                            placeholder="Phone Number" 
                            className={`${styles['glass-input']} w-1/2 p-4 rounded-lg placeholder-black`} 
                        />
                        <input 
                            type="text" 
                            placeholder="Your Address" 
                            className={`${styles['glass-input']} w-1/2 p-4 rounded-lg placeholder-black`}
                        />
                    </div>

                    {/* Third Line: Website */}
                    <div className="mb-8">
                        <input 
                            type="text" 
                            placeholder="Your Messsage" 
                            className={`${styles['glass-input']} w-full p-4 rounded-lg placeholder-black`}
                        />
                    </div>

                    {/* Button */}
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition duration-300" 
                        >
                            Register Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AboveFooter;
