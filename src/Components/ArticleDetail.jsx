import React from 'react';
import { useParams } from 'react-router-dom';

export const ArticleDetail = ({ articles }) => {
  const { articleId } = useParams();

  // Find the requested article by articleId
  const article = articles.find((article) => article.id === Number(articleId));

  // Check if the article exists
  if (!article) {
    // If the article is not found, you can display a message or redirect to a 404 page.
    return (
      <div>
        <h2>Article not found</h2>
      </div>
    );
  }

  // Render the article details
  return (
    <div>
      <img src={article.imagesrc} alt="Article" />
      <h1 className='text-green'>{article.title}</h1>
      <p>{article.description}</p>
      <p>Published on: {article.publicationDate}</p>
      <p>Writer: {article.writer}</p>
    </div>
  );
};
