import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getAllUsers } from "../../Componet/User/user";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowAllUsers = () => {
    const queryClient = useQueryClient()

    const deleteUserMutation = useMutation({
        mutationFn : deleteUser,
        onSuccess : ()=> {
            queryClient.invalidateQueries({queryKey : ['user']})
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
        
    })

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

    const handlDeleteUser = (id)=> {
        deleteUserMutation.mutate(id)
       
    }




    return (
        <div className="p-12 text-center">
           {users?.result &&
      users.result.map((user, index) => (
        <div className="mb-8" key={index}>
      <Link to={`/singleUser/${user._id}`} >  <p className="bg-red-500  text-2xl ">{user.name}</p></Link>
     
    <button className="mt-6" onClick={()=> handlDeleteUser(user._id)} >Delete</button>
    <Link to={`/updateUser/${user._id}`}>
        <button className="ml-10 mt-6">Edit</button>
    </Link>
        </div>
      ))}
        </div>
    );
};

export default ShowAllUsers;