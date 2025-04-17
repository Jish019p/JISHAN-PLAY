
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

import React, { useRef, useState , useEffect } from 'react';
 
export default function App() { 
    const [name , setName] = useState(''); 
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name;
    })
    return (
<>
  <input value={name} onChange={e => setName(e.target.value)} />
  <div>My name is {name} and it use to be {prevName.current}</div>   
    
</>

        ) }