import React from 'react'
import './post.css';
import Blogpost from '../../Components/Blogpost/blogpost';
import Layout from '../../Components/Layout';

/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
    <section className="container">

    
    <Blogpost />
    
    
    <Layout />

    </section>
   )

 }

export default Post