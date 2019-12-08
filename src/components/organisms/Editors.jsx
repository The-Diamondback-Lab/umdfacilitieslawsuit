import React from 'react';

import editors from '../../data/editors.json';

export const Editors = () => (
  <div className='editors'>
    <span>Editors</span>

    <dl>
      <dt><span>Project Editor</span></dt>
      <dd>{editors.projectEditor}</dd>
    </dl>

    <dl>
      <dt><span>Copy Editors</span></dt>
      <dd>
        {
          editors.copyEditors.map((copyEditor, i) => {
            if (i < editors.copyEditors.length - 1) {
              return `${copyEditor}, `;
            } else {
              return copyEditor;
            }
          })
        }
      </dd>
    </dl>
  </div>
);
