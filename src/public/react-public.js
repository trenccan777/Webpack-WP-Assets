import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactFront from './react-public/App';

// eslint-disable-next-line no-unused-vars
import reactFront from './react-public/scss/react-public.scss';

export default function reactFrontInit() {
  if (document.querySelector('#test-plugin-front')) {
    const rootElement = document.getElementById('test-plugin-public');
    const root = createRoot(rootElement);
    root.render(<ReactFront />);
  }
}
