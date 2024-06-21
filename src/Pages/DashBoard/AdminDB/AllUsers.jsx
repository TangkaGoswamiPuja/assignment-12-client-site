import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[]} = useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
const res = await axiosSecure.get('/users')
return res.data;
        }
    })
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
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>print</th>
      </tr>
    </thead>
    <tbody>
      {users.map(item=> <tr key={item._id}>
        {/* <th><bttton onClick={()=>handelDelete(item._id)} className="btn text-xl"><MdDelete /></bttton> */}
{/* </th> */}
<th></th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        {/* <td>{item.time}</td> */}
        {/* <td><bttton className="btn text-xl"><IoPrint /></bttton></td> */}
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