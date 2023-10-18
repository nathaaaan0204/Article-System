import React, { Fragment } from "react";
import { NavigationBar } from "../Components/NavigationBar";
import { Button, Typography } from "@material-tailwind/react";

export const Feature = () => {
  return (
    <Fragment>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-screen px-4 lg:px-32 lg:h-[70vh] bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <Typography className="text-green font-bold uppercase">
               Feature
             </Typography>
        <Typography variant="h2" className="text-center text-white">
          Exploring Knowledge, Empowering Minds: Name of Website
        </Typography>
        <Typography className="text-center text-white xl:w-9/12">
          Unlock a world of knowledge and insights at Schoolname. Dive into our
          curated collection of academic articles and research papers,
          empowering your quest for learning and discovery.
        </Typography>
        
      </div>
    </Fragment>
  );
};
