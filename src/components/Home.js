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
 
    return (
        <div>
           <div className="d-flex ">
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item,index) => {
                        return (
                        
                            <div className="text-center" key={index}>
                                <img className="mx-3 my-3 rounded-circle" src={item.avatar}/>
                                <b><p>{item.first_name} {item.last_name}</p></b>
                            </div>
                            
                        )
                    })}
            </div>
        </div>
    )
}

export default Home;