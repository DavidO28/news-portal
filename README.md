# Welcome to News Portal Application

A simple real-time news portal that dynamically displays articles without page reloading, powered by HTML, CSS, JavaScript, and a FastAPI backend. Includes an administrative endpoint to generate news articles.

## Project Structure
```
news-portal/
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
├── backend/
│   ├── main.py
├── README.md
```

## Features
- **Frontend**: Displays and adds news articles.
- **Backend**: FastAPI server with endpoints to fetch articles and generate new ones.
- **Real-Time Updates**: Articles added via the backend appear on the frontend without reloading.

## Setup, Installation and Running the Application

### Backend
1. Navigate to the backend directory:
   ```bash
   cd news-portal/backend
   ```
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn pydantic
   ```
3. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
   - The backend runs on `http://localhost:8000/articles` (returns `[]` initially).

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd news-article/frontend
   ```
2. Serve the frontend using a local server:
   ```bash
   python -m http.server 8080
   ```
   - Access the app at `http://localhost:8080/index.html`.

## API Endpoints
- **GET `/articles`**:
  - Returns a list of all articles.
  - Example: `curl http://localhost:8000/articles`
- **POST `/generate-article`**:
  - Generates a random news article and adds it to the list.
  - Example: `curl -X POST http://localhost:8000/generate-article`

## Notes
- Articles are stored in memory (reset on backend restart).

For further assistance, check backend logs (terminal running `main.py`) or browser console errors or just CONTACT ME :d.