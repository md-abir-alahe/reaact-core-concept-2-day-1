import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers (){
  const [users, setUsers] = useState([]);
  // useEffect(()=>{},[]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h3>Name : {props.name}</h3>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}



/* const products = [
  {name: 'laptop', price:53000},
  {name: 'phone', price:23000},
  {name: 'watch', price:3000},
  {name: 'tablet', price:10000},
  {name: 'PC', price:200000},
] */

/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}

<Product name="laptop" price="15000"></Product>
<Product name="laptop" price="150000"></Product>
<Product name="watch" price="1400"></Product> */


function Product(props){
  return(
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}


export default App;
