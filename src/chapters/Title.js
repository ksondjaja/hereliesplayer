import React from 'react';

export default function Title(props){

    const {flipChapter} = props;

    return(
    <div class="center">
        <div class="tombstone">
            <h1>Are you afraid of dying alone?</h1>

            <h3>Here Lies the Player: a dating simulator that ends in death</h3>
        </div>

        <button class="button-play" onClick={() => {flipChapter("profile")}}>Play</button>
    </div>
    );
};