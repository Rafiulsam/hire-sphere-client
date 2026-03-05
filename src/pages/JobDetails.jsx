import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { title, company_logo, company, location, requirements, status, jobType, description, salaryRange }  = useLoaderData();

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default JobDetails;