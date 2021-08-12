import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Passion(props){

    const [subPageNum, setSubPage] = useState(0);
    const noNextSubButton = [5, 8, 12];
    const jobs = {"travel" : "in tourism", "food":"as a chef", "books": "as a writer", "nature":"as a botanist", "spirituality":"as a healer"};
    const nextChapter = {"chapter1": "chapter2", "chapter2":"chapter3", "chapter3":"death"};
    const interests = {"chapter1": props.state.gameInterests[0], "chapter2": props.state.gameInterests[1], "chapter3": props.state.gameInterests[2]}
    const partner = interests[props.state.chapter];
    
    const subOptionOne = () => {
        setSubPage(subPageNum+1);
    }

    const subOptionTwo = () => {
        props.leaveRelationship();
        setSubPage(subPageNum+4);
    }

    const subImages = [];

    const subPages = [
        //p0
        <>
            With your partner next to you, you decide to take your&nbsp;

            {props.state.chapter==="chapter2"?
            <>
                career&nbsp;

                {props.state.playerPassions[0] in jobs?
                <>
                    {jobs[props.state.playerPassions[0]]}&nbsp;
                </>
                :
                <>
                    in {props.state.playerPassions[0]}&nbsp;
                </>
                }                
            </>
            :
            <>
                love for {props.state.playerPassions[0]}&nbsp;
            </>
            }
            to the next level by starting a {props.state.playerPassions[0]==="social justice"?"non-profit":"business"}.
        </>,
        //p1
        <>
            However, despite working hard, your {props.state.playerPassions[0]==="social justice"?"non-profit":"business"} fails.
        </>,
        //p2
        <>
            This failure takes a toll on you and your partner's relationship and finances.
        </>,
        //p3
        <>
            You are nearly facing bankruptcy, and your partner cannot deal with it anymore.
        </>,
        //p4
        <>
            Your partner tells you to entirely give up on the {props.state.playerPassions[0]==="social justice"?"non-profit": props.state.playerPassions[0]+" business"}, or {partner} will leave you. 
        </>,
        //p5
        <>
            <ul class="options">
                <li onClick={subOptionOne}>
                    It pains you to give up on your passion for {props.state.playerPassions[0]}, but you want to save your relationship at all costs.
                </li>
                <li onClick={subOptionTwo}>
                    You want to stay true to yourself and keep pursuing your love of {props.state.playerPassions[0]}. Someone who truly loves you won't force you give up on it.
                </li>
            </ul>
        </>,
        //p6: option 1
        <>
            You agree to give up on the {props.state.playerPassions[0]==="social justice"?"non-profit": props.state.playerPassions[0]+" business"} and find a more financially secure job.
        </>,
        //p7
        <>
            You are able to save the relationship, but cannot stop feeling a bit resentful.
        </>,
        //p8
        <>
            You feel that you can no longer be completely open with your partner like you used to be.
        </>,
        //p9: option 2
        <>
            Your partner feels hurt and leaves you.
        </>,
        //p10
        <>
            After several more years of hard struggle, you are able get to a more financially secure position.
        </>,
        //p11
        <>
            You are proud of yourself for persevering and accomplishing something you care about.
        </>,
        //p12
        <>
            But sometimes you feel lonely, and rather guilty towards your ex.
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

                {subPageNum===8?
                    <button onClick={() => {props.giveUpPassion(); props.flipChapter(nextChapter[props.state.chapter])}} class="button-next">
                        <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                    </button>
                :
                <></>
                }

                {subPageNum===12?
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