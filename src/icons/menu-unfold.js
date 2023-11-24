import * as React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from React Router

function IconMenuUnfold(props) {
    const location = useLocation(); // Get the current location from React Router

    // Check if the current route is '/about'
    const isAboutPage = location.pathname === '/about';

    // Define the color based on the route
    const iconColor = isAboutPage ? 'black' : 'currentColor';

    return (
        <svg
            viewBox="0 0 1024 1024"
            fill={iconColor}
            height="4em"
            width="4em"
            {...props}
        >
            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" />
        </svg>
    );
}

export default IconMenuUnfold;
