import { useDispatch, useSelector } from 'react-redux';

import { blocksSelector, setActiveBlockId } from '../store/blocksSlice';

import WIDJETS from '../consts/widjets';
import BlockActions from './BlockActions';
import BlockInput from './BlockInput';

const Block = ({ id, type, data, index, length }) => {
  const { activeBlockId } = useSelector(blocksSelector);
  const dispatch = useDispatch();
  const isBlockActive = activeBlockId === id;
  
  return (
    <div
      className={`flex flex-col items-center gap-2.5 justify-center px-2.5 py-[15px] rounded-md cursor-pointer relative ${isBlockActive ? 'bg-block-bg' : 'bg-white'}`}
      onClick={() => dispatch(setActiveBlockId(id))}
    >
      <img 
        draggable={false} 
        src={WIDJETS[type].image}
        alt={WIDJETS[type].label}
        className='w-[25px] h-[25px]'
      />
      <p className='text-xs leading-normal text-center'>{WIDJETS[type].label}</p>
      {isBlockActive && <>
        <BlockInput type={type} data={data}/>
        <BlockActions index={index} length={length}/>
      </>}
    </div>
  );
};

export default Block;