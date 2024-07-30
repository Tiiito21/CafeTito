
import { useState, useEffect } from "react";

const MenuSection = () => {


  const [isOpen, setIsOpen] = useState<string>('');
  const [carta, setCarta] = useState<Object|null>(null);


  useEffect(() => {
    fetch('https://api.elcafetito.es/getMenu')
    .then(response => response.json())
    .then(data => {
      // Aquí puedes trabajar con los datos recibidos
      setCarta(data);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  const toggleOpen = (section:any) => {
    if(isOpen==section) setIsOpen('');
    else setIsOpen(section);
    
  };

  
  return (

    !carta ? <div><h1>Cargando Menu</h1></div> :
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
              section === 'Hamburguesas' &&
              <li className="grid grid-cols-2 justify-center">
                <div className="w-full"></div>
                <div className="grid grid-flow-col grid-cols-3 w-full text-center text-secondary font-bold text-md ml-4">
                  <p>Pollo</p>
                  <p>Ternera</p>
                  <p>Buey</p>
                </div>
              </li>
            }
            {
              section === 'Montaditos' &&
              <li className="grid grid-cols-2 justify-center">
                <div className="w-full"></div>
                <div className="grid grid-flow-col grid-cols-2 w-full text-center text-secondary font-bold text-md ml-4">
                  <p>Montado</p>
                  <p>Bocadillo</p>
                </div>
              </li>
            }
          {  
            dishes.map((dish: any) => (   
              <li key={dish.nombre} className="text-md lg:text-lg font-serif font-bold text-secondary mb-2">
                <div className="grid grid-cols-2 justify-center">
                  <div className="flex flex-col w-full">
                    <p className="text-sm md:text-md whitespace-nowrap mb-1" >{dish.nombre}</p>
                    {dish.descripcion && <p className="pl-5 text-xs md:text-sm text-secondary">{dish.descripcion}</p>}
                  </div>

                  {dish.Precio && !dish.Precio2 && !dish.Precio3 && <div className="flex justify-end gap-2 w-2/3 text-sm mr-2">
                    <p>{dish.Precio}€</p>
                  </div>
                  }

                  {dish.PrecioBocadillo && <div className="grid grid-flow-col grid-cols-2 w-full text-center text-secondary font-bold text-sm ml-4">
                    <p>{dish.PrecioMontadito ? `${dish.PrecioMontadito}€` : '---------'}</p>
                    <p>{dish.PrecioBocadillo}€</p>
                  </div>
                  }
  
                {dish.Precio2 && dish.Precio3 && <div className="grid grid-flow-col grid-cols-3 w-full text-center text-secondary font-bold text-sm ml-4">
                    <p>{dish.Precio}€</p>
                    <p>{dish.Precio2}€</p>
                    <p>{dish.Precio3}€</p>
                  </div>}


                </div>
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