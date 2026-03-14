import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { _id, title, company, location, requirements, jobType, description, salaryRange, applicationDeadline, responsibilities, category } = useLoaderData();

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-10 mb-4'>
                <div>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <p className=' mt-2 text-xl text-gray-300'>{company}</p>
                    <p className='mt-4 text-lg text-gray-500 flex items-center gap-1'><FaMapMarkerAlt /> {location}</p>
                </div>
                <Link to={`/applyJob/${_id}`} >
                    <button className='btn btn-primary'>Apply Now</button>
                </Link>
            </div>

            <div className='p-10 flex '>
                <div className=' w-3/4'>
                    <h1 className='text-3xl font-semibold'>Overview</h1>
                    <p className='text-gray-300 mt-4 w-1/2'>{description}</p>

                    <h1 className='text-3xl font-semibold mt-10'>Responsibilities</h1>
                    <ul className='list-disc list-inside mt-4 text-gray-300'>
                        {responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>

                    <h1 className='text-3xl font-semibold mt-10'>Requirements</h1>
                    <ul className='list-disc list-inside mt-4 text-gray-300'>
                        {requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>

                <div className='mt-10 w-1/4 p-6 bg-gray-800 rounded-lg h-1/2'>
                    <h1 className='text-2xl font-semibold'>Additional Information</h1>
                    <div className="mt-6 ">
                        <p className='text-gray-500 '>Salary range</p>
                        <p className='text-xl text-gray-300 flex items-center gap-1 font-bold'><span><TbCurrencyTaka /> </span> {salaryRange.min}tk - {salaryRange.max}tk
                        </p>
                    </div>
                    <p className='text-gray-300 mt-10'><span className='font-bold'>Job Type:</span> {jobType}</p>
                    <p className='text-gray-300 mt-6'><span className='font-bold'>Category:</span> {category}</p>
                    <p className='text-gray-300 mt-6'><span className='font-bold'>Job Type:</span> {jobType}</p>
                    <p className='text-gray-300 mt-6'><span className='font-bold'>Application Deadline:</span> {applicationDeadline}</p>
                    <Link to={`/applyJob/${_id}`}>
                    <button className='btn btn-primary mt-10 w-full'>Apply for this job</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;