import { AppUI } from './AppUI';
import { TodoProvider } from './components/Context/TodoContext';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
