import React from 'react';

import Title from './Title';
import Profile from './Profile';
import ChapterOne from './ChapterOne';
import ChapterTwo from './ChapterTwo';
// import ChapterChildren from './ChapterChildren';
import ChapterThree from './ChapterThree';
import Death from './Death';

export default function Chapters(props){
    switch(props.state.chapter){
        case "title":
            return(
                <Title {...props}/>
            );
        case "profile":
            return(
                <Profile {...props}/>
            );
        case "chapter1":
            return(
                <ChapterOne {...props}/>
            );
        case "chapter2":
            return(
                <ChapterTwo {...props}/>
            );
        // case "chapter2.5":
        //     return(
        //         <ChapterChildren {...props}/>
        //     )
        case "chapter3":
            return(
                <ChapterThree {...props}/>
            );
        case "death":
            return(
                <Death {...props}/>
            );
    }
}