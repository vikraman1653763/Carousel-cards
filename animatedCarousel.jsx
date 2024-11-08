import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./exx.css";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100vw' : '-100vw', 
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100vw' : '-100vw', 
    opacity: 0,
  }),
};


const wrap = (min, max, value) => {
  const range = max - min;
  return (((value - min) % range + range) % range + min);
};

const Exx = () => {
  const [page, setPage] = useState(0); 
  const [direction, setDirection] = useState(1);
  
  const cards = [
    { id: 1, content:"Card 1", color:'#e46e6e' },
    { id: 2, content:"Card 2", color:'#6ec2e4'},
    { id: 3, content:"Card 3", color:'#6ee47e' },
    { id: 4, content:"Card 4", color:'#dce46e' },
    { id: 5, content:"Card 5", color:'#e46ed4' },
  ];
  
  const cardIndex = wrap(0, cards.length, page);
  

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPage(page + newDirection);
    console.log(page)
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={() => paginate(-1)}>
        &#9664;
      </button>
      <div className="carousel">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {  type: "tween",
                ease: "easeInOut", duration: 1  
              }, 
              opacity: { duration: 1 }, 
            }}
            className="carousel-card"
            style={{backgroundColor:cards[cardIndex].color}}
          >
            <p>{cards[cardIndex].content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <button className="next-btn" onClick={() => paginate(1)}>
        &#9654;
      </button>
    </div>
  );
};

export default Exx;

// css for this code

// .carousel-container {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   overflow: hidden;
//   width: 100%; 
//   height: 1000px; 
//   background-color: #fff;
// }
// .carousel {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   position: relative;
// }

// .carousel-card {
//   width: 90vw;
//   height: 50vh;
//   border-radius: 1%;
//   text-align: center;
//   font-size: 24px;
//   background: #ddd;
//   border: 1px solid #ccc;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   position: absolute; 
// }



// .prev-btn,
// .next-btn {
//   background-color: #000;
//   color: #000000;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
// }

// .prev-btn {
//   left: 10px;
// }

// .next-btn {
//   right: 10px;
// }

// .prev-btn:hover,
// .next-btn:hover {
//   background-color: #0000004d;
//   border-radius: 50%;
// }
