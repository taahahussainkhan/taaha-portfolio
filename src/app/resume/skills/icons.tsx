import React from 'react';

const Icons = () => {
    return (
        <div className="flex flex-wrap space-x-4">
            {/* SVGs */}
            <svg xmlns="http://www.w3.org/2000/svg" id="icon-1" className="w-12 h-12 text-gray-500 hover:text-[#E65100] transition-colors duration-300" viewBox="0 0 48 48">
                <path fill="currentColor" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="currentColor" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
            {/* Repeat the same SVG for additional icons */}
            {Array.from({ length: 15 }).map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-500 hover:text-[#E65100] transition-colors duration-300" viewBox="0 0 48 48">
                    <path fill="currentColor" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                    <path fill="currentColor" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                    <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                    <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                </svg>
            ))}
        </div>
    );
};

export default Icons;