
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
// [
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ]
  //const[name,setName]=useState('mario');
//runs each time the component renders


//manipulate state where it is placed
// const handleDelete=(id)=>{
//     //return those items that dont match id
// const newBlogs = blogs.filter(blog=>blog.id!==id);
//     setBlogs(newBlogs);

// }
    return ( <div className="home">
        {error && <div>{error}</div>}
        {isPending&& <div>Loading..</div>}
        {/* conditional templating */}
        {blogs && <BlogList blogs={blogs}  title="our blog website"/>}
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="marios blog website"/> */}
        
   
        {/* <button  onClick={()=>setName('phill')}>change name</button>
        <p>{name}</p> */}
    </div> );
}
 
export default Home;