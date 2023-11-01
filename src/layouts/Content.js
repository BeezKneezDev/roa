import React, { useEffect, useState } from 'react';

const Content = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading time for demonstration purposes
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // Adjust the delay as needed
    }, []);

    return (
        <div
            className={`w-full h-full mx-auto  transition-opacity duration-1000 ease-in-out bg-container`}
            style={{
                backgroundImage: `url("images/bg-blue.jpg")`,
            }}
        >
            <div className="w-full h-full flex">
                <img
                    className={`logo-container h-full m-auto ${isLoaded ? 'scale-100' : 'scale-0' // Apply the scale class based on the loaded state
                        } transform transition-transform duration-1000 ease-in-out`}
                    src="images/logo.svg"
                    alt="Logo"
                />
            </div>
        </div>
    );
};

export default Content;
