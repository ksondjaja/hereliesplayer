import React from 'react';
import Chapters from './chapters/Chapters.js';
import './App.css';

export class App extends React.Component {

  state = {
    chapter: 'title',
    playerName: null,
    playerPronouns: null,
    playerChildren: null,
    playerPersonality: null,
    playerPassions: [],
    interestPronouns: [],
    statusChapterNum: null,
    statusNotAttracted: null,
    statusRelationship: null,
    statusRelationshipNum: null,
    statusChildren: null,
    statusChildrenNum: null,
    statusCheated: null,
    statusPersonality: null,
    statusGaveUp: null,
    statusKilled: null,
    statusHappy: null
  };

  flipChapter(stage) {
    this.setState({ chapter: stage });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleInterestPronouns = item => e => {
    let interestArray = this.state.interestPronouns;

    if(e.target.checked){
      if(item==="none"){
        interestArray = ["none"];
        this.setState({ interestPronouns: interestArray });
      }else{
        if(interestArray.includes(item)===false){
          interestArray.push(item);
          if(interestArray.includes("none")){
            let i = interestArray.indexOf("none");
            interestArray.splice(i, 1);
          }
          this.setState({ interestPronouns: interestArray });
        }
      }
    }else{
      if(interestArray.includes(item)){
        let i = interestArray.indexOf(item);
        interestArray.splice(i, 1);
        this.setState({ interestPronouns: interestArray });
      }
    }
  }

  handlePlayerPassions = item => e => {
    let passionsArray = this.state.playerPassions;

    if(e.target.checked){
      if(passionsArray.length < 3){
        if(passionsArray.includes(item)===false){
          passionsArray.push(item);
          this.setState({ playerPassions: passionsArray });
        }
      }
    }else{
      if(passionsArray.includes(item)){
        let i = passionsArray.indexOf(item);
        passionsArray.splice(i, 1);
        this.setState({ playerPassions: passionsArray });
      }
    }
  }

  startGame(){
    let profile1 = [this.state.playerName, this.state.playerPronouns, this.state.playerChildren, this.state.playerPersonality];
    let profile2 = [this.state.playerPassions, this.state.interestPronouns];

    if(profile1.some((x) => x===null) || (profile2).some((x) => x.length===0) || this.state.playerName === "" || this.state.playerPassions.length < 3){
      document.querySelector(".popup-background").style.display = "block";
    }else{
      this.setState({ chapter: "chapter1"});
    }
  }

  hidePopup = e => {
    document.querySelector(".popup-background").style.display = "none";
  }

  render(){
    return (
      <Chapters
        state = {this.state}
        flipChapter = {this.flipChapter.bind(this)}
        handleChange = {this.handleChange.bind(this)}
        handlePlayerPassions = {this.handlePlayerPassions.bind(this)}
        handleInterestPronouns = {this.handleInterestPronouns.bind(this)}
        startGame = {this.startGame.bind(this)}
        hidePopup = {this.hidePopup.bind(this)}
      />
    );
  }
  
}

export default App;
