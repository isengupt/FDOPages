import React, { useState } from 'react';
import Blogs from './components/Blogs'
import FieldPage from './components/FieldPage'
import Forums from './components/Forums'
import LearnPage from './components/LearnPage'
import Recordings from './components/Recordings'


const Resources = () => {
    return (
        <>
            <h1>Resources Page</h1>
            <Blogs />
            <FieldPage />
            <Forums />
            <LearnPage />
            <Recordings />
        </>
    )
}

export default Resources;