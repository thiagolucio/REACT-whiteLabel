import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

export default class SelectCreditCard extends Component {
    currentImage =  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="62px" height="56px" viewBox="0 0 183.000000 144.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M537 1153 l-37 -36 0 -407 0 -407 37 -36 36 -37 527 0 527 0 36 37 37 36 0 407 0 407 -37 36 -36 37 -527 0 -527 0 -36 -37z m1041 -88 c8 -8 8 -106 0 -111 -9 -6 -946 -6 -956 0 -8 5 -8 98 0 111 6 10 946 10 956 0z m0 -359 c4 -2 6 -83 4 -180 l-3 -176 -479 0 -479 0 -3 173 c-2 94 0 177 4 182 6 10 940 11 956 1z"/><path d="M10 818 c0 -10 4 -18 9 -18 4 0 52 -43 105 -95 53 -52 100 -95 106 -95 15 0 224 209 216 217 -3 4 -103 7 -221 7 -199 1 -215 0 -215 -16z"/></g></svg>;

        ;
    state;
    cards;
    menuItems = [];
    constructor(props) {
        super(props);

        this.cards = [
            {image: './img/visa-card-color.png', value: 'visa'},
            {image: './img/master-card-color.png', value: 'master'},
            {image: './img/aura-card-color.png', value: 'aura'},
            {image: './img/dinner-card-color.png', value: 'dinner'},
            {image: './img/discover-card-color.png', value: 'discover'},
            {image: './img/elo-card-color.png', value: 'elo'},
            {image: './img/jcb-card-color.png', value: 'jcb'}
        ];
        this.state = {
            value: 0,
        };

        this.menuItems = this.cards.map((card, i) => {
            return <MenuItem primaryText="" key={i} value={card.value}>
                    <img src={card.image} id={card.value}/>
                   </MenuItem>
        });
    }

    handleChange = (event, value) => {
        let image = './img/{1}-card-color.png'.replace('{1}', value);
        this.currentImage = <img src={image} id={value} />;
        this.setState({value});
    };

    render() {
        return (
                <IconMenu
                          iconButtonElement={
                              <IconButton>
                                  {this.currentImage}
                              </IconButton>
                          }
                          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                          targetOrigin={{horizontal: 'left', vertical: 'top'}}
                          value={this.state.value}
                          onChange={this.handleChange}
                          maxHeight={500}
                >
                    {this.menuItems}
                </IconMenu>
        );
    }
}