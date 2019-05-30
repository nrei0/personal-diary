import React from 'react';

export const Html = ({ scriptTags, linkTags, styleTags, children = false }) => (
  <html lang="en">
    <head
      dangerouslySetInnerHTML={{ __html: linkTags + styleTags + scriptTags }}
    />
    <body>{children}</body>
  </html>
);
