import React from 'react';
import Chapters from './chapters/Chapters.js';
import './App.css';

export class App extends React.Component {

  state = {
    chapter: 'title',
    playerName: null,
    playerPronouns: null,
    // playerChildren: null,
    playerPersonality: null,
    playerPassions: [],
    interestPronouns: [],
    statusChapterNum: -1,
    gameInterests: [],
    gameCharacters: [],
    statusCharacter: null,
    statusRelationship: null,
    statusRelationshipNum: null,
    statusBrokeUp: null,
    statusNotAttracted: null,
    // statusChildren: null,
    // statusChildrenNum: null,
    statusCheated: null,
    statusGaveUpPersonality: null,
    statusGaveUpPassion: null,
    statusKilled: null,
    statusHappy: null
  };

  flipChapter(stage) {
    this.setState({ statusChapterNum: this.state.statusChapterNum+1 })
    this.setState({ chapter: stage });
  };

  hidePopup = e => {
    document.querySelector(".popup-background").style.display = "none";
  }

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

  setGameInterests(){
    let pronouns;
      let interests = this.state.gameInterests;

      if(this.state.interestPronouns.includes("none")){
        pronouns = ["they", "she", "he"];
      }else{
        pronouns = this.state.interestPronouns;
      }

      for(let i=0; i<3; i++){
        interests.push(pronouns[Math.floor(Math.random() * pronouns.length)]);
      }
      console.log(interests);
      this.setState({ gameInterests: interests });
  }

  setGameCharacters(){
    let characters = ["notAttracted", "ghoster", "abuser", "disagreePassion", "disagreePersonality"];
    let gameChar = this.state.gameCharacters;

    if(this.state.interestPronouns.includes("none")){
      characters.splice(0,1);
    }

    // if(this.state.playerChildren === "open"){
    //   characters.splice(3,1);
    // }

    for(let i=0; i<3; i++){
      let c = Math.floor(Math.random() * characters.length);
      gameChar.push(characters[c]);
      characters.splice(c, 1);
    }

    console.log(gameChar);
    this.setState({ gameCharacters: gameChar});
  }

  setPassions(){
    let passions = this.state.playerPassions;
    let order = [];
    
    for(let i=0; i<3 ;i++){
      let p = Math.floor(Math.random() * passions.length);
      order.push(passions[p]);
      passions.splice(p, 1);
    }

    this.setState({ playerPassions: order });
  }

  giveUpPassion(){
    let passions = this.state.playerPassions;
    let allFields = ["travel", "food", "music", "art", "film", "social justice", "books", "nature", "sports", "science", "spirituality"]

    for(let i=0; i<3; i++){
      let f = allFields.indexOf(passions[i]);
      allFields.splice(f, 1);
    }

    let p = Math.floor(Math.random() * allFields.length);
    passions[0] = allFields[p];

    this.setState({ playerPassions: passions });
    this.setState({ statusGaveUpPassion: true });

  }

  suppressPersonality(){
    this.setState({ statusGaveUpPersonality: true });
  }

  leaveNotAttracted(){
    this.setState({ statusNotAttracted: false });
  }

  getsKilled(){
    this.setState({ statusKilled: true });
    this.setState({ statusRelationship: false });
  }

  setHappiness(status){
    this.setState({ statusHappy: status});
  }

  startGame(){
    let profile1 = [this.state.playerName, this.state.playerPronouns, this.state.playerPersonality];
    let profile2 = [this.state.playerPassions, this.state.interestPronouns];

    if(profile1.some((x) => x===null) || (profile2).some((x) => x.length===0) || this.state.playerName === "" || this.state.playerPassions.length < 3){
      document.querySelector(".popup-background").style.display = "block";
    }else{
      
      this.setGameInterests();
      this.setGameCharacters();
      this.setPassions();

      this.setState({ chapter: "chapter1"});
    }
  }

  flipCharacter(character){
    this.setState({ statusCharacter: character});
  }

  enterRelationship(attraction){
    let num = this.state.statusRelationshipNum
    this.setState({ statusRelationshipNum: num + 1 });
    this.setState({ statusRelationship: true });

    if(attraction === "notAttracted"){
      this.setState({ statusNotAttracted: true })
    }
  }

  cheatRelationship(){
    let num = this.state.statusRelationshipNum
    this.setState({ statusRelationshipNum: num + 1 });
    this.setState({ statusCheated: true })
  }

  leaveRelationship(){
    this.setState({ statusRelationship: false });
    this.setState({ statusBrokeUp: true });
  }

  // disagreeChildren(){
  //   let wantChildren = this.state.playerChildren;
  //   let numChildren;

  //   if(wantChildren==="no"){
  //     numChildren = Math.floor(Math.random() * (4 - 1) + 1);
  //     this.setState({statusChildren: true});
  //   }else{
  //     numChildren = 0;
  //   }

  //   this.setState({statusChildrenNum: numChildren});
  // }

  // haveChildren(){
  //   let numChildren = Math.floor(Math.random() * (3 - 1) + 1);
  //   this.setState({statusChildrenNum: numChildren});
  //   this.setState({statusChildren: true});
  // }

  render(){
    return (
      <Chapters
        state = {this.state}
        flipChapter = {this.flipChapter.bind(this)}
        flipCharacter = {this.flipCharacter.bind(this)}
        handleChange = {this.handleChange.bind(this)}
        handlePlayerPassions = {this.handlePlayerPassions.bind(this)}
        handleInterestPronouns = {this.handleInterestPronouns.bind(this)}
        startGame = {this.startGame.bind(this)}
        hidePopup = {this.hidePopup.bind(this)}
        enterRelationship = {this.enterRelationship.bind(this)}
        cheatRelationship = {this.cheatRelationship.bind(this)}
        leaveRelationship = {this.leaveRelationship.bind(this)}
        // disagreeChildren = {this.disagreeChildren.bind(this)}
        // haveChildren = {this.haveChildren.bind(this)}
        giveUpPassion = {this.giveUpPassion.bind(this)}
        suppressPersonality = {this.suppressPersonality.bind(this)}
        getsKilled = {this.getsKilled.bind(this)}
        setHappiness = {this.setHappiness.bind(this)}
        leaveNotAttracted = {this.leaveNotAttracted.bind(this)}
      />
    );
  }
  
}

export default App;
