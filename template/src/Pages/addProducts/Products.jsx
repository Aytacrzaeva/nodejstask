// import React, { useState } from 'react';
// import axios from 'axios';

// const Products = ({ addProduct }) => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productData = { name, price, image };

//     try {
//       const response = await axios.post('http://localhost:8080/', productData);
//       const newProduct = response.data;
//       addProduct(newProduct);
//       setName('');
//       setPrice('');
//       setImage('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Price:
//         <input
//           type="text"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Image:
//         <input
//           type="text"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default Products;



import React, { useState } from 'react';
import axios from 'axios';
import './Products.css'
const Products = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, price, image };

    try {
      const response = await axios.post('http://localhost:8080/', productData);
      const newProduct = response.data;
      addProduct(newProduct);
      setName('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="form__contain">
    <form className='form' onSubmit={handleSubmit}>
      <h1>My New Products</h1>
      <label>
        Name:
        <br /><input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <br /><input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <br /><input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form></div></>
  );
};

export default Products;
