
import { useState, useEffect } from "react";
import carta from "@/data/carta.json";

const MenuSection = () => {


  const [isOpen, setIsOpen] = useState<string>('');

  

  const toggleOpen = (section:any) => {
    if(isOpen==section) setIsOpen('');
    else setIsOpen(section);
    
  };

  return (

    Object.entries(carta).map(([section, dishes]) => (
      <section key={section} className=" mt-2 w-[90%] mx-auto flex flex-col items-center cursor-pointer" onClick={() => toggleOpen(section)}>
        <h2 className={`py-2 w-full text-center text-2xl md:text-4xl font-serif font-black border-2 rounded-xl transition-colors duration-5000 border-secondary
          ${isOpen==section ? 'bg-secondary md:bg-background text-background md:text-secondary' : 'bg-background text-secondary' }`}
        >
          {section}
        </h2>
        
        {
          <ul className={`mt-2 px-5 w-full
            ${isOpen==section ? 'h-auto' : 'h-0 md:h-full overflow-hidden'}`}>
          {
            dishes.map((dish: any) => (   
              <li key={dish.nombre} className="text-md lg:text-lg font-serif font-bold text-secondary">
                <div className="flex justify-between">
                  <p className="overflow-hidden whitespace-nowrap" >{dish.nombre}</p>
                  <p >{dish.precio}€</p>
                </div>
                {dish.ingredientes && <p className="text-xs md:text-sm text-secondary">{dish.ingredientes}</p>}
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