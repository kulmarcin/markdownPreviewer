import React, { useState } from 'react';
import classes from './App.module.css';

import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';

function App() {
  const [text, setText] = useState(`  # This is header
  ## This is a sub-heading...
  
  You can also make text **bold**... whoa!

  _italic_
  ~~crossing stuff out~~
  There's also [links](https://www.google.com)

  Heres some code, \`<div></div>\`, between 2 backticks.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.

    >Block Quote

  \`\`\`
  // this is multi-line code:
    
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  ![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/0/09/Blue_computer_icon.svg)
  `);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={classes.App}>
      <Editor change={changeHandler} text={text} />
      <Previewer text={text} />
    </div>
  );
}

export default App;
