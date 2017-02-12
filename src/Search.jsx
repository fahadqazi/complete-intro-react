import React from 'react';
import shows from '../public/data.json';

const Search = () => (
    <pre><code>
        {JSON.stringify(shows, null, 4)}
    </code></pre>
);

module.exports = Search