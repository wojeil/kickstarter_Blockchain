import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import React from 'react';

export default ()=> {
    return (
        <div>
            <h1>
                Im a header 
            </h1>
            {props.children}
            <h1>
                Im a Footer
            </h1>
        </div>
    )
};