import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";
const useTests = () => {
const axiosOpen = useAxiosOpen();
    const { refetch, data: test = [], isPending: loading } = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            const res = await axiosOpen.get('/alltest');
            return res.data;
        }

    })
    return [test, loading, refetch]
}

export default useTests;