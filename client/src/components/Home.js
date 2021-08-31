//rafce
import Errors from './Errors'
import Post from './Post'

const Home = ({ currentUser, errors, posts, setPosts }) => {

    const generatePost = () => {
        // debugger;
        return posts.map(post => {
            return <Post key={post.id} post={post} setPosts={setPosts} posts={posts} errors={errors} currentUser={currentUser} />
        })
    }

    const handleAlpha = () => {
        fetch('/alpha')
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setPosts(data)
      })
    }


    return (
        <div>
            <Errors errors={errors} />
            <br />
            <br />
            <h6>Welcome to Blog App!  Feel free to create a post using the menu bar above.   Once a post is created, you can also edit a post by clicking on the Edit post tab to update your post.</h6>
            <br/>
            <button onClick={handleAlpha} >Alphabetize all posts</button>
            <br/>
            <br />
            {generatePost()}
            <br />
        </div>
    )
}
export default Home