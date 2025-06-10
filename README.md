# 🛍️ E-Commerce Website

A full-featured e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **JWT-based authentication**, **Redis** for session management, and responsive **Tailwind CSS** UI.

## 🚀 Features

- 🔐 **User Authentication**
  - JWT access and refresh tokens (stored in HttpOnly cookies)
  - Role-based access control (Admin/User)

- 📦 **Product Management**
  - Add, delete products (admin only)
  - Product details, categories

- 🛒 **Cart & Checkout**
  - Add/remove items from cart
  - Order creation and history
  - Stripe payment gateway integration

- ⚙️ **Admin Panel**
  - Manage users, products
  - Manage Featured Products

- 🖼️ **Cloud Image Uploads**
  - Cloudinary integration for storing product and user images

- ⚡ **Optimizations**
  - Responsive UI with Tailwind CSS
  - Backend rate limiting and Redis-based token/session store

## 🛠️ Tech Stack

**Frontend**:
- React
- React Router DOM
- Axios
- Tailwind CSS
- Zustand (state management)
- Framer Motion (animations)
- React Hot Toast (toast notifications)
- React Confetti (visual effects)
- Lucide React  (icons)
- @stripe/stripe-js (Stripe integration)

**Backend**:
- Node.js
- Express.js 
- MongoDB + Mongoose 
- JSON Web Tokens (JWT) 
- Redis with ioredis
- Bcrypt.js (password hashing)
- Cloudinary (image upload)
- Stripe (payment processing)
- dotenv 
- Cookie-Parser 

### Clone the repository

```bash
git clone https://github.com/rahulvij020/E-Commerce-Website.git
cd E-Commerce-Website
