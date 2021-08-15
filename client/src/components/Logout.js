import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({ setCurrentUser }) => {

    const history = useHistory()

    useEffect(() => {
        let config = {
            method: 'DELETE'
        }

        fetch('/logout', config)
        setCurrentUser(null)
        history.push('/login')
    })

    return(
        <div>
            <h1>Logging out...</h1>
        </div>
    )
}

export default Logout