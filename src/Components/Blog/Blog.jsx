import React from 'react';
import Hero from './Hero/Hero';
import BlogList from './BlogList/BlogList';


export const Blog = () => {
  return (
    <div className="Blog-page">
      <section id="hero"> <Hero /></section>
      <section id="BlogList"> <BlogList /></section>
    


    </div>
  );
};

export default Blog;
