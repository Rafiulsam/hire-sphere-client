import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import HotJobs from '../shared/HotJobs';
import Loader from '../components/Loader';

const Home = () => {

    const jobsPromises = fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .catch(error => console.error('Error fetching hot jobs:', error));

    return (
        <div>
            <Banner />
            <Suspense fallback={<Loader />}>
                <HotJobs jobsPromises={jobsPromises} />
            </Suspense>
        </div>
    );
};

export default Home;