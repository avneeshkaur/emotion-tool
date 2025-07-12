# Emotion Reflection Tool 😌🧠

A simple mobile-first web application that allows users to type a short reflection (e.g., "I feel nervous about my first job interview") and receive a mock emotion analysis in return. Built with React + TypeScript frontend and FastAPI backend.

## 🌐 Live Demo

👉 **[https://emotion-tool.vercel.app](https://emotion-tool.vercel.app)**

## 🔧 Technologies Used

- **Frontend**: React + TypeScript (Vite)
- **Backend**: FastAPI (Python)
- **Hosting**: Vercel (frontend), Render (backend)

## ✨ Features

- Clean, mobile-first UI design
- Textarea input with submit button
- Loading state while analyzing emotions
- Displays mock emotion analysis with confidence levels
- Dynamic backend routing with localhost support and fallback to Render
- Responsive design for all device sizes

## 🚀 Local Setup Instructions

### 📁 1. Clone the Repository

```bash
git clone https://github.com/avneeshkaur/emotion-tool.git
cd emotion-tool
```

### 💻 2. Start the Backend (FastAPI)

```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

✅ **Backend will be live at**: http://localhost:8000

### 🌐 3. Start the Frontend (React + TypeScript)

```bash
cd ../client
npm install
npm run dev
```

✅ **Frontend will be live at**: http://localhost:5173

## 🌍 Deployment

- **Backend**: Hosted on Render at https://emotion-tool.onrender.com/analyze
- **Frontend**: Hosted on Vercel at https://emotion-tool.vercel.app

## 📁 Project Structure

```
emotion-tool/
├── client/      # React + TypeScript frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
└── server/      # FastAPI backend
    ├── main.py
    ├── requirements.txt
    └── ...
```

## 🎯 How It Works

1. User enters their emotional reflection in the textarea
2. Application sends the text to the FastAPI backend
3. Backend processes the input and returns mock emotion analysis
4. Frontend displays the results with emotion type and confidence level
5. Clean, intuitive interface guides users through the process

## 📹 Optional Demo Video

If required, a short walkthrough video can be added here:
🔗 (Add Loom link here)

## 📩 Submission Checklist

- ✅ Code pushed to GitHub
- ✅ Live hosted version available
- ✅ README with setup instructions and explanation
- ⬜ Loom video (optional)

---

**Made with ❤️ by Avneesh Kaur**