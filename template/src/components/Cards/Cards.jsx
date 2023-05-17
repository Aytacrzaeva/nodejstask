// // import React, { useState, useEffect } from 'react';
// // import { BsFillTrash3Fill } from 'react-icons/bs';
// // import axios from 'axios';
// // import './Cards.css';

// // const Cards = () => {
// //     const [data, setData] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const response = await axios.get("http://localhost:8080/");
// //                 setData(response.data);
// //             } catch (error) {
// //                 console.error(error);
// //             }
// //         };

// //         fetchData();
// //     }, []);

// //     return (
// //         <div className="cards">
// //             {data.map((item, index) => (
// //                 <div className="card" key={index}>
// //                     <div className="card__img">
// //                         <img src={item.Image} alt="" />
// //                     </div>
// //                     <div className="card__body">
// //                         <h2>{item.name}</h2>
// //                         <p>${item.price}</p>
// //                     </div>
// //                     <div className="card__btn">
// //                         <button>Add to cart</button>
// //                         <button onClick={(e)=>{
// //                             e.preventDefault()
// //                             axios.delete(`http://localhost:8080/${item.id}`).then(res=>{
// //                                 setData(res.data)
// //                             })

// //                         }}><BsFillTrash3Fill /></button>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default Cards;



// import React, { useState, useEffect } from 'react';
// import { BsFillTrash3Fill } from 'react-icons/bs';
// import axios from 'axios';
// import './Cards.css';

// const Cards = ({ addProduct }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/');
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCart = (item) => {
//     addProduct(item);
//   };

//   const handleDelete = (item) => {
//     axios.delete(`http://localhost:8080/${item.id}`).then((res) => {
//       setData(res.data);
//     });
//   };

//   return (
//     <div className="cards">
//       {data.map((item, index) => (
//         <div className="card" key={index}>
//           <div className="card__img">
//             <img src={item.Image} alt="" />
//           </div>
//           <div className="card__body">
//             <h2>{item.name}</h2>
//             <p>${item.price}</p>
//           </div>
//           <div className="card__btn">
//             <button onClick={() => handleAddToCart(item)}>Add to cart</button>
//             <button onClick={() => handleDelete(item)}>
//               <BsFillTrash3Fill />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;
import React, { useState, useEffect } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import axios from 'axios';
import './Cards.css';

const Cards = ({ addProduct }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    addProduct(item);
  };

  const handleDelete = (item) => {
    axios.delete(`http://localhost:8080/${item.id}`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className="cards">
      
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card__img">
            <img src={item.Image} alt="" />
          </div>
          <div className="card__body">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
          <div className="card__btn">
            <button onClick={() => handleAddToCart(item)}>Add to cart</button>
            <button onClick={() => handleDelete(item)}>
              <BsFillTrash3Fill />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

