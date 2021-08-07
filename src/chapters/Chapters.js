import React from 'react';

import Title from './Title';
import Profile from './Profile';
import ChapterOne from './ChapterOne';
import ChapterTwo from './ChapterTwo';
import ChapterThree from './ChapterThree';
import Death from './Death';

export default function Chapters(props){
    switch(props.state.chapter){
        case "title":
            return(
                <Title
                state = {props.state}
                flipChapter = {props.flipChapter}
                />
            );
        case "profile":
            return(
                <Profile
                state = {props.state}
                handleChange = {props.handleChange}
                handlePlayerPassions = {props.handlePlayerPassions}
                handleInterestPronouns = {props.handleInterestPronouns}
                startGame = {props.startGame}
                hidePopup = {props.hidePopup}
                />
            );
        case "chapter1":
            return(
                <ChapterOne
                state = {props.state}
                flipChapter = {props.flipChapter}
                />
            );
        case "chapter2":
            return(
                <ChapterTwo
                state = {props.state}
                flipChapter = {props.flipChapter}
                />
            );
        case "chapter3":
            return(
                <ChapterThree
                state = {props.state}
                flipChapter = {props.flipChapter}
                />
            );
        case "death":
            return(
                <Death
                state = {props.state}
                flipChapter = {props.flipChapter}
                />
            );
    }
}