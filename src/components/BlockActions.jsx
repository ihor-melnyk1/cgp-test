import { useDispatch } from 'react-redux';

import { cloneBlock, deleteBlock, moveDown, moveUp } from '../store/blocksSlice';

import arrowIcon from '../assets/arrow-top.svg';
import copyIcon from '../assets/copy.svg';
import trashIcon from '../assets/trash.svg';

const BlockActions = ({ index, length}) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute -top-[27px] right-[10px] flex gap-[5px]">
      <div className="flex gap-[5px] bg-blue p-[3px] rounded-[3px] rounded-b-none">
        <button 
          className='p-[3px] hover:bg-blue-700 rounded-sm'
          onClick={() => dispatch(moveDown())}
          disabled={index === length - 1}
        >
          <img src={arrowIcon} alt='arrow down'/>
        </button>
        <button
          disabled={index === 0}
          className='p-[3px] hover:bg-blue-700 rounded-sm'
          onClick={() => dispatch(moveUp())}
        >
          <img src={arrowIcon} alt='arrow up' className='rotate-180'/>
        </button>
      </div>
      <div className="flex gap-[5px] bg-accent-cyan p-[3px] rounded-[3px] rounded-b-none">
        <button 
          className='p-[3px] hover:bg-accent-cyan-hover rounded-sm'
          onClick={() => dispatch(cloneBlock())}
        >
          <img src={copyIcon} alt='copy icon'/>
        </button>
        <button 
          className='p-[3px] hover:bg-accent-cyan-hover rounded-sm'
          onClick={() => dispatch(deleteBlock())}
        >
          <img src={trashIcon} alt='delete icon'/>
        </button>
      </div>
    </div>
  );
};

export default BlockActions;