import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios"

export default function Homepage() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const res = await axios.get("/api/posts" + search)
        setPosts(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchPosts()
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
