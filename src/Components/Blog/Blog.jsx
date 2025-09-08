import React from 'react';
import Hero from './Hero/Hero';
import BlogList from './BlogList/BlogList';
import Categories from './Categories/Categories'

export const Blog = () => {
  return (
    <div className="Blog-page">
      <section id="hero"> <Hero /></section>
      <section id="BlogList"> <BlogList /></section> 
      <section id="categories"> <Categories /></section>
    


    </div>
  );
};

export default Blog;
