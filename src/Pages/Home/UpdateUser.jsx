import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { UpdateSingleUser } from "../../Componet/User/user";

const UpdateUser = () => {
const queryCient = useQueryClient()
const {id} = useParams()
const navigate = useNavigate()

  const UpdateUserMution = useMutation({
    mutationFn : UpdateSingleUser,
    onSuccess : ()=> {
        queryCient.invalidateQueries({queryKey : ['user']})
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User is Update",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
    }
  })

    const handleUserUpdateSubmit = (event)=> {
      event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const user = {
      name,
      title,
    };
    console.log(user);
    UpdateUserMution.mutate({id,...user})

    }

    return (
        <div>
        <form onSubmit={handleUserUpdateSubmit}>
          <div className="flex flex-col gap-6 mt-12 p-12 w-[500px]">
            <input
              placeholder="name"
              className="border-2   border-sky-500"
              type="text"
              name="name"
              id=""
            />
            <input
              placeholder="title"
              className="border-2 border-sky-500"
              type="text"
              name="title"
              id=""
            />
          </div>
          <input
            className="border-2 py-2 px-8 bg-green-400 text-white ml-12 rounded-md"
            type="submit"
            value="Edit"
          />
        </form>
      </div>
    );
};

export default UpdateUser;