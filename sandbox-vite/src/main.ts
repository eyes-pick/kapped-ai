import React from 'react';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  React.createElement('h1', null, 'Sandbox')
);

function App() {
  return React.createElement('div', null, 'Hello Sandbox');
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    React.createElement(React.StrictMode, null, React.createElement(App))
  );
}
