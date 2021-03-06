import StateTransitionButton from "../common/StateTransitionButton";
import TitleText from '../common/TitleText';

const TITLE_Y = 70;

export default function entryState(game) {
    return {
        preload: function() {
        },

        init: function() {
        },
 
        create: function() {
            game.sound.stopAll();
            TitleText(game, game.width / 2, TITLE_Y, "ShrekUnknown's\nBattleSwamps");

            StateTransitionButton(game, 30,TITLE_Y + 72, "Play", "Instructions");
            StateTransitionButton(game, 30, TITLE_Y + 72 * 2,'About', "About");
        },

        update: function() {
            
        }
    }
};