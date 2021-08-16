import Errors from './Errors'
import NewPost from './NewPost'
import Nav from 'react-bootstrap/Nav'
import { useEffect } from 'react'

const Home = ({ errors }) => {




    const fetchPosts = () => {
        
    }


    useEffect(fetchPosts)


    return (
        <div>
            <Errors errors={errors} />
            
            {/* <h1>Welcome to your homepage!</h1> */}
            <NewPost />
        </div>
    )

}
export default Home