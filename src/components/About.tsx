import * as React from 'react';

const About = ({match}: any) => {
    return (
        <div>About {match.params.name}</div>
    )
}

export default About;