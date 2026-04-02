import React from 'react';
import { Link } from 'react-router-dom';

const JobApplicationRow = ({ application, index }) => {

    const { company, title, company_logo, location, jobId } = application;
    console.log(application);
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>Pending</td>
            <th>
                <Link to={`/jobs/${jobId}`}>
                    <button className="btn btn-ghost btn-xs">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default JobApplicationRow;