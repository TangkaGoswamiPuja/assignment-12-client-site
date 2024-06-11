import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AllTestCards from "./AllTestCards";

const AllTests = () => {
    const [tests ,setTest]=useState([]);
    const [search, setSearch] = useState('')

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const filterData = data.filter((test) => {
                console.log(search)
                return search === '' ? test : test?.date?.includes(search)
            })
            console.log(filterData);

            setTest(filterData)})
    },[search])

    return (
        <div>
             <Helmet>
               <title>| TESTS</title> 
            </Helmet>
            <div className='mt-5 max-w-4xl  mx-auto mb-5'>
                    <label className="input input-bordered border-purple-500 flex items-center gap-2">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
           <div className="grid grid-cols-2 gap-3 lg:grid-cols-3" >
           {tests.map(test=><AllTestCards
            key={test.title} test={test}></AllTestCards>)}
           </div>
        </div>
    );
};

export default AllTests;