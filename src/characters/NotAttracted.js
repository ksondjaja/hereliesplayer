import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function NotAttracted(props){
    const [subPageNum, setSubPage] = useState(0);
    const noNextSubButton = [5, 7, 11];
    const lastSubPage = [7, 11]
    const nextChapter = {"chapter1": "chapter2", "chapter2":"chapter3", "chapter3":"death"};
    const interests = {"chapter1": props.state.gameInterests[0], "chapter2": props.state.gameInterests[1], "chapter3": props.state.gameInterests[2]}
    const partner = interests[props.state.chapter];

    const subOptionOne = () => {
        setSubPage(subPageNum+1);
    }

    const subOptionTwo = () => {
        props.leaveRelationship();
        props.leaveNotAttracted();
        setSubPage(subPageNum+4);
    }

    const subImages = [];

    const subPages = [
        //p0
        <>
            You admire and feel emotionally connected to your partner.
        </>,
        //p1
        <>
            You think that you would eventually feel more physically and romantically attracted to {props.setPronoun(2, partner)} over time.
        </>,
        //p2
        <>
            But after a year, you still do not develop those feelings for your partner.
        </>,
        //p3
        <>
            Your partner realizes that you try to avoid situations where {props.setPronoun(1, partner)} want{props.setPlural(props.setPronoun(1, partner))} to be more intimate with you.
        </>,
        //p4
        <>
            After some time, {props.setPronoun(1, partner)} become{props.setPlural(props.setPronoun(1, partner))} frustrated and confront{props.setPlural(props.setPronoun(1, partner))} you about it.
        </>,
        //p5
        <>
            <ul class="options">
                <li onClick={subOptionOne}>
                    You believe that {props.setPronoun(1, partner)} {props.setPluralAre(props.setPronoun(1, partner))} the best partner you could hope for, so you force yourself to show {props.setPronoun(2, partner)} more affection so that you can stay together.
                </li>
                <li onClick={subOptionTwo}>
                    You feel bad about lying to your partner about your feelings. You decide to break up with {props.setPronoun(2, partner)} because both of you deserve better.
                </li>
            </ul>
        </>,
        //p6: option 1
        <>
            Your relationship improves, but you are still hiding how you truly feels about your partner.
        </>,
        //p7
        <>
            You don't enjoy spending time with your partner anymore, and feel isolated.
        </>,
        //p8: option 2
        <>
            You feel relieved and freed after breaking up with your former partner.
        </>,
        //p9
        <>
            Although at first {props.setPronoun(1, partner)} feel hurt, you both move on and stay as close friends.
        </>,
        //p10
        <>
            You continue to emotionally support one another in your new lives.
        </>,
        //p11
        <>
            Your ex eventually finds a new partner, and you are genuinely happy for {props.setPronoun(2, partner)}.
        </>
    ];

    return(
        <>
            <div class="dialog-next">
                {!noNextSubButton.includes(subPageNum)?
                    <button onClick={() => {setSubPage(subPageNum + 1)}} class="button-next">
                        <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                    </button>
                :
                <></>
                }

                {lastSubPage.includes(subPageNum)?
                    <button onClick={() => {props.flipChapter(nextChapter[props.state.chapter])}} class="button-next">
                        <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                    </button>
                :
                <></>
                }
            </div>

            {subPages[subPageNum]}
        </>
    );
}