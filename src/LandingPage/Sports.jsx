import React, { Fragment } from 'react'
import { NavigationBar } from '../Components/NavigationBar'
import { articlesData } from '../Utils/Data';
import { Typography } from '@material-tailwind/react';

export const Sports = () => {
  const sportsArticles = articlesData.filter((article) => article.category === 'Sports');
  return (
    <Fragment>
      <NavigationBar/>
      <div className="flex flex-col items-center justify-center h-screen px-4 lg:px-32 lg:h-[70vh] bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <Typography variant="h2" className="text-center text-white">
          Exploring Knowledge, Empowering Minds: Name of Website
        </Typography>
        <Typography className="text-center text-white xl:w-9/12">
          Unlock a world of knowledge and insights at Schoolname. Dive into our curated collection of academic articles and
          research papers, empowering your quest for learning and discovery.
        </Typography>
    
      </div>
      <div>
      <h2>Sports Articles</h2>
      {sportsArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/* Add more article details here */}
        </div>
      ))}
    </div>
    </Fragment>
  )
}
