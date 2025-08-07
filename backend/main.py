from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_methods=["*"]
)

class Article(BaseModel):
    title: str
    content: str

articles: list[Article] = []

@app.get("/articles")
async def get_articles():
    return articles

@app.post("/generate-article")
async def generate_article():
    titles = [
        "Breaking News",
        "Tech News",
        "Around the world",
        "Village story"
    ]
    contents = [
        "New development in AI...",
        "Latest trend in tech...",
        "Global impact of pollution...",
        "Community responds to small village..."
    ]
    
    article = {
        "title": random.choice(titles),
        "content": random.choice(contents)
    }
    articles.append(article)
    return {"message": "Article created", "article": article}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)