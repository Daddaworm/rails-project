import Errors from './Errors'

const Home = ({ errors }) => {

    return(
        <div>
            <Errors errors={errors} />
            <h1>Welcome to your homepage!</h1>
        </div>
    )

}
export default Home