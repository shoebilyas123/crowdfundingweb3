import ReactDOM from 'react-dom/client';
import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ThirdwebProvider activeChain={Sepolia}>
      <App />
    </ThirdwebProvider>
  </>
);
