import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';
import { Link } from 'react-router-dom';

const MyApplicationsList = ({ applicationPromise }) => {
    const applications = use(applicationPromise)

    if (applications.length === 0) {
        return (
            <div className='p-6 h-screen flex items-center justify-center'>   
                <h1 className='text-2xl text-center'>No applied jobs found</h1>
                
            </div>
        );
    }   

    return (
        <div className='p-6'>
            <h1 className='mb-10'>Applied jobs found: {applications.length}</h1>

            {/* application table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            applications.map((application, index) => <JobApplicationRow key={application._id} application={application} index={index} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplicationsList;