import Swal from "sweetalert2";
import useTests from "../../../Hooks/useTests";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";

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
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {test.map(item=> <tr key={item._id}>
        <th><bttton onClick={()=>handelDelete(item)} className="btn text-xl"><MdDelete/></bttton>
</th>
        <td>{item.title}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        {/* <td><bttton className="btn text-xl"><IoPrint /></bttton></td> */}

      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TestList;