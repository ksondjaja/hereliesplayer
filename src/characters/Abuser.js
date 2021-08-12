import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Abuser(props){
    const [subPageNum, setSubPage] = useState(0);
    const noNextSubButton = [11, 15];
    const nextChapter = {"chapter1": "chapter2", "chapter2":"chapter3", "chapter3":"death"};
    const interests = {"chapter1": props.state.gameInterests[0], "chapter2": props.state.gameInterests[1], "chapter3": props.state.gameInterests[2]}
    const partner = interests[props.state.chapter];

    const subOptionOne = () => {
        props.getsKilled();
        props.flipChapter("tombstone");
    }

    const subOptionTwo = () => {
        props.leaveRelationship();
        setSubPage(subPageNum+1);
    }

    const subImages = [];

    const subPages = [
        //p0
        <>
            Your partner makes you feel special. {props.capitalize(props.setPronoun(1, partner))} often show{props.setPlural(props.setPronoun(1, partner))} you grand romantic gestures.
        </>,
        //p1
        <>
            You are swept off your feet and your relationship progresses very quickly.
        </>,
        //p2
        <>
            You almost can't believe that you have a partner that showers you with so much affection. Your life is almost too good to be true.
        </>,
        //p3
        <>
            Together you go on romantic vacations. {props.capitalize(props.setPronoun(1, partner))} give{props.setPlural(props.setPronoun(1, partner))} you wonderful presents and surprises, even when there is no special occassion.
        </>,
        //p4
        <>
            One time your partner asks you to go on a week-long cruise. But your mother's birthday falls on the same week. You tell your partner that you want to visit your mother instead.
        </>,
        //p5
        <>
            Your partner is furious that you want to do something else than spend time with {props.setPronoun(2, partner)}. You are shocked to see {props.setPronoun(3, partner)} reaction.
        </>,
        //p6
        <>
            {props.capitalize(props.setPronoun(1, partner))} accuse{props.setPlural(props.setPronoun(1, partner))} you of not caring about {props.setPronoun(2, partner)}, and is extremely angry.
        </>,
        //p7
        <>
            You think that maybe your parter happens to be having a bad day. However, incidents like this start to happen more frequently...
        </>,
        //p8
        <>
            Now {props.setPronoun(1, partner)} often fl{partner==="they"?'y':'ies'} into a violent rage when you display even the slightest disagreement.
        </>,
        //p9
        <>
            {props.capitalize(props.setPronoun(1, partner))} accuse{props.setPlural(props.setPronoun(1, partner))} you of cheating on {props.setPronoun(2, partner)} when you spend time with your friends or get home a bit late.
        </>,
        //p10
        <>
            You are overwhelmed and afraid for your own safety.
        </>,
        //p11
        <>
            <ul class="options">
                <li onClick={subOptionOne}>
                    You fear your partner, but you also remember how good {props.setPronoun(1, partner)} used to be to you. You want to believe that {props.setPronoun(1, partner)} will become that person again. So you stay in the relationship and try not to anger {props.setPronoun(2, partner)}.
                </li>
                <li onClick={subOptionTwo}>
                    You recognize that your partner is abusive and you must leave before things get worse. You ask your friends and family to help you safely escape.
                </li>
            </ul>
        </>,
        //p12
        <>
            With the help of your loved ones, you manage to escape and hide from your ex.
        </>,
        //p13
        <>
            This experience has traumatized you, and you are sometimes afraid that your ex would seek revenge.
        </>,
        //p14
        <>
            You start seeing a mental health professional to help deal with your experience.
        </>,
        //p15
        <>
            Years later, you reflect back on this experience. You feel grateful for having people who truly cares about you, and proud that you found the strength within yourself to leave.
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

                {subPageNum===15?
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