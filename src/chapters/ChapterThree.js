import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Characters from '../characters/Characters';

export default function ChapterThree(props){

    const [pageNum, setPage] = useState(0);
    const noNextButton = [5,7,10,16];
    const lastPage = [10]
    const jobs = {"travel" : "in tourism", "food":"as a chef", "books": "as a writer", "nature":"as a botanist", "spirituality":"as a healer"};
    const interest = props.state.gameInterests[2];

    console.log(interest);

    const setPluralChildren = (num) => {
        if(num===1){
            return "child";
        }else{
            return "children";
        }
    }

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

        if(props.state.interestPronouns.includes("none") || props.state.gameCharacters[2] === "notAttracted"){
            attraction = "notAttracted";
        }else{
            attraction = "attracted";
        }

        props.flipCharacter(props.state.gameCharacters[2]);
        props.enterRelationship(attraction);
        setPage(pageNum+1);
    }

    const optionTwo = () => {
        setPage(pageNum+3);
    }

    const optionThree = () => {
        props.flipCharacter(props.state.gameCharacters[2]);
        props.cheatRelationship();
        setPage(pageNum+6);
    }

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
            You have retired from your career&nbsp;

            {props.state.playerPassions[0] in jobs?
            <>
                {jobs[props.state.playerPassions[0]]}
            </>
            :
            <>
                in {props.state.playerPassions[0]}
            </>
            }
            
            , and you have made several life achievements you are proud of.
            {!props.state.statusRelationship ?
            <>
                &nbsp;But you are getting on in years, and this is your last chance to find love.
            </>
            :<></>
            }
        </>,
        //p2
        <>
            One day, a new neighbor moved in next door. {capitalize(setPronoun(1))} live{setPlural(setPronoun(1))} alone, and you often see {setPronoun(2)} spending time at the porch.
        </>,
        //p3
        <>
            As time passes, you find yourself conversing with {setPronoun(2)} more and more.
        </>,
        //p4
        <>
            {capitalize(setPronoun(1))} find{setPlural(setPronoun(1))} your {props.state.playerPersonality} character charming, and you feel as if you have been friends your whole lives.&nbsp;

            {props.state.statusRelationship?
            <>
                You already have a life partner…
            </>
            :<></>}
        </>,
        //p5: options
        <>
            <ul class="options">
                <li onClick={optionOne}>
                    {props.state.interestPronouns.includes("none") || props.state.gameCharacters[2] === "notAttracted" ?
                    <>
                        You’re not actually attracted to {setPronoun(2)}, but you want to spend your old age with someone you can be emotionally intimate with.&nbsp;
                    </>
                    :
                    <>
                        You almost can’t believe that you meet someone who seems so right for you at this point in life.&nbsp;
                    </>
                    }

                    You decide to&nbsp;

                    {props.state.statusRelationship?
                    <>
                        break up with your current partner,&nbsp;
                    </>
                    :<></>}
                    take a leap of faith and start a new relationship with {setPronoun(2)}.
                </li>
                <li onClick={optionTwo}>
                    You are glad to find someone who really understands you. You decide to cherish your new friendship. 
                </li>
                {props.state.statusRelationship?
                    <li onClick={optionThree}>
                        You feel that you have finally found the right person, but it is too late to start a new life with someone new. You decide to cheat on your current partner with {setPronoun(2)}.
                    </li>
                :<></>}
            </ul>
        </>,
        //p6: option 1
        <>
            You choose to live your old days with your new life partner.
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
            {props.state.statusChildren?
                <>
                    Even though your {setPluralChildren(props.state.statusChildrenNumber)} no longer lives near you,&nbsp;
                </>
            :
                <>
                    Even though you no longer have many friends and acquintances living near you,&nbsp;
                </>
            }
            you seldom feel lonely because you have your good friend keeping you company.
        </>,
        //p9
        <>
            {capitalize(setPronoun(1))} motivate{setPlural(setPronoun(1))} you to stay active and keep learning new things well into your 70s.
        </>,
        //p10
        <>
            You feel alive and look forward to each new day.
        </>,
        // p11: option 3
        <>
            You develop a romantic relationship with your new friend behind your partner's back. You feel like you are young again.
        </>,
        // p12
        <>
            One day, while on a date with your lover, you run into your partner.
        </>,
        // p13
        <>
            You try to lie about your affair, but your partner does not buy it. Your partner calls you selfish and shameless.
        </>,
        // p14
        <>
            Your partner believes that they deserve better than be with a toxic person, and decide to leave you.
        </>,
        // p15
        <>
            You continue dating your current lover.
        </>,
        // p16
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
        </>
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
                        <button onClick={() => {props.flipChapter("death")}} class="button-next">
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