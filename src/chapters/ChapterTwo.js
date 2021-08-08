import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Characters from '../characters/Characters';

export default function ChapterTwo(props){

    const [pageNum, setPage] = useState(0);
    const noNextButton = [5,6,12,13];
    const lastPage = [12]
    const jobs = {"travel" : "in tourism", "food":"as a chef", "books": "as a writer", "nature":"as a botanist", "spirituality":"as a healer"};
    const interest = props.state.gameInterests[1];

    console.log(interest);

    const setPronoun = (type) => {
        if(interest === "they"){
            if(type===1){
                return "they";
            }else if(type===2){
                return "them";
            }else{
                return "their";
            }
        }else if(interest === "she"){
            if(type===1){
                return "she";
            }else{
                return "her";
            }
        }else{
            if(type===1){
                return "he";
            }else{
                return "him";
            }
        }
    }

    const setPlural = (type) =>{
        if(type==='they'){
            return '';
        }else{
            return 's';
        }
    }

    const setPluralHave = (type) =>{
        if(type==='they'){
            return 'have';
        }else{
            return 'has';
        }
    }

    const setA = (thing) =>{
        if (["a", "i", "u", "e", "o"].includes(thing[0])){
            return "an";
        }else{
            return "a";
        }
    }

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const optionOne = () => {
        let attraction;

        if(props.state.interestPronouns.includes("none") || props.state.gameCharacters[1] === "notAttracted"){
            attraction = "notAttracted";
        }else{
            attraction = "attracted";
        }

        props.flipCharacter(props.state.gameCharacters[1]);
        props.enterRelationship(attraction);
        setPage(pageNum+1);
    }

    const optionTwo = () => {
        setPage(pageNum+3);
    }

    const optionThree = () => {
        props.flipCharacter(props.state.gameCharacters[1]);
        props.cheatRelationship();
        setPage(pageNum+8);
    }

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
            You’re more mature and experienced. You have a stable job&nbsp;
            {props.state.playerPassions[0] in jobs?
            <>
                {jobs[props.state.playerPassions[0]]}&nbsp;
            </>
            :
            <>
                in {props.state.playerPassions[0]}&nbsp;
            </>
            }
            and live quite comfortably.

            {!props.state.statusRelationship ?
            <>
                &nbsp;But you still want to meet someone you’re compatible with and spend your lives together.
            </>
            :<></>
            }
            
        </>,
        //p2
        <>
            One day,

            {props.state.playerPassions[1]==="travel"?
            <>
                while flying out on vacation&nbsp;
            </>
            :
            <>  {props.state.playerPassions[1]==="nature"?
                <>
                    while camping on the weekend&nbsp;
                </>
                :
                <>
                at {setA(props.state.playerPassions[1])} {props.state.playerPassions[1]} event,&nbsp;
                </>
                }
            </>
            }
            someone strikes up a conversation with you.
        </>,
        //p3
        <>
            It turns out that the two of you have so much in common that you ended up talking to {setPronoun(2)} without realizing that many hours have passed.
        </>,
        //p4
        <>
            You become good friends, but after several months {setPronoun(1)} tell{setPlural(setPronoun(1))} you that {setPronoun(1)} {setPluralHave(setPronoun(1))} romantic feelings for you.&nbsp;
            
            {props.state.statusRelationship ?
            <>
                You are in a committed relationship...
            </>
            :<></>
            }
        </>,
        //p5: options
        <>
            <ul class="options">
                <li onClick={optionOne}>
                    {(props.state.interestPronouns.includes("none") || props.state.gameCharacters[1] === "notAttracted") && !props.state.statusRelationship ?
                    <>
                        You’re not actually attracted to {setPronoun(2)}, but you’re lonely and just want to be with someone you can connect with.&nbsp;
                    </>
                    :<>
                        You’re happy that you’ve found someone this wonderful.&nbsp;
                    </>}

                    {props.state.statusRelationship?
                    <>
                        {capitalize(setPronoun(1))} fill{setPlural(setPronoun(1))} something that you think is missing in your current relationship. You decide to break up with your current partner, and then start a romantic relationship with your new friend. 
                    </>
                    :
                    <>
                        You agree to be in a relationship with {setPronoun(2)}.
                    </>
                    }
                </li>
                <li onClick={optionTwo}>
                    You care about {setPronoun(2)} as a friend, but you don’t have any romantic feelings for {setPronoun(2)}. You decide to be honest and tell {setPronoun(2)} how you feel.
                </li>
                {props.state.statusRelationship?
                <li onClick={optionThree}>
                    You cannot help but feel drawn to this special person. At the same time, you’re afraid of giving up the life you have built with your partner. So you decide to cheat on your current partner with your new friend.
                </li>
                :<></>}
            </ul>
        </>,
        //p6: option 1
        <>
            You move in and begin a life together. You make future plans, such as buying a dream home.
        </>,
        //p7
        <>
            <Characters
            {...props}
            setPronoun = {setPronoun}
            setPlural = {setPlural}
            setPluralHave = {setPluralHave}
            capitalize = {capitalize}
            />
        </>,
        //p8: option 2
        <>
            Your friend feels hurt, but accepts your answer.
        </>,
        //p9
        <>
            After taking some time to heal, you’re able to maintain your friendship, although you're no longer as close as you were before.
        </>,
        //p10
        <>
            This friendship still becomes an important part of your life for a long time.
        </>,
        //p11
        <>
            One day your friend has to move to a different country to pursue a rare career opportunity.
        </>,
        //p12
        <>
            You rarely have a chance to see {setPronoun(2)} anymore, but you stay in touch.
        </>,
        //p13: option 3
        <>
            <Characters
            {...props}
            setPronoun = {setPronoun}
            setPlural = {setPlural}
            setPluralHave = {setPluralHave}
            capitalize = {capitalize}
            />
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

                    {lastPage.includes(pageNum) && !props.state.statusRelationship && props.state.playerChildren==="yes" && props.state.playerChildrenNum===0 ?
                        <button onClick={() => {props.haveChildren(); props.flipChapter("chapter2.5")}} class="button-next">
                            <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                        </button>
                    :
                    <></>
                    }

                    {lastPage.includes(pageNum) && !(props.state.playerChildren==="yes")?
                        <button onClick={() => {props.flipChapter("chapter3")}} class="button-next">
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