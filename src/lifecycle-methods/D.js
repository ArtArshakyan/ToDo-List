import React, { memo } from 'react';

function D(props) {
    console.log('D render');

    return (
        <h1>D component</h1>
    );
}

export default memo(D);