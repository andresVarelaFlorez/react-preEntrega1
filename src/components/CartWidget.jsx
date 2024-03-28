import { ShoppingCart } from "lucide-react";

const CartWidget = ({total, url}) => {
  return (
    <>
      <div className="relative flex items-center">
        <span id='totalItems' className="bg-green-300 z-10 text-black text-xs px-2 py-1 rounded-full absolute bottom-6 left-6">{total}</span>
        <a href={url} className="px-3">
          <ShoppingCart width={18} className="hover:text-violet-900 duration-200"/>
        </a>
      </div>
    </>
  );
}

export default CartWidget;