
import './App.css';
// import React, { useState } from 'react';


// export default function App() {
//   // const [count, setCount] = useState(4);
//   // const[theme, setTheme] = useState('light');
//   // function increment() {
//   //   setCount(prevCount => prevCount + 1);
//   //   setTheme( 'dark' );
//   // };
//   // function decrement(){
//   //   setCount(prevCount => prevCount- 1);
//   // };
//   return (
//     <>
//       {/* <button onClick={decrement}>-</button>
//        <span>{count}</span>
//        <span>{theme}</span>
//       <button onClick={increment}>+</button> */}
//     </>
//   );
// }

// export default App;

// import React, {useState,useEffect} from 'react';

// export default function App() {
//   const[resourceType, setResourceType] = useState('posts');
//   const[items, setItems] = useState([]);
//   console.log('render');

//   useEffect(() => {
//     console.log('resource changed');
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json =>setItems(json))},[resourceType]);
//   return (
//     <>
//       <div>
//        <button onClick={() => setResourceType('posts')}>Posts</button>
//       <button onClick={() => setResourceType('users')}>Users</button>
//       <button onClick={() => setResourceType('comments')}>Comments</button></div>
//       <h1>{resourceType}</h1>
//       {items.map(item => {
//         return <pre key={item.id}>{JSON.stringify(item)}</pre>
//       }
//       )}
//     </>
//   );
// }
 
// import React, {useState , useMemo, useEffect } from 'react';

// export default function App() { 
//     const [number, setNumber] = useState(0);
//     const [dark, setDark] = useState(false);
//     const doubleNumber = useMemo(()=>{ return  slowFunction(number)},[number]) ;
//     const themeStyle = {
//         backgroundColor: dark ? 'black' : 'white',
//         color: dark ? 'white' : 'black'
//     };
   
//     useEffect(() => {
//         console.log('Theme changed');
//     }
//     , [dark]);
//     return (
//         <>
//         <input
//             type="number"
//             value={number}
//             onChange={e => setNumber(parseInt(e.target.value))}
//         />
//         <button onClick={() => setDark(prevDark => !prevDark)}>
//             Change Theme
//         </button>
//         <div style={themeStyle}>{doubleNumber}</div>
//         </> ) }

//         function slowFunction(num) {
//             console.log('Calling slow function');
//             for (let i = 0; i <= 1000000000; i++) {}
//             return num * 2;
//         }

// import React, { useRef, useState , useEffect } from 'react';
 
// export default function App() { 
//     const [name , setName] = useState(''); 
//     const prevName = useRef('');

//     useEffect(() => {
//         prevName.current = name;
//     })
//     return (
// <>
//   <input value={name} onChange={e => setName(e.target.value)} />
//   <div>My name is {name} and it use to be {prevName.current}</div>   
    
// </>

//         ) }

// import React, { useContext, createContext } from 'react';

// const ThemeContext = createContext('light');

// function ThemeDisplay() {
//   const theme = useContext(ThemeContext);
//   return <p>Current theme: {theme}</p>;
// }

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <ThemeDisplay />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';

// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]); // Re-fetch if url changes

  return { data, loading, error };
}

// Using the custom Hook in a component
function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <p>Welcome, {data.name}!</p>;
}

export default App;