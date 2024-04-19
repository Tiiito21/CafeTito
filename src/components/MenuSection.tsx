
import { useState, useEffect } from "react";
import carta from "@/data/carta.json";



const MenuSection = ({ section, dishes }: any) => {


  const [isOpen, setIsOpen] = useState<string>('');

  const toggleOpen = (section:String) => {
    setIsOpen(section);
  };

  return (
    Object.entries(carta).map(([section, dishes]) => (
      <section key={section} className="mt-2 w-3/4 flex flex-col items-center cursor-pointer" onClick={() => toggleOpen(section)}>
        <h2 className={`py-2 w-full text-center text-2xl md:text-4xl font-serif font-black border-2 rounded-xl transition-colors duration-500 border-secondary ${isOpen==section ? 'bg-secondary text-background' : 'bg-background text-secondary' }`} >{section}</h2>
        
        {
          <ul className={`mt-2 px-5 w-full transition-all duration-100
            ${isOpen==section ? '' : 'scale-0 h-0'}`}>
          {
            dishes.map((dish: any) => (   
              <li key={dish.nombre} className="text-lg md:text-xl text-center font-serif font-bold text-secondary flex justify-between">
                <p className="overflow-hidden whitespace-nowrap" >{dish.nombre}</p>
                <p >{dish.precio}€</p>
              </li>
            ))
          }
        </ul>
        }
      </section>
    ))
  );
};


export default MenuSection;