import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { changeBlockData } from '../store/blocksSlice';

const BlockInput = ({ type, data }) => {
  const dispatch = useDispatch();
  const imageRef = useRef(null);

  const handlePhotoInputChange = (e) => {
    const imageFile = e.target.files?.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      dispatch(changeBlockData(reader.result));
    }
  };
  const handleAddImage = () => {
    imageRef?.current?.click();
  };

  return (
    <div className="w-full rounded-sm p-[5px] bg-white">
      {type === 'image' ? <>
        <input
          ref={imageRef}
          type='file'
          accept='image/*'
          onChange={handlePhotoInputChange}
          hidden
        />
        <button 
          onClick={handleAddImage}
          className='bg-primary rounded py-2.5 px-[30px] text-sm leading-[1.45] tracking-[0.28px] text-blue-100 font-medium  block mx-[auto]'
        >
          {data ? 'Edit Image' : 'Add Image'}
        </button>
      </> : 
        <input 
          className='w-full border border-solid border-gray-300 rounded-sm focus:outline-none text-[11px] leading-normal p-[5px]'
          value={data || ''}
          onChange={(e) => dispatch(changeBlockData(e.target.value))}
          placeholder='Enter element text...'
        />
      }
    </div>
  );
};

export default BlockInput;