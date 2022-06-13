import React, { useState} from 'react';


const Search = () => {

    const [count, setCount] = useState('');

    return (
        <div className="search">
            <input value={count} onInput={e => setCount(e.target.value)}/>
            <div className="search-out">{count}</div>
        </div>
    )
}
export default Search;