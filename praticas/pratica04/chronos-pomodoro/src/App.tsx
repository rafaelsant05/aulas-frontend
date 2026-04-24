import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContextProvider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}