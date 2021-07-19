import "./post.css";
import {Link} from "react-router-dom"

export default function Post({ post }) {
  // const PF = "http://localhost:5000/images/";
  // const PDF = "../../../../images/";
const PDF = "https://github.com/Oliviapark113/blog_mern_app/blob/main/images/"
  
https://github.com/Oliviapark113/blog_mern_app/blob/main/images/1626560699489image-1.jpeg?raw=true
  return (
  
      <div className="post">
         {/* {post.photo && <img className="postImg" src={ `../../../../images/${post.photo}` } alt=""/>}   */}
         {/* {post.photo && <img className="postImg" src={ PDF + post.photo+"?raw=true"} alt=""/>}   */}
         {post.photo && <img className="postImg" 
          src={`https://github.com/Oliviapark113/blog_mern_app/blob/main/images/${post.photo}?raw=true`}
         alt=""/>}  
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map(c=>(
                 <span className="postCat">
                 {c.name}
               </span>
            ) )}      
          </div>
          <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
           {post.title}
          </span>
          </Link>
          <hr/>
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
         {post.desc}
      </p>
      </div>
  );
}
