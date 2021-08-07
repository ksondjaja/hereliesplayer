import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function ChapterThree(props){
    const [pageNum, setPage] = useState(0);

    const images = [
        <></>, <></>, <></>, <></>
    ];

    const pages = [
        //p0
        <>
            Chapter Three
        </>,
        //p1
        <>
            You have retired, and you have made several life achievements you are proud of. (But time is running out, and this is your last chance to find love.)
        </>,
        //p2
        <>
            One day, a new neighbor moved in next door. He/she/they live alone, and you often see them spending time at the porch.
        </>,
        //p3
        <>
            As time passes, you find yourself conversing with them more and more.
        </>,
        //p4
        <>
            He/she/they find your (player’s original personality) character charming, and you feel as if you have been friends your whole lives.
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