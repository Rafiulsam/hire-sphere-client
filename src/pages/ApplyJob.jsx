import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const ApplyJob = () => {

    const { id: jobId } = useParams()
    const { user } = useAuth();
    // console.log(jobId, user);

    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const portfolio = form.portfolio.value;

        // console.log(form, fullName, linkedIn, gitHub, portfolio);

        const applicationData = {
            jobId,
            applicantEmail: user?.email,
            fullName,
            linkedIn,
            gitHub,
            portfolio
        };
        console.log(applicationData);

        axios.post('http://localhost:5000/applications', applicationData)
            .then(response => {
                console.log('Application submitted successfully:', response.data);
                // Handle success (e.g., show a success message, redirect, etc.)
            })
            .catch(error => {
                console.error('Error submitting application:', error);
                // Handle error (e.g., show an error message)
            });

    }
    return (
        <div>
            <h1 className='text-4xl'>Apply for Job</h1>
            <form  className='mt-10 flex justify-center items-center mb-20' onSubmit={handleApply}>
                <fieldset className="fieldset bg-base-300 w-1/2 border-base-300 rounded-box border p-6">
                    <legend className="legend text-lg font-bold">Application Details</legend>
                    <label className="label">Full Name</label>
                    <input type="text" name="fullName" className="input w-full" placeholder="e.g: John Doe" />
                    <label className="label">LinkedIn Profile Link</label>
                    <input type="url" name="linkedIn" className="input w-full" placeholder="e.g: https://linkedin.com/in/yourname" />

                    <label className="label">GitHub Profile Link</label>
                    <input type="url" name="gitHub" className="input w-full" placeholder="e.g: https://github.com/yourname" />

                    <label className="label">Portfolio Link</label>
                    <input type="url" name="portfolio" className="input w-full" placeholder="e.g: https://your-portfolio.com    " />
                    <input type="submit" className='btn btn-primary mt-6 w-full' value="Submit Application" />       
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyJob;