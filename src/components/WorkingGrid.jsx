import { useDispatch, useSelector } from 'react-redux';

import { addBlock, blocksSelector } from '../store/blocksSlice';

import Block from './Block';

const WorkingGrid = ({ draggedWidgetType }) => {
  const { blocks } = useSelector(blocksSelector);
  const dispatch = useDispatch();
  return (
    <div 
      className={`bg-gray-100 w-[538px] flex flex-col gap-[15px] overflow-y-auto border-4 border-dashed p-[26px] ${draggedWidgetType ? 'border-blue' : 'border-gray-100'}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => dispatch(addBlock(draggedWidgetType))}
    >
      {blocks.map((block, index) => 
        <Block
          key={block.id}
          index={index}
          length={blocks.length}
          {...block}
        />
      )}
    </div>
  );
};

export default WorkingGrid;