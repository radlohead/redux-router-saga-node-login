import * as React from 'react';
import JoinForm from './JoinForm';

const handleSubmit = (values: any): void => {
    console.log('submit', values);
}

const Join = () => {
    return (
        <>
            <JoinForm onSubmit={handleSubmit} />
        </>
    )
}

export default Join;