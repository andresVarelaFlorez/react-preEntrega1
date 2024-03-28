import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-sky-400 py-3 shadow-md px-3 md:px-0">
      <div className="container mx-auto">
        <div className="block md:justify-between md:flex">
          <h1 className="font-bold py-2 text-xl">Mi tienda en línea</h1>
          <div className="flex align-middle justify-between">
            <a href="#" className="md:px-4 py-2 hover:text-violet-900 duration-200">Productos</a>
            <a href="#" className="md:px-4 py-2 hover:text-violet-900 duration-200">Categorías</a>
            <a href="#" className="md:px-4 py-2 hover:text-violet-900 duration-200">Contacto</a>
            
            <CartWidget total={10} url={'#'}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
