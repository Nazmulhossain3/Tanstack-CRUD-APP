import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../Componet/User/user";
import Swal from "sweetalert2";

const PostForm = () => {
   const queryQlient = useQueryClient()
    const createUserMutation = useMutation({
        mutationFn : createUser,
        onSuccess :()=> {
          queryQlient.invalidateQueries({queryKey : ['user']})
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        },

    })


  const handleUserSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const user = {
      name,
      title,
    };
    console.log(user);

    createUserMutation.mutate({
      ...user
    })


  };

  

  return (
    <div>
      <form onSubmit={handleUserSubmit}>
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
          value="Submit"
        />
      </form>
    </div>
  );
};

export default PostForm;
