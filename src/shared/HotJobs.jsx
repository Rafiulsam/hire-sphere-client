import { use } from "react";


const HotJobs = ({jobsPromises}) => {

   const jobs = use(jobsPromises); 

    return (
        <div>           
            <h2 className="text-4xl text-center">Hot jobs of the years</h2>
            {jobs.length}
           
        </div>
    );
};

export default HotJobs;