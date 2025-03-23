"use client"

import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <div>
      <h1>title {post?.title}</h1>
      <p> body {post?.body}</p>
    </div>
  );
}
