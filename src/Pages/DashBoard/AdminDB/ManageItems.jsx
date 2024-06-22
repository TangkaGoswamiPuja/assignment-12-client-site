import { useForm } from "react-hook-form";
import useAxiosOpen from "../../../Hooks/useAxiosOpen";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ManageItems = () => {
const axiosSecure = useAxiosSecure();
    const { register, handleSubmit , reset } = useForm();
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
        name: data.name,
        short_description:data.short_description,
price :parseFloat(data.price),
date:data.date,
time:data.time,
slots:data.slots,
image : res.data.data.display_url
    }
const testRes = await axiosSecure.post('/alltest',testItem);
console.log(testRes.data);
if(testRes.data.insertedId){
    Swal.fire({
        title: 'Success!',
        text: 'You Added A Test Item',
        icon: 'success',
        confirmButtonText: 'Done'
    })
}
}
console.log('with image',res.data);
        reset();
    }
    return (
        <div>
 <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control" >

                                <h2 className='text-3xl font-bold bg-orange-200 rounded-lg p-3 mt-3 mb-3'>Add test items</h2>
                                <div className='grid gap-3 grid-cols-1 lg:grid-cols-2'>



                                    <div> <label htmlFor="image">Image URL:</label><br />
                                        <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" id="image" {...register("image", { required: true })} /> </div>

                                    <div> <label htmlFor="name">Test Name:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="name" {...register("name", { required: true })} /></div>


                                    <div>  <label htmlFor="short_description">Details:</label><br />
                                        <textarea className="textarea textarea-error" id="
short_description" {...register("short_description", { required: true })}></textarea>
                                    </div>

                                    <div><label htmlFor="price">Price:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="price" {...register("price", { required: true })} /></div>

                                    <div><label htmlFor="date">Date:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="date" {...register("date", { required: true })} /></div>

                                    <div><label htmlFor="time">Time:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="time" {...register("time", { required: true })} /></div>

                                    <div><label htmlFor="slots">Slots:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="number" id="slots" {...register("slots", { required: true })} /></div>

                                    

                                </div>



                                <div className='mt-3'> <button className='btn btn-error btn-outline' type="submit">Add</button></div>




                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;