import React from 'react';
import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs';
import {FaDesktop} from 'react-icons/fa';
import Track from '../imgspotify/track.png';
import "../Styles/LeftMenu.css";

function TrackList({trackName, artistName}) {
  return( 
  <div className='tracklist'>
<div className='top'>
<img src={Track} alt=""/>
<p className='trackName'>
  {trackName} <span className='trackSpan'> {artistName} </span>
  </p>
  </div>

  <div className='bottom'>
<i>
<BsFillVolumeUpFill />
</i>
<input type="range" />
<i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
  </div>
</div>
  );
}

export  default TrackList;
