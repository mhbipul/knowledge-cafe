import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([]);
    //this is not the best way to show all data
    const [dataLength,setDataLength] = useState(4);



    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className='text-center'>
                <h2 className="text-6xl">Featured Jobs :{jobs.length} </h2>
                <p className='text-center'>Explore thousands of opportunities with all the information that you need. </p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className={dataLength=== jobs.length ?'hidden' : 'text-center my-5'}>
                <button className='btn btn-primary '
                onClick={()=>{setDataLength(jobs.length)}} >
                    Show All Jobs 
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;