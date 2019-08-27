import React from 'react';
import Image from './image';
import ResponsiveForm from './responsiveForm';
const second_section = (props) => {
    return (
        <section>
            <Image img={props.sec} />
            <ResponsiveForm res={props.sec} />
        </section>
    );
};

export default second_section;