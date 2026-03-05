import { use } from "react";
import JobCard from "../components/JobCard";


const HotJobs = ({ jobsPromises }) => {

    const jobs = use(jobsPromises);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-semibold mt-20">Hot jobs of the year</h2>
                <p className="mt-3 text-gray-400">Search and connect with the right candidates faster</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
                {
                    jobs.map(job => (
                        <JobCard key={job._id} job={job} />
                    ))
                }
            </div>

        </div>
    );
};

export default HotJobs;