const API_GET_URL = "http://localhost:8000/articles";
const API_POST_URL = "http://localhost:8000/generate-article";

const container = document.getElementById("article-container");
const generateArticleBtn = document.getElementById("generate-article-btn");

function createArticleHTML({ title, content }) {
  return `
        <div class="article">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;
}

async function fetchArticles() {
  container.innerHTML = "<p>Loading articles...</p>";
  try {
    const response = await fetch(API_GET_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const articles = await response.json();

    if (articles.length === 0) {
      container.innerHTML =
        "<p>No articles available in the DB, generate one.</p>";
      return;
    }

    container.innerHTML = articles.map(createArticleHTML).join("");
  } catch (error) {
    alert("Failed to fetch articles:", error);
  }
}

async function generateArticle() {
  generateArticleBtn.disabled = true;
  generateArticleBtn.textContent = "Generating...";

  try {
    const response = await fetch(API_POST_URL, {
      method: "POST",
    });

    if (!response.ok)
      throw new Error(`Error generating article: ${response.status}`);

    await fetchArticles();
  } catch (error) {
    alert("Failed to generate article. Check backend.", error);
  } finally {
    generateArticleBtn.disabled = false;
    generateArticleBtn.textContent = "Generate Article";
  }
}

generateArticleBtn.addEventListener("click", generateArticle);
