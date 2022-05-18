import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

import close from '@images/pro/close.svg';

const Audio = ({toggleOutMenu}) => {

  const { 
    selectedSong, 
    closePlayer, 
    audioRef, 
    onPlay, 
    onToggle,
    autoPlay,
    volume,
    isPlaying 
  } = useContext(GlobalContext);

  return (
    <div 
    onMouseDown={toggleOutMenu} 
    onLoad={() => onPlay()} 
    onEnded={autoPlay} 
    id="Audio"
    >
      <div className="mmc">
          <img onClick={() => closePlayer()} className="close" src={close} alt="close" />
      </div>
      <div className="AudioContainer">
        <div className="AudioDescription">
          {selectedSong ? (
            <>
            <div className="AlbumImg">
              <img src={`assets/audioseven/album/${selectedSong.album}`} alt={selectedSong.name} />
            </div>
            <marquee 
            behavior="scroll" 
            direction="left" 
            width="100%" 
            bahaviur="alternate" 
            align="middle" 
            scrolldelay="5" 
            scrollamount="4" 
            loop="infinite" 
            hspace="10px" 
            vspace="5px"
            >
                <p className="AudioText">{selectedSong.name}</p>
            </marquee>
            <audio ref={audioRef} src={`audio/${selectedSong.mp3}`}></audio>
            </>
          ) : (
            <p className="AudioText">Add To Song</p> 
          )}
        </div>
      </div>
      <div id="play">
        <div 
          onClick={onToggle} 
          className={isPlaying ? 'btn-stop' : 'btn-play'} 
          alt="play">
        </div>  
      </div>
      <div className="volumen">
        <input 
        onInput={volume}
        type="range" 
        name="volumen" 
        id="volumen" 
        min="0" 
        max="1" 
        step="0.01" 
        defaultValue="0.7"
        /> 
      </div>
    </div>
  );
}

export default Audio;