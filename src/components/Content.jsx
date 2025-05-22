import React, { useEffect, useState } from "react";
import Card from "./Card";

const Content = () => {
  const [posts, setPosts] = useState([]);
<div className="div"></div>
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => console.error(err));
    
  }, []);

  return (
    <section className="p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {posts.slice(0, 6).map((post, index) => (
        <Card key={post.id} post={post} allPosts={posts} />
      ))}
    </section>
  );
};

export default Content;
