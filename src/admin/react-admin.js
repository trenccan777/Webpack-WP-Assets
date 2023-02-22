import React from 'react';
import { createRoot } from 'react-dom/client';

import ReactAdmin from './react-admin/App';

export default function reactAdminInit() {
  if (document.querySelector('#test-plugin-admin')) {
    const rootElement = document.getElementById('test-plugin-admin');
    const root = createRoot(rootElement);
    root.render(<ReactAdmin />);
  }
}
