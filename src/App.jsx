import { useState } from 'react';

import WidjetsArea from './components/WidjetsArea';
import WorkingGrid from './components/WorkingGrid';
import ResultRender from './components/ResultRender';

function App() {
  const [draggedWidgetType, setDraggedWidgetType] = useState(null);
  return (
    <div className='h-screen flex flex-col'>
      <header 
        className='px-8 py-5 text-lg font-medium leading-normal border-b border-gray-300'
      >
        REACT EDITOR Test
      </header>
      <main className='flex flex-auto overflow-y-auto'>
        <WidjetsArea setDraggedWidgetType={setDraggedWidgetType}/>
        <WorkingGrid draggedWidgetType={draggedWidgetType}/>
        <ResultRender />
      </main>
    </div>
  );
}

export default App;
