import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Personality(props){
    const [subPageNum, setSubPage] = useState(0);
    const noNextSubButton = [5, 8, 12];
    const lastSubPage = [8, 12]
    const nextChapter = {"chapter1": "chapter2", "chapter2":"chapter3", "chapter3":"death"};
    const interests = {"chapter1": props.state.gameInterests[0], "chapter2": props.state.gameInterests[1], "chapter3": props.state.gameInterests[2]}
    const partner = interests[props.state.chapter];

    const subOptionOne = () => {
        props.suppressPersonality();
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
            You feel that your new partner complements you well. {props.capitalize(props.setPronoun(1, partner))} {props.setPluralHave(props.setPronoun(1, partner))} traits that you are lacking.
        </>,
        //p1
        <>
            You depend on {props.setPronoun(2, partner)} in many ways, and {props.setPronoun(1, partner)} make{props.setPlural(props.setPronoun(1, partner))} you feel that you need to be a better person.
        </>,
        //p2
        <>
            Your partner always criticizes you when you should be better...
        </>,
        //p3
        <>
            And tells you every day when {props.setPronoun(1, partner)} {props.setPluralDo(props.setPronoun(1, partner))}n't like what you are doing...
        </>,
        //p4
        <>
            {props.capitalize(props.setPronoun(1, partner))} tell{props.setPlural(props.setPronoun(1, partner))} you that you are too {props.state.playerPersonality}, and you should change for {props.setPronoun(2, partner)}. {props.capitalize(props.setPronoun(1, partner))} say{props.setPlural(props.setPronoun(1, partner))} that they are embarrassed to be seen with you when you when you act like you usually do at home.
        </>,
        //p5
        <>
            <ul class="options">
                <li onClick={subOptionOne}>
                    Your partner is right, you are not good enough, and you should become the kind of person {props.setPronoun(1, partner)} want{props.setPlural(props.setPronoun(1, partner))} you to be.
                </li>
                <li onClick={subOptionTwo}>
                    You eventually realize that your partner is controlling. {props.capitalize(props.setPronoun(1, partner))} make{props.setPlural(props.setPronoun(1, partner))} you feel bad about being yourself. You should leave {props.setPronoun(2, partner)}.
                </li>
            </ul>
        </>,
        //p6: option 1
        <>
            You want to please your partner, so you try to change for {props.setPronoun(2, partner)} by suppressing yourself.
        </>,
        //p7
        <>
            You are constantly self-conscious about your own behavior, and are always aware when your partner is watching.
        </>,
        //p8
        <>
            You anxiously watch for your partner's reaction to everything you do. You are afraid of {props.setPronoun(3, partner)} disapproval.
        </>,
        //p9: option 2
        <>
            You leave the relationship because your partner does not accept you as yourself.
        </>,
        //p10
        <>
            You wonder if you made the right choice, and still question whether you really are good enough.
        </>,
        //p11
        <>
            Being single has given you more time to spend with your friends, who enjoy your company.
        </>,
        //p12
        <>
            Your friends like your {props.state.playerPersonality} character, and remind you that you are worthy.
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