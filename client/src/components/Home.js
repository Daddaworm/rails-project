//rafce
import Errors from './Errors'
import Post from './Post'

const Home = ({ currentUser, errors, posts, setPosts }) => {

    const generatePost = () => {
        // debugger;
        console.log(posts, 'Home line 12')
        return posts.map(post => {
            return <Post key={ post.id } post={ post } setPosts={ setPosts } posts={ posts } errors={ errors } currentUser={ currentUser } />
        })
    }

    return (
        <div>
            <Errors errors={ errors } />
            <br/>
            <h6>Welcome to Blog App!  Feel free to create a post using the menu bar above.   Once a post is created, you can also edit a post by clicking on the Edit post tab to update your post.</h6>
            <br/>
            { generatePost() }
            <br/>
            {/* <h1>Welcome to your homepage!</h1> */}
            {/* <NewPost /> */}
        </div>
    )
}
export default Home