import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage, {loader as articleLoader} from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import Layout from './Layout';
import FileNotFound from './pages/FileNotFound';

const routes = [{path: '/', element: <Layout />, errorElement: <FileNotFound />,
  children: [{path: '/', element: <HomePage />},
  {path: '/about', element: <AboutPage />},
  {path: '/articles/:name', element: <ArticlePage />, loader: articleLoader,},
  {path: '/articles', element: <ArticlesList />},
]
}]
;

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
};

export default App;
