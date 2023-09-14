import { useDispatch } from "react-redux";

import { addBlock } from "../store/blocksSlice";

const Widget = ({ image, label, setDraggedWidgetType, type }) => {
  const dispatch = useDispatch();
  return (
    <li
      draggable
      onDragStart={(e) => {
        e.target.classList.add('scale-90', 'opacity-50');
        setDraggedWidgetType(type);
      }}
      onDragEnd={(e) => {
        e.target.classList.remove('scale-90', 'opacity-50');
        setDraggedWidgetType(null);
      }}
      onClick={() => dispatch(addBlock(type))}
      className='flex flex-col items-center gap-2.5 justify-center px-2.5 py-[15px] bg-blue-100 rounded-md cursor-grab active:cursor-grabbing transition-all'
    >
      <img src={image} alt={label} className='w-[25px] h-[25px] pointer-events-none'/>
      <p className='text-xs leading-normal w-20 text-center pointer-events-none'>{label}</p>
    </li>
  );
};

export default Widget;