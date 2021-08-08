import React from 'react';
import NotAttracted from './NotAttracted';
import Ghoster from './Ghoster';
import Abuser from './Abuser';
import Children from './Children';
import Passion from './Passion';
import Personality from './Personality';

export default function Chapters(props){
    switch(props.state.statusCharacter){
        case "notAttracted":
            return(
                <NotAttracted {...props}/>
            );
        case "ghoster":
            return(
                <Ghoster {...props}/>
            );
        case "abuser":
            return(
                <Abuser {...props}/>
            );
        case "disagreeChildren":
            return(
                <Children {...props}/>
            );
        case "disagreePassion":
            return(
                <Passion {...props}/>
            );
        case "disagreePersonality":
            return(
                <Personality {...props}/>
            );
    }
}