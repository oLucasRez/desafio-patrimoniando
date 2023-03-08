import ReactDOM from 'react-dom/client';
import { App } from './presentation/components';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
