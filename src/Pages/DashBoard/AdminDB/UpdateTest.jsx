import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosOpen from "../../../Hooks/useAxiosOpen";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateTest = () => {
    const testItem = useLoaderData();
    const {title,short_description,price,date,time,slots,_id}=testItem;
    console.log(testItem);
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosOpen =useAxiosOpen();

    const onSubmit = async(data) => {
        console.log(data);
        const imageFile = {image:data.image[0]}
        console.log(imageFile)

const res = await axiosOpen.post(image_hosting_api,imageFile,{
    headers:{
        'content-type' : 'multipart/form-data'
    }

});

if(res.data.success){
    const testItem ={
        title: data.name,
        short_description:data.short_description,
price :parseFloat(data.price),
date:data.date,
time:data.time,
slots:data.slots,
image : res.data.data.display_url
    }
const testRes = await axiosSecure.patch(`/alltest/${_id}`,testItem);
console.log(testRes.data);
if(testRes.data.modifiedCount>0){
    reset();
    Swal.fire({
        title: 'Success!',
        text: 'You updated A Test Item',
        icon: 'success',
        confirmButtonText: 'Done'
    })
}
}
       
    }
    return (
        <div>
           <div>
 <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control" >

                                <h2 className='text-3xl font-bold bg-orange-200 rounded-lg p-3 mt-3 mb-3'>update test items: {title}</h2>
                                <div className='grid gap-3 grid-cols-1 lg:grid-cols-2'>



                                    <div> <label htmlFor="image">Image URL:</label><br />
                                        <input
type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" id="image" {...register("image", { required: true })} /> </div>

                                    <div> <label htmlFor="name">Test Name:</label><br />
                                        <input  defaultValue={title} className="input input-bordered input-error w-full max-w-xs" type="text" id="name" {...register("name", { required: true })} /></div>


                                    <div>  <label htmlFor="short_description">Details:</label><br />
                                        <textarea className="textarea textarea-error"  defaultValue={short_description} id="
short_description" {...register("short_description", { required: true })}></textarea>
                                    </div>

                                    <div><label htmlFor="price">Price:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="price"   defaultValue={price}{...register("price", { required: true })} /></div>

                                    <div><label htmlFor="date">Date:</label><br />
                                        <input  defaultValue={date} className="input input-bordered input-error w-full max-w-xs" type="text" id="date" {...register("date", { required: true })} /></div>

                                    <div><label htmlFor="time">Time:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="time"  defaultValue={time} {...register("time", { required: true })} /></div>

                                    <div><label htmlFor="slots">Slots:</label><br />
                                        <input 
                             defaultValue={slots}             className="input input-bordered input-error w-full max-w-xs" type="number" id="slots" {...register("slots", { required: true })} /></div>

                                    

                                </div>



                                <div className='mt-3'> <button className='btn btn-error btn-outline' type="submit">update</button></div>




                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateTest;