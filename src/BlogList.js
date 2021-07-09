import {Link} from "react-router-dom";
const BlogList = ({blogs,title}) => {
    // const blogs=props.blogs;
    // console.log(props);
    // console.log(blogs);
   
       
    return (
        <div className="blog-list">
            <h1>{title}</h1>
               {blogs.map(blog=>(
          <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
              </Link>
              {/* <button onClick={()=>{handleDelete(blog.id)}}>delete</button> */}
          </div>
      ))}
        </div>
      );
}
 
export default BlogList;