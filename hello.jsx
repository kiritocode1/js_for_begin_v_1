
import React, { useState } from 'react';

const Hello = () => {
    const [Count, setCount] = useState(initialState);
    return (
			<>
				<div>{Count}</div>
				<button onclick={() => setCount((init_count) => init_count + 1)}>
					Click Me
				</button>
			</>
		);
}; 

export default Hello; 
