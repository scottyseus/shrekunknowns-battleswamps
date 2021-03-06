import {FONT_COLOR} from "../common/constants";
import StateTransitionButton from "../common/StateTransitionButton";
import GitButton from "../common/gitButton";
export default function aboutState(game) {

    let textCrawlStyle = { font: '15px Gloria Hallelujah', fill: FONT_COLOR, align: 'left', wordWrap: true, wordWrapWidth: game.width-60};
    let textCrawl = 'About\n\n'
                    + 'Original story, art, music, and gameplay developed by libjared, scottyseus, \njronsomers, and endlessDreamHero  for'
                    + ' Ludum Dare Jam 44.\n\n'
                    + 'Check out the links below:\n\n';

    return {
        create: function() {
            StateTransitionButton(game, 60, 30, '< Back', "Entry");
            GitButton(game, 60, 250, '> scottyseus on GitHub <', "https://github.com/scottyseus/shrekunknowns-battleswamps");
            GitButton(game, 60, 290, '> libjared on GitHub <', "https://github.com/libjared");
            GitButton(game, 60, 330, "> jronsomers GitHub", "https://github.com/jronSomers");
            GitButton(game, 60, 370, '> Ludum Dare page <', "https://ldjam.com/events/ludum-dare/44/shrekunknowns-battleswamps");

            const aboutText = game.add.text(60, 90, textCrawl, textCrawlStyle);
        }
    };
};