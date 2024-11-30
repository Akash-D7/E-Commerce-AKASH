# E-Commerce-AKASH

A full-stack mini e-commerce platform built using React.js, Node.js, Express, and MongoDB. This project provides a seamless shopping experience with dynamic product display, real-time cart updates, and user-friendly notifications.

---

## Features

- **Product Management**:  
  - Retrieve products from the MongoDB database and display them dynamically on the frontend.  
  - Delete products, ensuring they no longer display in the frontend view.

- **Shopping Cart**:  
  - Add products to the cart and calculate the total amount.  
  - Real-time cart updates with intuitive user notifications, such as *"Item added to cart"* and *"Order placed successfully"*.

- **Search Functionality**:  
  - Search for products by name using a convenient search bar.

- **Product Details Page**:  
  - Displays individual product details with a carousel-like image navigation feature, similar to Amazon.

- **Responsive Design**:  
  - Optimized for all device screen sizes for an enhanced user experience.

---

## Tech Stack

### Frontend
- **React.js**: Component-based UI development.
- **CSS**: Styled components and layout.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: RESTful API development.

### Database
- **MongoDB**: Product and cart data storage.

---

## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Akash-D7/E-Commerce-AKASH.git
   cd E-Commerce-AKASH
   
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Start backend server
cd backend
npm start

# Start frontend server
cd ../frontend
npm start

