
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    progress: {
      color: '#fff',


    },
  }));
  
  export function CircularDeterminate6() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      function tick() {
        // reset when reaching 100%
        setProgress(oldProgress => (oldProgress >= 50 ? 50 : oldProgress + 1));
      }
  
      const timer = setInterval(tick, 30);
      return () => {
        clearInterval(timer);
      };
    }, []);
   
    return (
        <span id="circle6">
        <CircularProgress
       
          className={classes.progress}
          variant="determinate"
          value={progress}
          color="secondary"
          thickness={3}
          size= {100}

        />
        <p>JS</p>
        </span>
        
    );
  }
