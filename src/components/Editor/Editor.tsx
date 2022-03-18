import { useState } from 'react';
import classes from './Editor.module.css';

const Editor: React.FC<{
  change: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  text: string;
}> = props => {
  const [normalSize, setSize] = useState(true);
  const [minimalized, setMinimalized] = useState(false);

  const sizeUp = () => {
    setSize(!normalSize);
  };

  const minimalize = () => {
    setMinimalized(!minimalized);
  };

  return (
    <div
      className={
        minimalized === true
          ? classes.EditorCardMinimalized
          : normalSize === false
          ? classes.EditorCardBigger
          : classes.EditorCard
      }
    >
      <div className={classes.Bar}>
        <div className={classes.Title}>
          <i className="fas fa-tools"></i>
          <h3>Editor</h3>
        </div>
        <div>
          <i
            className="fas fa-window-minimize"
            onClick={minimalize}
            style={{ marginRight: '5px' }}
          ></i>
          {!minimalized && (
            <i className="far fa-window-maximize" onClick={sizeUp}></i>
          )}
        </div>
      </div>

      {!minimalized && (
        <div className={classes.Content}>
          <textarea
            name="editor"
            id="editor"
            placeholder="Write something..."
            onChange={props.change}
            value={props.text}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Editor;
