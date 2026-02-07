<p align="center">
  <img src="Frontend/public/logo.png" alt="IntuitraGPT Logo" width="120" height="120"/>
</p>

<h1 align="center">🚀 IntuitraGPT</h1>

<p align="center">
  <em>Your Intelligent AI Companion — Powered by OpenAI, Built with Love</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/OpenAI-API-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI"/>
</p>

<p align="center">
  <a href="#-live-demo">View Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#️-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a> 
</p>

---

## 🌐 Live Demo

> 🔗 **[Click here to experience IntuitraGPT Live](_)**

---

## ✨ Features

IntuitraGPT isn't just another chatbot — it's a **fully-featured AI conversational experience** designed to feel intuitive, secure, and delightfully responsive.

### 🎯 Core Capabilities

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Conversations** | Seamlessly integrated with OpenAI's cutting-edge GPT models for intelligent, context-aware responses |
| 💬 **Persistent Chat Threads** | Your conversations are saved and organized — pick up right where you left off |
| 🔐 **Secure Authentication** | Industry-standard JWT authentication with bcrypt password hashing |
| 🌗 **Dark/Light Mode** | Beautiful theme toggle with system preference detection |
| 📱 **Responsive Design** | Flawless experience across desktop, tablet, and mobile devices |
| ⚡ **Real-time Updates** | Instant message delivery with elegant loading animations |

### 🛡️ Security & Authentication

- **JWT Token-Based Auth** — Secure, stateless authentication with 7-day token expiry
- **bcrypt Password Hashing** — Military-grade password encryption
- **Protected Routes** — Unauthorized users are automatically redirected
- **Session Persistence** — Stay logged in across browser sessions

### 💅 User Experience

- **Auto-Scroll Messages** — New messages smoothly scroll into view
- **Markdown Rendering** — AI responses support rich text formatting with syntax highlighting
- **Chat History Sidebar** — Browse and switch between conversation threads effortlessly
- **One-Click Delete** — Clean up old conversations instantly
- **Personalized User Profile** — Your initials displayed in the navbar

---

## 🛠️ Tech Stack

<table>
<tr>
<td>

### Frontend
- ⚛️ **React 19** — Latest React with hooks
- 🚦 **React Router v7** — Client-side routing
- 📝 **React Markdown** — Rich text rendering
- 🎨 **CSS3** — Custom styling with CSS variables
- ⚡ **Vite** — Lightning-fast dev server

</td>
<td>

### Backend
- 🟢 **Node.js** — JavaScript runtime
- 🚀 **Express 5** — Web framework
- 🍃 **MongoDB** — NoSQL database
- 🔐 **JWT** — Secure authentication
- 🤖 **OpenAI SDK** — GPT integration

</td>
</tr>
</table>

---

## 📁 Project Structure

```
IntuitraGPT/
├── 📂 Frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/     # Reusable components
│   │   ├── 📂 pages/          # Auth pages (Login, Register)
│   │   ├── App.jsx            # Main application
│   │   ├── AuthContext.jsx    # Authentication state
│   │   ├── ThemeContext.jsx   # Theme management
│   │   ├── ChatWindow.jsx     # Main chat interface
│   │   ├── Sidebar.jsx        # Chat history sidebar
│   │   └── Chat.jsx           # Message display
│   └── 📂 public/             # Static assets
│
├── 📂 Backend/
│   ├── 📂 routes/
│   │   ├── auth.js            # Authentication endpoints
│   │   └── chat.js            # Chat & thread endpoints
│   ├── 📂 models/
│   │   ├── User.js            # User schema
│   │   └── Thread.js          # Chat thread schema
│   ├── 📂 middleware/
│   │   └── authMiddleware.js  # JWT verification
│   ├── 📂 utils/
│   │   └── openai.js          # OpenAI API helper
│   └── server.js              # Express server entry
│
└── README.md
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or Atlas cluster)
- **OpenAI API Key**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PurvaSJadhav/IntuitraGPT.git
cd IntuitraGPT
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_super_secret_jwt_key
```

Start the backend server:

```bash
npm run dev
# or
node server.js
```

### 3️⃣ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### 4️⃣ Open in Browser

Navigate to `http://localhost:5173` and start chatting! 🎉

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Create new account |
| `POST` | `/api/auth/login` | User login |
| `GET` | `/api/auth/me` | Get current user |

### Chat & Threads

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/thread` | Get all user threads |
| `GET` | `/api/thread/:threadId` | Get specific thread |
| `POST` | `/api/chat` | Send message & get AI response |
| `DELETE` | `/api/thread/:threadId` | Delete a thread |

---

<p align="center">
  <em>Login Page • Chat Interface • Dark Mode • Mobile View</em>
</p>

<p align="center">
  <b>Crafted with 💜 by Purva Jadhav</b>
</p>

<p align="center">
  <em>IntuitraGPT © 2026 — All Rights Reserved</em>
</p>

<p align="center">
  <strong>⭐ If you found this project helpful, please give it a star! ⭐</strong>
</p>
