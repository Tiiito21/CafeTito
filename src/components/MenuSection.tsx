
import { useState, useEffect } from "react";

const MenuSection = ({cartaData}:{cartaData:Object}) => {


  const [isOpen, setIsOpen] = useState<string>('');
  
  
  //Desabilitada porque se carga en el componente padre

  //const [carta, setCarta] = useState<Object|null>(null);


  // useEffect(() => {
  //   fetch('https://api.elcafetito.es/getMenu')
  //   .then(response => response.json())
  //   .then(data => {
  //     // Aquí puedes trabajar con los datos recibidos
  //     setCarta(data);
  //   })
  //   .catch(error => console.error('Error:', error));
  // }, []);

  const toggleOpen = (section:any) => {
    if (isOpen === section) {
      setIsOpen('');
    } else {
      setIsOpen(section);
  
      // Usamos requestAnimationFrame para asegurarnos de que el DOM esté actualizado
      requestAnimationFrame(() => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          sectionElement.scrollIntoView();
        }
      });
    }
  };

  
  return (

    !cartaData ? <div className="mx-3"><h1 className="text-2xl font-semibold">Cargando Menu</h1></div> :
    Object.entries(cartaData).map(([section, dishes]) => (
      <section key={section} className=" pt-2 w-[90%] mx-auto flex flex-col items-center">
        <h2 id={section} onClick={() => toggleOpen(section)}
          className={`py-2 w-full cursor-pointer md:cursor-default text-center text-2xl md:text-4xl font-rethink font-extrabold border-2 rounded-xl transition-colors duration-5000 border-secondary
          ${isOpen==section ? 'bg-secondary md:bg-background text-background md:text-secondary' : 'bg-background text-secondary' }`}
        >
          {section}
        </h2>
        
        {
          <ul className={`mt-2 px-2 w-full
            ${isOpen==section ? '' : 'hidden md:block'}`}>
            {
              section === 'Hamburguesas' &&
              <li className="flex justify-center">
                <div className="min-w-[40%] max-w-[40%]"></div>
                <div className="grid grid-flow-col grid-cols-3 w-full text-center text-secondary font-extrabold text-[1.2rem] ml-2">
                  <p>Pollo</p>
                  <p className="overflow-hidden">Ternera</p>
                  <p>Buey</p>
                </div>
              </li>
            }
            {
              section === 'Montaditos' &&
              <li className="flex justify-center">
                <div className="min-w-[40%] max-w-[40%]"></div>
                <div className="grid grid-flow-col grid-cols-2 w-full text-center text-secondary font-extrabold text-[1.1rem] ml-2">
                  <p>Montado</p>
                  <p>Bocadillo</p>
                </div>
              </li>
            }
          {  
            dishes.map((dish: any) => (   
              <li key={dish.nombre} className="text-base lg:text-lg font-rethink font-extrabold text-secondary mb-2">
                <div className="flex">
                  <div className="flex flex-col min-w-[40%] max-w-[40%]">
                    <p className="text-[1.1rem] md:text-lg mb-1" >{dish.nombre}</p>
                    {dish.descripcion && <p className="pl-3 text-sm md:text-base font-semibold text-secondary">{dish.descripcion}</p>}
                  </div>

                  {dish.Precio && !dish.Precio2 && !dish.Precio3 &&
                  <div className="flex justify-end gap-2 w-full text-base mr-2">
                    <p>{dish.Precio}€</p>
                  </div>
                  }

                  {dish.PrecioBocadillo &&
                  <div className="grid grid-flow-col grid-cols-2 w-full text-center text-secondary font-bold text-base ml-2">
                    <p>{dish.PrecioMontadito ? `${dish.PrecioMontadito}€` : '---------'}</p>
                    <p>{dish.PrecioBocadillo}€</p>
                  </div>
                  }
  
                  {dish.Precio2 && dish.Precio3 &&
                  <div className="grid grid-flow-col grid-cols-3 w-full text-center text-secondary font-bold text-base ml-2">
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