import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function ChapterOne(props){

    const { flipChapter } = props;
    const [pageNum, setPage] = useState(0);
    const noNextButton = [5,6,9,12];
    const lastPage = [9,12]

    const images = [
        <>(image)</>, <>(image)</>, <>(image)</>, <>(image)</>, <>(image)</>
    ];

    const optionTwo = () => {
        setPage(pageNum+2);
    }

    const optionThree = () => {
        setPage(pageNum+5);
    }

    const pages = [
        //p0
        <>
            Chapter One
        </>,
        //p1
        <>
            You are young and full of hope. You dream of falling in love with someone attractive and cool.
        </>,
        //p2
        <>
            One day, you meet someone really cool online, and she/he/they seem(s) to really like you.
        </>,
        //p3
        <>
            You meet with him/her/them in-person several times. You have a lot of fun and really get along with them.
        </>,
        //p4
        <>
            Then comes the time to decide what your relationship means…
        </>,
        //p5: options
        <>
            <ul class="options">
                <li>
                    (You’re not actually attracted to her/him/them. But you don’t want to hurt their feelings and you don’t want to be alone.)
                    You ask her/him/them if she/he/they want to date seriously.
                </li>
                <li onClick={optionTwo}>
                    This is fun, but you know that it won’t last. You tell her/him/them that you just want to keep it casual.
                </li>
                <li onClick={optionThree}>
                    They seem like a nice person, but you’re not really into them. You tell her/him/them that you don’t see her/him/them that way.
                </li>
            </ul>
        </>,
        // p6: option 1
        <>
        </>,
        //p7: option 2
        <>
        You keep seeing her/him/them, but after several months, you fight more often and eventually grow apart.
        </>,
        //p8
        <>
        He/she/they decide to break up with you.
        </>,
        //p9
        <>
        Three years later, you hear that he/she/they got married and seems really happy.
        </>,
        //p10: option3
        <>
        He/she/they seem really sad to let you go, but you feel that you made the right decision by being honest and not wasting his/her/their time.
        </>,
        //p11
        <>
        He/she/they find it too painful to be just friends, and you never see him/her/them again.
        </>,
        //p12
        <>
        Three years later, you stumble upon their profile on social media. It seems that he/she/they got married and seems really happy.
        </>,
    ];

    return(
        <div class="main">
            <div class="image">
                {images[pageNum]}
            </div>

            <div class="dialog">
                <div class="dialog-next">
                    {!noNextButton.includes(pageNum)?
                        <button onClick={() => {setPage(pageNum + 1)}} class="button-next">
                            <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                        </button>
                    :
                    <></>
                    }
                    {lastPage.includes(pageNum)?
                        <button onClick={() => {flipChapter("chapter2")}} class="button-next">
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