import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const MyApplicationsList = ({ applicationPromise }) => {
    const applications = use(applicationPromise)
    return (
        <div>
            <h1>My Applications list: {applications.length}</h1>

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