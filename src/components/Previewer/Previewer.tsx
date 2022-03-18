import marked from 'marked';
import { useState } from 'react';
import classes from './Previewer.module.css';

const Previewer: React.FC<{ text: string }> = props => {
  let html = marked(props.text, { breaks: true });

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
          ? classes.PreviewerCardMinimalized
          : normalSize === false
          ? classes.PreviewerCardBigger
          : classes.PreviewerCard
      }
    >
      <div className={classes.Bar}>
        <div className={classes.Title}>
          <i className="fas fa-server fa-s"></i>
          <h3>Previewer</h3>
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
        <div
          className={classes.Content}
          id="preview"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      )}
    </div>
  );
};

export default Previewer;
