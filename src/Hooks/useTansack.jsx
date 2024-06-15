import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTansack = () => {
    const axiosSecure = useAxiosSecure();
    const {user }= useAuth();
        const { refetch, data: slots = [] } = useQuery({
        queryKey:['slot', user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/slots?email=${user.email}`)
            return res.data;
        }

    })
    return [slots,refetch]
};

export default useTansack;