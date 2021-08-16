import Errors from './Errors'
import Post from './Post'
import Nav from 'react-bootstrap/Nav'

const Home = ({ errors }) => {





    return (
        <div>
            <Errors errors={errors} />
            
            <h1>Welcome to your homepage!</h1>
            <Post />
        </div>
    )

}
export default Home