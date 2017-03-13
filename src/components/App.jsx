import React from 'react';
import PostsHandler from '../containers/PostsHandler';
import MorePostsBtnHandler from '../containers/MorePostsBtnHandler';
import LoadingHandler from '../containers/LoadingHandler';

import '../index.css';

const App = () => (
    <div className="app">

        <PostsHandler />
        <MorePostsBtnHandler />
        <LoadingHandler />

    </div>
);

export default App;