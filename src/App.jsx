import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./LandingPage/Home";
import { Sports } from "./LandingPage/Sports";
import { News } from "./LandingPage/News";
import { Literary } from "./LandingPage/Literary";
import { Feature } from "./LandingPage/Feature";
import { Opinion } from "./LandingPage/Opinion";
import { DevelopmentalCommunication } from "./LandingPage/DevelopmentalCommunication";
import { ArticleDetail } from "./Components/ArticleDetail";
import { articlesData, dummyUsers } from "./Utils/Data";
import { Login } from "./AdminPanel/Login";
import { Dashboard } from "./AdminPanel/Dashboard";
import { ViewUsers } from "./AdminPanel/ViewUsers";
import { AddUser } from "./AdminPanel/AddUser";
import { ViewArticles } from "./AdminPanel/ViewArticles";


const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Opinion" element={<Opinion />} />
        <Route path="/Literary" element={<Literary />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ViewUsers" element={<ViewUsers />} />
        <Route path="/AddUsers" element={<AddUser />} />
        
        <Route path="/ViewArticles" element={<ViewArticles />} />
        <Route
          path="/DevelopmentalCommunication"
          element={<DevelopmentalCommunication />}
        />
        <Route
          path="/article/:articleId"
          element={<ArticleDetail articles={articlesData} />}
        />

        {/* Define the route for article details */}
        <Route path="/article/:articleId" element={<ArticleDetail />} />
      </Routes>
    </Fragment>
  );
};

export default App;
