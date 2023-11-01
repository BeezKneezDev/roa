import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send the data to an API or perform some other action
        console.log(formData);
        // Clear the form fields
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (

        <div className=' m-auto'>
            <h2 className=" text-white text-center text-5xl font-medium pb-4">Contact Us</h2>
            <div className=" w-[600px] mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-600">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 focus:outline-none focus:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
