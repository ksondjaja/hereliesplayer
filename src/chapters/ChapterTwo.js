import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function ChapterTwo(props){
    const [pageNum, setPage] = useState(0);

    const images = [
        <></>, <></>, <></>, <></>
    ];

    const pages = [
        //p0
        <>
            Chapter Two
        </>,
        //p1
        <>
            You’re more mature and experienced. You have a stable job in (an interest the player hasn’t given up) and live quite comfortably. (But you still want to meet someone you’re compatible with and spend your lives together.)
        </>,
        //p2
        <>
            One day, as you enjoy (another interest the player hasn’t given up), someone strikes up a conversation with you.
        </>,
        //p3
        <>
            It turns out that they two of you have so much in common that you ended up talking to her/him/them without realizing that many hours have passed.
        </>,
        //p4
        <>
            You become good friends, but after some time he/she/they tell you that they have romantic feelings for you. (You are in a committed relationship)
        </>
    ];

    return(
        <div class="main">
            <div class="image">
                {images[pageNum]}
            </div>

            <div class="dialog">
                <div class="dialog-next">
                    <button onClick={() => {setPage(pageNum + 1)}} class="button-next">
                        <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                    </button>
                </div>

                {pages[pageNum]}

            </div> 
            
        </div>
    );
};