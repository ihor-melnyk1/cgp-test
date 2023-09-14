import { useSelector } from 'react-redux';

import { blocksSelector } from '../store/blocksSlice';

const ResultRender = () => {
  const { blocks } = useSelector(blocksSelector);
  return (
    <div className='flex-1 p-[30px] flex flex-col items-center gap-[30px] overflow-y-auto'>
      {blocks.map(({id, type, data}) => {
        if(data === null) return null;
        if(type === 'paragraph') {
          return <p 
            className='text-sm leading-normal tracking-[0.28px] text-[#97AACD] text-center' 
            key={id}
          >
            {data}
          </p>
        } else if(type === 'headline') {
          return <h2 
            className='text-[22px] font-bold leading-normal tracking-[0.44px] text-center'
            key={id}
          >
            {data}
          </h2>
        } else if(type === 'image') {
          return <img 
            key={id} 
            src={data} 
            alt={type}
            className='max-h-[230px] w-auto object-contain rounded'
          />
        } else if(type === 'button') {
          return <button 
            key={id} 
            className='bg-primary rounded py-2.5 px-[30px] text-sm leading-[1.45] tracking-[0.28px] text-blue-100 font-medium'
          >
            {data}
          </button>
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ResultRender;