import React from 'react';

const Loading = ( { loading } ) => {
    return (
        <div className="loading" style={{display: loading.isActive ? 'block' : 'none'}}>
            Loading...
        </div>
    );
};

export default Loading;