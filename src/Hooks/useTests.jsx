// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useTests = () => {
    // const [test,setTest]=useState([]);
    // const [loading,setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch('https://doc-server-site.vercel.app/alltest')
    //     .then(res=>res.json())
    //     .then(data=>{
    //          setTest(data);
    //         setLoading(false);
    //     })

    // },[])
    const axiosOpen = useAxiosOpen();
    // const {user }= useAuth();
        const { refetch, data: test = [] ,isPending:loading} = useQuery({
        queryKey:['test'],
        queryFn:async ()=>{
            const res=await axiosOpen.get('/alltest');
            return res.data;
        }

    }) 
    return [test , loading ,refetch] 
}

export default useTests;