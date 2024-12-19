import { useState } from 'preact/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/slices/themeSlice';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import './styles/global.scss';

export function App() {
  const [count, setCount] = useState(0);
  const theme = useSelector((state: RootState) => state.theme); // Получаем текущую тему из Redux
  const dispatch = useDispatch();

  return (
    <div className={`app ${theme}`}>
      {/* Логотипы */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      {/* Карточка со счётчиком */}
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      {/* Переключение темы */}
      <div>
        <button onClick={() => dispatch(toggleTheme())}>Switch Theme</button>
      </div>
      {/* Ссылки */}
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </div>
  );
}