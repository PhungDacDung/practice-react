import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Alert } from "react-bootstrap";



const PrivateRoutes = (props) => {
    console.log("check prop", props);
    const { user } = useContext(UserContext)

    if (user && !user.auth) {
        return (

            <Alert variant="danger" dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You don't have permission to acess this route. You need to login!
                </p>
            </Alert>



        )
    }

    return (
        <>
        {props.children}
        </>
    )
}

export default PrivateRoutes;