import React from 'react';
import Collapse, {Panel} from 'rc-collapse';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import ContentCheck from 'material-ui/svg-icons/navigation/check';
import ContentReceipt from 'material-ui/svg-icons/action/receipt';

const style = {
    textList: {
        fontSize: 14
    },
    titleList: {
        fontSize: 18,
        color: '#333',
        fontWeight: '400',
        backgroundColor: '#eeeeee',
        padding: 18,
        borderBottom: '2px solid #1E88E5',
        borderRadius: 0,
        width: '100%',
    }
};

const styles = {
    active: { display: 'inherit'},
    inactive: {display: 'none'}
}

export default class CollapseList extends React.Component {
    constructor() {
        super();
        this.state = {active: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        const stateStyle = this.state.active
            ? styles.active
            : styles.inactive;
        return (
            <div className="hidden-md hidden-lg margin-bottom50">
                <Collapse accordion={true}>
                    <RaisedButton
                        onClick={this.toggle}
                        label="Nº do pedido: 124741"
                        secondary={true}
                        style={style.titleList}
                        icon={< ContentReceipt />}
                    />
                    <List style={stateStyle} className="styleList">
                        <ListItem primaryText="" leftIcon={< ContentCheck />}>
                            <span style={style.textList}>Computador Samsung 15 - R$ 15,00</span>
                        </ListItem>
                        <ListItem primaryText="" leftIcon={< ContentCheck />}>
                            <span style={style.textList}>Mesa para computador Tipo Escrivaninha Modelo 025458 - Motorola - R$ 30,44</span>
                        </ListItem>
                        <ListItem primaryText="" leftIcon={< ContentCheck />}>
                            <span style={style.textList}>Celular Samsung Galaxy S7 - R$ 1999,99</span>
                        </ListItem>
                    </List>
                </Collapse>
            </div>
        );
    }
}
