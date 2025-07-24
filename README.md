# 🛒 Grocerin – E-commerce Grocery Platform

**Grocerin** is a modern full-stack e-commerce grocery web application that enables users to browse products, add them to the cart, place orders, and manage profiles. It also includes a powerful admin panel to manage products, categories, and users. Designed with a clean UI and built using modern technologies like React.js, Tailwind CSS, Node.js, and MongoDB.

---

## 🚀 Features

- 🔍 Product search with real-time filtering  
- 🛒 Add to Cart and Checkout functionality  
- 🔐 User Login and Signup system with JWT  
- 🧑‍💼 Admin Panel for product & user management  
- ☁️ Image upload using **Cloudinary**  
- 💬 Toast notifications for user actions  
- 📱 Fully responsive design using Tailwind CSS

---

## 🧰 Tech Stack

### Frontend:
- React.js  
- Tailwind CSS  
- Axios  
- React Router

### Backend:
- Node.js  
- Express.js  
- MongoDB (hosted on MongoDB Atlas)  
- Mongoose  
- JWT (Authentication)  
- Multer (File Upload)  
- Cloudinary (Image Hosting)

---

## 📁 Folder Structure

```bash
grocerin/
├── frontend/       # React.js app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
├── server/         # Node.js + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   └── index.js
