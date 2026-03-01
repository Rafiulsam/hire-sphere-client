import React from 'react';
import Banner from '../components/Banner';
import HotJobs from '../shared/HotJobs';

const Home = () => {

    const jobsPromises = fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .catch(error => console.error('Error fetching hot jobs:', error));
   
    return (
        <div>
            <Banner />
            <HotJobs jobsPromises={jobsPromises}/>
        </div>
    );
};

export default Home;