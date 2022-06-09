import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Dragdrop from './components/Dragdrop';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Dragdrop/>
    </div>
    </DndProvider>
  );
}

export default App;
