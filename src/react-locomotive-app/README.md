# React Locomotive Scroll App

## Description
This project is a React application that utilizes the Locomotive Scroll library to create smooth scrolling effects.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-locomotive-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## How to Use Locomotive Scroll

1. In your component (e.g., `src/components/index.jsx`), import React and the `useEffect` hook.
2. Use the `useEffect` hook to dynamically load the Locomotive Scroll library and its CSS:
   ```jsx
   useEffect(() => {
     const script = document.createElement("script");
     script.src = "https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js";
     script.async = true;
     document.body.appendChild(script);

     const link = document.createElement("link");
     link.rel = "stylesheet";
     link.href = "https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css";
     document.head.appendChild(link);

     script.onload = () => {
       const scroll = new LocomotiveScroll({
         el: document.querySelector('[data-scroll-container]'),
         smooth: true,
         multiplier: 1,
         class: 'is-revealed'
       });
     };

     return () => {
       document.body.removeChild(script);
       document.head.removeChild(link);
     };
   }, []);
   ```

3. Ensure that your main container has the attribute `data-scroll-container`.

## License
This project is licensed under the MIT License.