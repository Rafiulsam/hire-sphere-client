import React, { Suspense } from 'react';
import MyApplicationsList from './MyApplicationsList';
import useAuth from '../../Hooks/useAuth';
import { applicationPromise } from '../../api/applicationAPI';
import Loader from '../../components/Loader';


const MyApplications = () => {
    const { user } = useAuth()

    return (
        <div>
            <h1 className="text-4xl">My Applications</h1>
           <Suspense fallback={<Loader></Loader>}>
             <MyApplicationsList
                applicationPromise={applicationPromise(user.email)}
            ></MyApplicationsList>
           </Suspense>
        </div>
    );
};

export default MyApplications;