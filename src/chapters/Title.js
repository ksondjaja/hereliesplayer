import React from 'react';
import tombstone from '../tombstone.png';

export default function Title(props){

    const {flipChapter} = props;

    return(
    <div class="center">
        <h1>Are you afraid of dying alone?</h1>
        <img class="tombstone-image" src={tombstone}/>
            <div class="tombstone-title">
                <h1>Here Lies the Player</h1>
                <h2>A dating simulator that ends with death</h2><br/>
                <button class="button-play" onClick={() => {flipChapter("profile")}}>Play</button>
            </div>

        
    </div>
    );
};