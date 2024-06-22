import Swal from "sweetalert2";
import useTests from "../../../Hooks/useTests";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const TestList = () => {
const [test, ,refetch] = useTests();
const axiosSecure = useAxiosSecure();

const handelDelete =(item)=>{
    console.log("delelte")
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    .then( async(result) => {
      if (result.isConfirmed) {
       const res= await axiosSecure.delete(`/alltest/${item._id}`);
       console.log(res.data);
        if(res.data.deletedCount>0){
          refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
      }
    });
  
  }
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        {/* <th></th> */}
        <th>Image</th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {test.map(item=> <tr key={item._id}>
        <th><bttton onClick={()=>handelDelete(item)} className="btn text-xl"><MdDelete/></bttton>
</th>
<td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>{item.title}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td>
<Link to={`/dashboard/updatetest/${item._id}`}> <bttton className="btn text-xl">update</bttton></Link>           
 </td>

      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TestList;