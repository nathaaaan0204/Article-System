import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '../Utils/Data';
// import axios from 'axios';

export const RecentArticles = () =>{
  const [recentArticles, setRecentArticles] = useState([]);


  useEffect(() => {
    // If using real backend data, replace the following with axios calls to your API endpoint.
    // In this example, we'll just use the dummy data for demonstration purposes.
    setRecentArticles(articlesData);
  }, []);

  return (
    <div className="px-52 py-12">
      <h2 className="text-2xl font-bold mb-4">Recent Articles</h2>
      
        {recentArticles.map((article) => (
             <Link to={`/recent-articles/${article.id}`} className="text-blue-600 hover:underline">
            

              
          <Card className="mt-5  shadow-none hover:bg-light-green-100">
      

           <CardBody className='flex flex-row  h-72 gap-10 p-0'>
           <img
               src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
               alt="card-image"
            className='rounded-xl'
             />
             <div className='flex flex-col gap-3 justify-center '>
            <Typography className="text-green font-bold uppercase">
               {article.category}
             </Typography>
             <Typography variant="h4" color="black">
               {article.title}
             </Typography>
             <Typography className="font-medium text-light-gray">
                {article.writer}
             </Typography>
             </div>
           
           </CardBody>
       
         </Card>
         </Link>
        ))}
      
    </div>
  );
}

export default RecentArticles;
