

const Errors = ({errors}) => {


    const renderErrors = () => {
        return errors.map(error => <p><br/>{error}</p>)
    }


    return(
        <div>
            {renderErrors()}
        </div>
    )

}

export default Errors