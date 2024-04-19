
import { useState } from "react";

const MenuSection = ({ section, dishes }: any) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="mt-2 mx-5 flex flex-col items-center cursor-pointer" onClick={toggleOpen}>
      <h2 className={`py-2 min-w-80 md:min-w-[40rem] text-center text-2xl md:text-6xl font-serif font-black border-2 rounded-xl border-secondary ${isOpen ? 'bg-secondary text-background' : 'bg-background text-secondary' }`} >{section}</h2>
      
      {
        isOpen && <ul className="mt-5 transition-all ease-in-out">
        {
          dishes.map((dish: any) => (   
            <li key={dish.nombre} className="text-lg md:text-3xl text-center font-serif font-bold text-secondary/80">{dish.nombre}</li>
          ))
        }
      </ul>
      }
    </section>
  );
};


export default MenuSection;