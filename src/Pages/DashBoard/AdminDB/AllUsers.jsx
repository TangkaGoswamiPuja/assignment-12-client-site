import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
const res = await axiosSecure.get('/users');
return res.data;
        }
    });
    // console.log(users);
const handelAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an admin now !`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
    })

}

    const handelDeleteUser =user=>{
        console.log("delelte")
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
           
            axiosSecure.delete(`/users/${user._id}`)
            .then(res =>{
              if(res.data.deletedCount>0){
              refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            })
          }
        });
      
      }

    return (
        <div>
            user list{users.length}
            <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>admin</th>
        <th>info</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index)=> <tr key={user._id}>
        <th><bttton onClick={()=>handelDeleteUser(user)} className="btn text-xl"><MdDelete /></bttton> 
 </th>
<th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            {user.role === 'admin'? 'Admin': <bttton onClick={()=>handelAdmin(user)} className="btn text-xl"><BsFillPeopleFill />
</bttton>}
</td>
        <td><bttton className="btn text-xl">view</bttton></td>

      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllUsers;