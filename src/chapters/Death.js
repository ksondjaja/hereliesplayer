import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Death(props){
    const [pageNum, setPage] = useState(0);

    const optionOne = () => {
        props.setHappiness("yes")
        props.flipChapter("tombstone");
    }

    const optionTwo = () => {
        props.setHappiness("no")
        props.flipChapter("tombstone");
    }

    // const images = [
    //     <></>, <></>, <></>, <></>
    // ];

    const pages = [
        //p0
        <>
            <h1>Death</h1>
        </>,
        //p1
        <>
            You have lived a full life, and now you are in your deathbed.
        </>,
        //p2
        <>
            You reflect on your life experiences, all the decisions you have made.
        </>,
        //p3
        <>
            Are you happy with your life?
        </>,
        //p4
        <>
            <ul class="options">
                <li onClick={optionOne}>
                    Yes, I am happy.
                </li>
                <li onClick={optionTwo}>
                    No, I have regrets.
                </li>
            </ul>
        </>
    ];

    return(
        <div class="main">
            {/* <div class="image">
                {images[pageNum]}
            </div> */}

            <div class="dialog">
                <div class="dialog-next">
                    {pageNum!==4?
                        <button onClick={() => {setPage(pageNum + 1)}} class="button-next">
                            <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                        </button>
                    :
                    <></>
                    }
                </div>

                {pages[pageNum]}

            </div> 
            
        </div>
    );
};