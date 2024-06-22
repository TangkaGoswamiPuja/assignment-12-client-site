import { useForm } from "react-hook-form";

const BannerUp = () => {
    const { register, handleSubmit,
        //  formState: { errors } , 
        reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
       
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control" >

                                <h2 className='text-3xl font-bold bg-orange-200 rounded-lg p-3 mt-3 mb-3'>Add Banner</h2>
                                <div className='grid gap-3 grid-cols-2 lg:grid-cols-3 grid-rows-3'>
 <div> <label htmlFor="image">Image URL:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="image" {...register("image", { required: true })} /> </div>

                                    <div> <label htmlFor="tourists_spot_name">Name:</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="tourists_spot_name" {...register("tourists_spot_name", { required: true })} /></div>

                                   

                                    <div>  <label htmlFor="description">Title:</label>
                                        <textarea className="textarea textarea-error" id="description" {...register("description", { required: true })}></textarea>
                                    </div>
 <div><label htmlFor="seasonality">Coupon Code Name</label> <br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="text" id="coupon_code" {...register("seasonality", { required: true })} /></div>

                                   

                                    <div><label htmlFor="total_visitors_per_year">Coupon Rate</label><br />
                                        <input className="input input-bordered input-error w-full max-w-xs" type="number" id="total_visitors_per_year" {...register("total_visitors_per_year", { required: true })} /></div>
                                       
        <br></br> 
        <div className='mb-3'> <button className='btn btn-error btn-outline' type="submit">Add</button></div>

 </div>




                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerUp;