import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownEditor from './MarkdownEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MarkdownEditor onContentChange={console.log} />
);




