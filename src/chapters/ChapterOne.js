import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Characters from '../characters/Characters';

export default function ChapterOne(props){

    const [pageNum, setPage] = useState(0);
    const noNextButton = [5,7,10,13];
    const lastPage = [10,13]
    const interest = props.state.gameInterests[0];

    console.log(interest);

    const setPronoun = (type, person=interest) => {
        if(person === "they"){
            if(type===1){
                return "they";
            }else if(type===2){
                return "them";
            }else{
                return "their";
            }
        }else if(person === "she"){
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

    const setPluralDo = (type) =>{
        if(type==='they'){
            return 'do';
        }else{
            return 'does';
        }
    }

    const setPluralAre = (type) =>{
        if(type==='they'){
            return 'are';
        }else{
            return 'is';
        }
    }

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const optionOne = () => {
        let attraction;

        if(props.state.interestPronouns.includes("none") || props.state.gameCharacters[0] === "notAttracted"){
            attraction = "notAttracted";
        }else{
            attraction = "attracted";
        }

        props.flipCharacter(props.state.gameCharacters[0]);
        props.enterRelationship(attraction);
        setPage(pageNum+1);
    }

    const optionTwo = () => {
        setPage(pageNum+3);
    }

    const optionThree = () => {
        setPage(pageNum+6);
    }

    const images = [
        <>(image)</>, <>(image)</>, <>(image)</>, <>(image)</>, <>(image)</>
    ];

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
            One day, you meet someone really cool online, and {setPronoun(1)} seem{setPlural(setPronoun(1))} to really like you.
        </>,
        //p3
        <>
            You meet with {setPronoun(2)} in-person several times. You have a lot of fun and really get along with {setPronoun(2)}.
        </>,
        //p4
        <>
            Then comes the time to decide what your relationship means…
        </>,
        //p5: options
        <>
            <ul class="options">
                <li onClick={optionOne}>
                    {props.state.interestPronouns.includes("none") || props.state.gameCharacters[0] === "notAttracted" ?
                    <>
                        You’re not actually attracted to {setPronoun(2)}. But you don’t want to hurt their feelings and don’t want to be alone.&nbsp;
                    </>
                    :
                    <></>
                    }
                    You ask {setPronoun(2)} if {setPronoun(1)} want{setPlural(setPronoun(1))} to date seriously.
                </li>
                <li onClick={optionTwo}>
                    This is fun, but you know that it won’t last. You tell {setPronoun(2)} that you just want to keep it casual.
                </li>
                <li onClick={optionThree}>
                    {capitalize(setPronoun(1))} seem like a nice person, but you’re not really into {setPronoun(2)}. You tell {setPronoun(2)} that you don’t see {setPronoun(2)} that way.
                </li>
            </ul>
        </>,
        // p6: option 1
        <>
            You are now dating seriously. You spend a lot of time together and get to know each other's friends and family.
        </>,
        //p7
        <>
            <Characters
            {...props}
            setPronoun = {setPronoun}
            setPlural = {setPlural}
            setPluralHave = {setPluralHave}
            setPluralDo = {setPluralDo}
            setPluralAre = {setPluralAre}
            capitalize = {capitalize}
            />
        </>,
        //p8: option 2
        <>
        You keep seeing {setPronoun(2)}, but after several months, you fight more often and eventually grow apart.
        </>,
        //p9
        <>
        {capitalize(setPronoun(1))} decide{setPlural(setPronoun(1))} to break up with you.
        </>,
        //p10
        <>
        Three years later, you hear that {setPronoun(1)} got married and look{setPlural(setPronoun(1))} really happy.
        </>,
        //p11: option3
        <>
        {capitalize(setPronoun(1))} seem really sad to let you go, but you feel that you made the right decision by being honest and not wasting {(setPronoun(3))} time.
        </>,
        //p12
        <>
        {capitalize(setPronoun(1))} find it too painful to be just friends, and you never see {setPronoun(2)} again.
        </>,
        //p13
        <>
        Three years later, you stumble upon {setPronoun(3)} profile on social media. It seems that {setPronoun(1)} got married and look{setPlural(setPronoun(1))} really happy.
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
                        <button onClick={() => {props.flipChapter("chapter2")}} class="button-next">
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