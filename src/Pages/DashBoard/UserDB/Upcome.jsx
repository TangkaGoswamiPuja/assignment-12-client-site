import Swal from "sweetalert2";
import useTansack from "../../../Hooks/useTansack";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoPrint } from "react-icons/io5";

const Upcome = () => {
    const [slot, refetch] = useTansack()
    const axiosSecure = useAxiosSecure();
const handelDelete =(id)=>{
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
     
      axiosSecure.delete(`/slots/${id}`)
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
      {slot.map(item=> <tr key={item._id}>
        <th><bttton onClick={()=>handelDelete(item._id)} className="btn text-xl"><MdDelete /></bttton>
</th>
        <td>{item.title}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td><bttton className="btn text-xl"><IoPrint /></bttton></td>
        <td><bttton className="btn text-xl">view</bttton></td>

      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Upcome;