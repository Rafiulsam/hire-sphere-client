import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const AddJob = () => {
    const { user } = useAuth();

    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;

        // process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

        newJob.status = "active";

        console.log(newJob)

        // save job to the database
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This new Job has been saved and published.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2 className='text-4xl'>Please add a job</h2>
            <form className='mt-10 flex justify-center items-center mb-20' onSubmit={handleAddAJob}>
                <div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Job Title" />

                        <label className="label">Company</label>
                        <input type="text" name='company' className="input w-full" placeholder="Company Name" />

                        <label className="label">Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Company Location" />


                        <label className="label">Company logo</label>
                        <input type="text" name='company_logo' className="input w-full" placeholder="Company Logo URL" />
                    </fieldset>
                    <div className='flex gap-4'>
                        {/* Job Type */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend">Job Type</legend>
                            <div className="filter">
                                <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                                <input className="btn" type="radio" name="jobType" value="On-Site" aria-label="On-Site" />
                                <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
                                <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
                            </div>

                        </fieldset>

                        {/* Job Category */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend">Job Category</legend>

                            <select defaultValue="Job Category" name='category' className="select">
                                <option disabled={true}>Job Category</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                            </select>

                        </fieldset>
                        {/* Application Deadline */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend">Application Deadline</legend>

                            <input type="date" name='deadline' className="input" />

                        </fieldset>
                    </div>

                    {/* Salary Range */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div>
                                <label className="label">Minimum Salary</label>
                                <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="Select a Currency" name='currency' className="select">
                                    <option disabled={true}>Select a Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    {/* Job Description  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea w-full" name='description' placeholder="Job Description"></textarea>

                    </fieldset>

                    {/* Job Requirements  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Requirements</legend>

                        <textarea className="textarea w-full" name='requirements' placeholder="Requirements (separate by comma)"></textarea>

                    </fieldset>

                    {/* Job Responsibilities  */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Responsibilities</legend>

                        <textarea className="textarea w-full" name='responsibilities' placeholder="Responsibilities (separate by comma)"></textarea>

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">

                        <legend className="fieldset-legend">HR Related Info</legend>

                        <div className='flex gap-4'>
                            <div className='w-full'>
                                <label className="label">HR Name</label>
                                <input type="text" name='hr_name' className="input w-full" placeholder="HR Name" />
                            </div>


                            <div className='w-full'>
                                <label className="label">HR Email</label>
                                <input type="email" name='hr_email' defaultValue={user.email} className="input w-full" placeholder="HR Email" />
                            </div>
                        </div>
                    </fieldset>

                    <input type="submit" className='btn btn-primary w-full mt-5' value="Add Job" />
                </div>

            </form>
        </div>
    );
};

export default AddJob;