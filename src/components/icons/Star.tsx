import { SVGProps } from "../../types";

const Star = (props: SVGProps) => (
  <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.103.626 6.063 5.28l-4.566.75C.678 6.162.35 7.297.944 7.948l3.303 3.62-.781 5.116c-.141.925.725 1.617 1.45 1.185L9 15.455l4.084 2.415c.725.429 1.591-.26 1.45-1.185l-.78-5.115 3.302-3.621c.594-.65.266-1.786-.553-1.92l-4.566-.749L9.898.626c-.366-.83-1.425-.84-1.794 0Z" />
  </svg>
);

export default Star;