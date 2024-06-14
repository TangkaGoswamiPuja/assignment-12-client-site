import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTansack = () => {
    const axiosSecure = useAxiosSecure();
    const { data: slots = [] } = useQuery({
        queryKey:['slot'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/slots')
            return res.data;
        }

    })
    return [slots]
};

export default useTansack;