import "./post.css";
import {Link} from "react-router-dom"
// import {Image} from 'cloudinary-react'

export default function Post({ post }) {
  // const PF = "http://localhost:5000/images/";

  // const [imageIds, setImageIds] = useState();

  return (
      <div className="post">
         {post.photo && <img className="postImg" src={ `http://localhost:5000/images/${post.photo}` } alt=""/>} 
         {/* {post.photo && <Image 
         className="postImg" 
         cloudName="oliviastorage"
         publicId={imageId}
         alt=""/>}  */}
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
