import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Ghoster(props){
    const [subPageNum, setSubPage] = useState(0);
    const nextChapter = {"chapter1": "chapter2", "chapter2":"chapter3", "chapter3":"death"};
    const interests = {"chapter1": props.state.gameInterests[0], "chapter2": props.state.gameInterests[1], "chapter3": props.state.gameInterests[2]}
    const partner = interests[props.state.chapter];

    const subOptionOne = () => {
        props.suppressPersonality();
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
            You and your partner spend so much time together.
        </>,
        //p1
        <>
            You feel that the two of you are very close, and you always share your feelings with {props.setPronoun(2, partner)}.
        </>,
        //p2
        <>
            You always talk about your future together.
        </>,
        //p3
        <>
            After several years, your partner suddenly finds an opportunity in a different city.
        </>,
        //p4
        <>
            {props.capitalize(props.setPronoun(1, partner))} {props.setPluralAre(props.setPronoun(1, partner))} very excited about it. You know that this means a lot to {props.setPronoun(2, partner)}.
        </>,
        //p5
        <>
            You support {props.setPronoun(2, partner)}, so you let your partner go ahead and move to the new city first. You plan to arrange moving the rest of your things and follow {props.setPronoun(2, partner)} in a few months.
        </>,
        //p6
        <>
            After your partner moves, all of a sudden {props.setPronoun(1, partner)} stop{props.setPlural(props.setPronoun(1, partner))} replying to your texts.
        </>,
        //p7
        <>
            You wonder if something has happened to {props.setPronoun(2, partner)}, but {props.setPronoun(1, partner)} {props.setPluralAre(props.setPronoun(1, partner))} not answering {props.setPronoun(3, partner)} phone.
        </>,
        //p8
        <>
            You try to message {props.setPronoun(2, partner)} on social media, only to find out that {props.setPronoun(1, partner)} {props.setPluralHave(props.setPronoun(1, partner))} blocked you.
        </>,
        //p9
        <>
            You feel lonely and confused.
        </>,
        //p10
        <>
            You ask a friend to reach out to your partner on social media. Your friend finds out from {props.setPronoun(3, partner)} profile that {props.setPronoun(1, partner)} {props.setPluralHave(props.setPronoun(1, partner))} started a relationship with someone else.
        </>,
        //p11
        <>
            You are devastated. You cannot believe that {props.setPronoun(1, partner)} would betray you like this, and without giving you any explanation.
        </>,
        //p12
        <>
            Your friends and family try to spend more time with you to help you move on. But you keep ruminating, wondering where things had gone wrong, and what have you done to make {props.setPronoun(2, partner)} suddenly leave you.
        </>,
        //p13
        <>
            It takes a long time for you to heal with the support of people around you. You are afraid of going into another romantic relationship, where someone could betray you the same way again.
        </>
    ];

    return(
        <>
            <div class="dialog-next">
                {subPageNum!==13?
                    <button onClick={() => {setSubPage(subPageNum + 1)}} class="button-next">
                        <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                    </button>
                :
                    <button onClick={() => {props.leaveRelationship(); props.flipChapter(nextChapter[props.state.chapter])}} class="button-next">
                        <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                    </button>
                }
            </div>

            {subPages[subPageNum]}
        </>
    );
}