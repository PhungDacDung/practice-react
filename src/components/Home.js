import { fetchAllUser } from "./services/UserService";
import { useEffect, useState } from "react";



const Home = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getUsers(1)
    }, []);

    const getUsers = async (page) => {
        let res = await fetchAllUser(page)

        if (res && res.data) {
            setListUsers(res.data)
        }
    }
    console.log(listUsers);
    


    return (
        <>
           <div className="d-flex ">

           
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item) => {
                        return (
                            <>
                            <div className="text-center">
                                <img className="mx-3 my-3 rounded-circle" src={item.avatar}/>
                                <b><p>{item.first_name} {item.last_name}</p></b>
                            </div>
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default Home;