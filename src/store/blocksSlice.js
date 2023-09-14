import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import mockImage from '../assets/mock-image.png';

const initialState = {
  blocks: [
    {
      id: '1',
      type: 'image',
      data: mockImage
    },
    {
      id: '2',
      type: 'headline',
      data: 'A legendary cap set that feels like new'
    },
    {
      id: '3',
      type: 'paragraph',
      data: 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal. Using the "Insert" panel on the right, drag and drop the Abandoned Cart element onto the page below.'
    },
    {
      id: '4',
      type: 'button',
      data: 'Register now'
    }
  ],
  activeBlockId: null
};

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    addBlock: (state, action) => {
      const id = uuidv4();
      state.blocks.push({
        id,
        type: action.payload,
        data: null
      });
      state.activeBlockId = id;
    },
    cloneBlock: (state) => {
      const activeBlock = state.blocks.find(({id}) => id === state.activeBlockId);
      const id = uuidv4();
      state.blocks.push({
        ...activeBlock,
        id,
      });
      state.activeBlockId = id;
    },
    deleteBlock: (state) => {
      state.blocks = state.blocks.filter((({id}) => id !== state.activeBlockId));
    },
    moveUp: (state) => {
      const activeBlockIndex = state.blocks.findIndex(({id}) => id === state.activeBlockId);
      const buffer = state.blocks[activeBlockIndex];
      state.blocks[activeBlockIndex] = state.blocks[activeBlockIndex - 1];
      state.blocks[activeBlockIndex - 1] = buffer;
    },
    moveDown: (state) => {
      const activeBlockIndex = state.blocks.findIndex(({id}) => id === state.activeBlockId);
      const buffer = state.blocks[activeBlockIndex];
      state.blocks[activeBlockIndex] = state.blocks[activeBlockIndex + 1];
      state.blocks[activeBlockIndex + 1] = buffer;
    },
    changeBlockData: (state, action) => {
      const activeBlockIndex = state.blocks.findIndex(({id}) => id === state.activeBlockId);
      state.blocks[activeBlockIndex].data = action.payload;
    },
    setActiveBlockId: (state, action) => {
      state.activeBlockId = action.payload;
    },
  },
});

export const { addBlock, cloneBlock, setActiveBlockId, deleteBlock, moveUp, moveDown, changeBlockData } = blocksSlice.actions;

export const blocksSelector = (state) => state.blocks;

export default blocksSlice.reducer;
