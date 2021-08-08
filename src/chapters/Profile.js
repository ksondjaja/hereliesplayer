import React from 'react';

export default function Profile(props){

    const {
        state,
        handleChange,
        handlePlayerPassions,
        handleInterestPronouns,
        startGame,
        hidePopup
        } = props;

    return(
        <div class="main">
            <div class="popup-background">
                <div class="popup">
                    <button class="button-play" id="popup-close" onClick={hidePopup}>X</button>
                    <div class="popup-text">Please fill in all the fields as prompted to start the start game</div>
                </div>
            </div>
        
            <p>
                What is your name?<br/>
                <input id="player-name" type="text" onChange={handleChange('playerName')}/>
            </p>
            
            <p>
                What are your pronouns?<br/>
                <input
                name="player-pronouns" id="player-pronouns-they" value="they" type="radio"
                checked={state.playerPronouns === 'they'}
                onChange={handleChange('playerPronouns')}
                />
                <label for="player-pronouns-they">They/them</label>

                <input
                name="player-pronouns" id="player-pronouns-she" value="she" type="radio"
                checked={state.playerPronouns === 'she'}
                onChange={handleChange('playerPronouns')}
                />
                <label for="player-pronouns-she">She/her</label>

                <input
                name="player-pronouns" id="player-pronouns-he" value="he" type="radio"
                checked={state.playerPronouns === 'he'}
                onChange={handleChange('playerPronouns')}
                />
                <label for="player-pronouns-he">He/him</label>
            </p>

            <p>
                What pronouns do people you are attracted to use?<br/>
                <input
                name="interest-pronouns" id="interest-pronouns-they" value="they" type="checkbox"
                checked={state.interestPronouns.includes('they') === true}
                onChange={handleInterestPronouns('they')}
                />
                <label for="interest-pronouns-they">They/them</label>

                <input
                name="interest-pronouns" id="interest-pronouns-she" value="she" type="checkbox"
                checked={state.interestPronouns.includes('she') === true}
                onChange={handleInterestPronouns('she')}
                />
                <label for="interest-pronouns-she">She/her</label>

                <input
                name="interest-pronouns" id="interest-pronouns-he" value="he" type="checkbox"
                checked={state.interestPronouns.includes('he') === true}
                onChange={handleInterestPronouns('he')}
                />
                <label for="interest-pronouns-he">He/him</label>

                <input
                name="interest-pronouns" id="interest-pronouns-none" value="none" type="checkbox"
                checked={state.interestPronouns.includes('none') === true}
                onChange={handleInterestPronouns('none')}
                />
                <label for="interest-pronouns-none">Actually, I do not feel attracted to anyone</label>
            </p>
            
            <p>
                Do you want children?
                <input
                name="player-children" id="player-children-yes" value="yes" type="radio"
                checked={state.playerChildren === 'yes'}
                onChange={handleChange('playerChildren')}
                />
                <label for="player-children-yes">Yes</label>

                <input
                name="player-children" id="player-children-open" value="open" type="radio"
                checked={state.playerChildren === 'open'}
                onChange={handleChange('playerChildren')}
                />
                <label for="player-children-open">I am open to having them</label>

                <input
                name="player-children" id="player-children-no" value="no" type="radio"
                checked={state.playerChildren === 'no'}
                onChange={handleChange('playerChildren')}
                />
                <label for="player-children-no">No</label>

            </p>

            <p>
                Which of these best describe your personality?<br/>
                <input
                name="player-personality" id="player-personality-sociable" value="sociable" type="radio"
                checked={state.playerPersonality === 'sociable'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-sociable">Sociable</label>

                <input
                name="player-personality" id="player-personality-reserved" value="reserved" type="radio"
                checked={state.playerPersonality === 'reserved'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-reserved">Reserved</label>

                <input
                name="player-personality" id="player-personality-playful" value="playful" type="radio"
                checked={state.playerPersonality === 'playful'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-playful">Playful</label>

                <input
                name="player-personality" id="player-personality-serious" value="serious" type="radio"
                checked={state.playerPersonality === 'serious'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-serious">Serious</label>

                <input
                name="player-personality" id="player-personality-sarcastic" value="sarcastic" type="radio"
                checked={state.playerPersonality === 'sarcastic'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-sarcastic">Sarcastic</label>

                <input
                name="player-personality" id="player-personality-agreeable" value="agreeable" type="radio"
                checked={state.playerPersonality === 'agreeable'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-agreeable">Agreeable</label>

                <input
                name="player-personality" id="player-personality-ambitious" value="ambitious" type="radio"
                checked={state.playerPersonality === 'ambitious'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-ambitious">Ambitious</label>

                <input
                name="player-personality" id="player-personality-carefree" value="carefree" type="radio"
                checked={state.playerPersonality === 'carefree'}
                onChange={handleChange('playerPersonality')}
                />
                <label for="player-personality-carefree">Carefree</label>
            </p>
            
            <p>
                What are your passions? (pick 3)<br/>
                <input
                name="player-passions" id="player-passions-travel" value="travel" type="checkbox"
                checked={state.playerPassions.includes('travel') === true}
                onChange={handlePlayerPassions('travel')}
                />
                <label for="player-passions-travel">Travel</label>

                <input
                name="player-passions" id="player-passions-food" value="food" type="checkbox"
                checked={state.playerPassions.includes('food') === true}
                onChange={handlePlayerPassions('food')}
                />
                <label for="player-passions-food">Food</label>

                <input
                name="player-passions" id="player-passions-music" value="music" type="checkbox"
                checked={state.playerPassions.includes('music') === true}
                onChange={handlePlayerPassions('music')}
                />
                <label for="player-passions-music">Music</label>

                <input
                name="player-passions" id="player-passions-art" value="art" type="checkbox"
                checked={state.playerPassions.includes('art') === true}
                onChange={handlePlayerPassions('art')}
                />
                <label for="player-passions-art">Art</label>

                <input
                name="player-passions" id="player-passions-film" value="film" type="checkbox"
                checked={state.playerPassions.includes('film') === true}
                onChange={handlePlayerPassions('film')}
                />
                <label for="player-passions-film">Film</label>

                <input
                name="player-passions" id="player-passions-justice" value="social justice" type="checkbox"
                checked={state.playerPassions.includes('social justice') === true}
                onChange={handlePlayerPassions('social justice')}
                />
                <label for="player-passions-justice">Social Justice</label>

                <input
                name="player-passions" id="player-passions-books" value="books" type="checkbox"
                checked={state.playerPassions.includes('books') === true}
                onChange={handlePlayerPassions('books')}
                />
                <label for="player-passions-books">Books</label>

                <input
                name="player-passions" id="player-passions-nature" value="nature" type="checkbox"
                checked={state.playerPassions.includes('nature') === true}
                onChange={handlePlayerPassions('nature')}
                />
                <label for="player-passions-nature">Nature</label>

                <input
                name="player-passions" id="player-passions-sports" value="sports" type="checkbox"
                checked={state.playerPassions.includes('sports') === true}
                onChange={handlePlayerPassions('sports')}
                />
                <label for="player-passions-sports">Sports</label>

                <input
                name="player-passions" id="player-passions-technology" value="technology" type="checkbox"
                checked={state.playerPassions.includes('technology') === true}
                onChange={handlePlayerPassions('technology')}
                />
                <label for="player-passions-technology">Technology</label>

                <input
                name="player-passions" id="player-passions-spirituality" value="spirituality" type="checkbox"
                checked={state.playerPassions.includes('spirituality') === true}
                onChange={handlePlayerPassions('spirituality')}
                />
                <label for="player-passions-spirituality">Spirituality</label>
                
            </p>  

            <button class="button-play" onClick={() => {startGame()}}>Start your dating life</button>

        </div>
    );
};