import {FONT_COLOR, ButtonStyle} from "../common/constants";

// instance of the game, x coordinate, y coordinate, button display text, and state to move to
const GenericButton = (game, x, y, btnName, callback) => {
    const genericButton = game.add.text(x, y, btnName, ButtonStyle);
    genericButton.anchor.setTo(0,0);
    genericButton.inputEnabled = true;
    genericButton.events.onInputUp.add(callback);
    genericButton.events.onInputOver.add((( ) => {
        genericButton.alpha = .5;
    }), this);
    genericButton.events.onInputOut.add(() => {
        genericButton.alpha = 1;
    }, this);

    return genericButton;
};

export default GenericButton;