import React from 'react';

export default function Tombstone(props){
    const pronoun = props.state.playerPronouns;

    const setPronoun = (type, person) => {
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

    return(
        <div class="center">
            <div class="tombstone">
                <h1>Here lies {props.state.playerName}</h1><br/>
                <h2>
                    {props.state.statusRelationship?<>
                    a&nbsp;
                        {props.state.statusRelationshipNum===1?'loyal ':<></>}
                    partner,&nbsp;
                    </>
                    :<></>}

                    who&nbsp;

                    {!props.state.statusGaveUpPassion?
                    <>  
                        loved {props.state.playerPassions[0]}, {props.state.playerPassions[1]}, and {props.state.playerPassions[2]},<br/>
                    </>
                    :<>
                        loved {props.state.playerPassions[1]} and {props.state.playerPassions[2]},<br/>
                    </>
                    }

                    {!props.state.statusGaveUpPassion && !props.state.statusGaveUpPersonality && !props.state.statusNotAttracted?
                        <>stayed true to {setPronoun(2, pronoun)}sel{pronoun==='they'?'ves':'f'},<br/></>
                    :<></>}

                    {props.state.statusRelationshipNum>1?
                        <>gave people a chance,<br/></>
                    :<></>}

                    {props.state.statusCheated?
                        <>was a selfish coward,<br/></>
                    :<></>}

                    {props.state.statusHappy==='yes'?
                        <>and died happy.</>
                    :<></>}

                    {props.state.statusHappy==='no'?
                        <>and died with regrets.</>
                    :<></>}

                    {props.state.statusKilled?
                        <>and died tragically.</>
                    :<></>}

                </h2>
            </div>
            <p>
                {props.state.statusHappy==='no'?
                    <>Fortunately, real life gives you many more chances and options. Hopefully you can make the best of them.</>
                :<></>}
            </p>
            <p>
                <button class="button-play" onClick={() => {window.location.reload();}}>Live Another Life</button>
            </p>
        </div>
    );
};