# 🎵 Spotify Clone (MERN + Vite)

A full-stack music streaming application inspired by Spotify.  
Built with **React (Vite)**, **Express.js**, **MongoDB**, and **Cloudinary** for media storage.

---

## Features

-  **User Authentication** – JWT-based auth with role-based access control and **Joi** validation.  
-  **Secure Cookies** – httpOnly + cookie-parser integration.  
-  **Music Upload & Streaming** – Upload songs with **Multer** and store on **Cloudinary**.  
-  **User Library** – Save and fetch user’s favorite songs.  
-  **Modern UI** – React + Tailwind CSS for clean, responsive design.  
-  **API Integration** – Axios for secure API calls with proxy support.  

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- React Hot Toast (notifications)

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file upload)
- Cloudinary SDK
- CORS + Cookie Parser

---


## Setup & Installation

1. **Clone the repository**
   git clone https://github.com/your-username/spotify-project.git
   cd ./Spotify-Clone

2. **Install dependencies** (both frontend & backend)
   cd ./backend && npm install
   cd ../frontend && npm install
   
3. **Setup environment variables**
   
   - Backend
   PORT=8000
   MONGO_URI=your_mongo_connection
   JWT_SECRET=your_jwt_secret
   CLOUD_NAME=your_cloudinary_cloud
   CLOUD_API=your_cloudinary_api
   CLOUD_SECRET=your_cloudinary_secret
   FRONTEND_URL=your_frontend_url

   - frontend
   VITE_API_URL=http://localhost:8000

4. **Run the app in development**
   cd ./backend && npm run start
   cd ../frontend && npm run dev


