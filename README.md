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

# ⚙️ Getting Started

##🔧 Clone the Project

git clone https://github.com/Shubham-kumawat/grocerin.git
cd grocerin

---

## 🖥️ Frontend Setup

- cd frontend
- npm install
- npm run dev
- App will start at: http://localhost:5173

---

## 🌐 Backend Setup

- cd server
- npm install
- npm run server
- Server will run at: http://localhost:5000

---

## 📦 Required Modules
### Frontend

- npm install react react-dom react-router-dom axios tailwindcss postcss autoprefixer react-hook-form yup @hookform/resolvers react-icons react-toastify
 -Also initialize Tailwind:

 -npx tailwindcss init -p

---

### Backend

- npm install express mongoose dotenv cors jsonwebtoken multer cloudinary
- npm install --save-dev nodemon
- Set script in package.json (backend):

---

### json

"scripts": {
  "server": "nodemon index.js"
}

---

### 🔐 Environment Variables
- Create a .env file in /server directory and add:


- PORT=5000
- MONGO_URI=your_mongodb_atlas_url
- JWT_SECRET=your_jwt_secret
- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_API_KEY=your_api_key
- CLOUDINARY_API_SECRET=your_api_secret

---

## 🌍 Live Demo
🔗 https://grocerin-ux6p.vercel.app/

