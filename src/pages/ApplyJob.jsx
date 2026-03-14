import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ApplyJob = () => {

    const {id: jobId} = useParams()
    console.log(jobId);
    return (
        <div>
            <h1>Apply for: {jobId}</h1>
        </div>
    );
};

export default ApplyJob;