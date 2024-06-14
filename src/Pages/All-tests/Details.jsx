import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useTansack from "../../Hooks/useTansack";

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const {title,image,date,slots,short_description, _id,time,price} = details || {}
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
const axiosSecure = useAxiosSecure();
const [slot] = useTansack()
    const handleSlot = slot =>{
        if(user && user.email){
         console.log(slot, user.email);
         const slotItem = {
            slotId:_id,
            email: user.email,
            title,date,time, price
         }
         axiosSecure.post('/slots',slotItem)
         .then(res=>
            {console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your appontment has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
  })
    }
        // console.log(slot, user.email);
        else{
            Swal.fire({
                title: "you are not logged in ",
                text: "please login to book a appointment",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state:{from:location}})
                }
              }); 
        }

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-auto mb-5 mt-5">
  <figure><img className="w-1/2" src={image}alt={id}/></figure>
  <div className="card-body">
  <h2 className="card-title text-2xl font-semibold">{title}</h2>
    <p>{short_description}</p>
    <p >Date:<span className="bg-pink-400 rounded-sm p-1 font-bold">{date}</span></p>
    <p>Slots: <span className="bg-pink-400 rounded-sm p-1 font-bold">{slot.length}</span></p>
    <p>Time: <span className="bg-pink-400 rounded-sm p-1 font-bold">{time}</span></p>
    <p>Price: <span className="bg-pink-400 rounded-sm p-1 font-bold">{price}</span></p>

    <div className="card-actions justify-end">
      <button 
      onClick={()=>handleSlot(details)}
      className="btn btn-primary">book now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;