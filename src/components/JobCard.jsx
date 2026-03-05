import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {

    const {_id, title, company_logo, company, location, requirements, status, jobType, description, salaryRange } = job;
    return (
        <div className="card bg-base-200 w-96 shadow-sm hover:-translate-y-1.25 transition-transform duration-300  border border-gray-700 hover:border-blue-500">
            <div className='flex gap-4 p-4 items-center'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt={company} />
                </figure>
                <div>
                    <h3 className='text-2xl font-semibold'>{company}</h3>
                    <p className='text-gray-400 flex items-center gap-1'> <FaMapMarkerAlt /> {location}</p>
                </div>
            </div>
            <div className="card-body items-start">
                <div>
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-primary">{status}</div>
                    </h2>
                    <p className='text-gray-400 flex items-center gap-1'> <FaBriefcase /> {jobType}</p>
                </div>
                <p className='mt-2'>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((requirement, index) => (
                            <div key={index} className="badge badge-outline">{requirement}</div>
                        ))
                    }

                </div>
                <div className='w-full flex justify-between items-center mt-6'>
                    <h2 className='text-xl font-bold flex  text-blue-500 items-center'> <TbCurrencyTaka />{salaryRange.min}tk - {salaryRange.max}tk </h2>

                    <Link to={`/jobs/${job._id}`} className="btn btn-outline btn-primary">Apply Now</Link>
                </div>
            </div>

        </div>
    );
};

export default JobCard;