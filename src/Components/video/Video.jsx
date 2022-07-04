import { useRef } from "react";
import Button from "../common/Button";
import styles from "../common/Button.module.css";

function VideoPlayer() {

  const videoRef = useRef(null)


  const handleStart = () =>{
    videoRef.current.play();
  }

  const handlePause = () =>{
  
    videoRef.current.pause();

  }

  const handleSkip = () =>{
      videoRef.current.skip(30)
  }


  return (
    <div>
      <video data-testid="video-container" width="400" controls ref={videoRef} >
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
          
        />
      </video>
      <div>
      <button  onClick={handleStart}  className={styles.button} data-testid="button" >PLAY
      
    </button>
        {/* <button onClick={handleStart}>PLAY</button> */}
        <button  onClick={handlePause}  className={styles.button} data-testid="button" >PAUSE
      
      </button>
      <button  onClick={handleSkip}  className={styles.button} data-testid="button" >SKIP
      
      </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
