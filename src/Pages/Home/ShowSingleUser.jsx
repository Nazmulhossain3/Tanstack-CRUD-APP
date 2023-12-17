import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../Componet/User/user";
// import { Bars } from "react-loader-spinner";

const ShowSingleUser = () => {
const {id} = useParams()
const {isLoading,data:user} = useQuery({
    queryKey : ['user',id],
    queryFn : ()=> getSingleUser(id)
})

// if(isLoading){
//     return <Bars
//     height="80"
//     width="80"
//     color="#4fa94d"
//     ariaLabel="bars-loading"
//     wrapperStyle={{}}
//     wrapperClass=""
//     visible={true}
//   />
// }

    return (
        <div>
             <div className="p-12 text-center">
          
             {user?.singleUser &&
          user.singleUser.map((user, index) => (
            <div key={index}>
              <p className="bg-red-500 text-2xl">{user.title}</p>
            </div>
          ))}
      
   
        </div>
        </div>
    );
};

export default ShowSingleUser;