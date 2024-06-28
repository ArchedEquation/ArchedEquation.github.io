const main = () => {
    const articles = Array.from(document.querySelectorAll("article"));
  
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add("reveal");
      }, index * 500);
    });
  };
  document.addEventListener("DOMContentLoaded", main);
  