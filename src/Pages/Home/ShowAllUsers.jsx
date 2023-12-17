import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../Componet/User/user";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";

const ShowAllUsers = () => {

    const {isLoading,data : users} = useQuery({
        queryKey : ['user'],
        queryFn : getAllUsers
    })
    console.log(users);
    if(isLoading){
        return <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }

    return (
        <div className="p-12 text-center">
           {users?.result &&
      users.result.map((user, index) => (
        <div key={index}>
      <Link to={`/singleUser/${user._id}`} >  <p className="bg-red-500 text-2xl ">{user.name}</p></Link>
        </div>
      ))}
        </div>
    );
};

export default ShowAllUsers;