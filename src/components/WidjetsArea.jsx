import WIDJETS from '../consts/widjets';

import Widget from './Widget';

const WidjetsArea = ({ setDraggedWidgetType }) => {
  return (
    <ul 
      className='p-[30px] grid grid-cols-1 xl:grid-cols-2 auto-rows-min gap-2.5 border-r border-gray-300'
    >
      {Object.entries(WIDJETS).map(([key, value]) => 
        <Widget 
          key={key} 
          setDraggedWidgetType={setDraggedWidgetType}
          type={key}
          {...value}
        />
      )}
    </ul>
  );
};

export default WidjetsArea;