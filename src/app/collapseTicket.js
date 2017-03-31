import React from 'react';
import ReactDOM from 'react-dom';
import Collapse,{ Panel } from 'rc-collapse';
import {List, ListItem} from 'material-ui/List';
import ContentCheck from 'material-ui/svg-icons/navigation/check';
import ContentReceipt from 'material-ui/svg-icons/action/receipt';


//Adicionar efeito
// toggle() {
// this.setState({
// accordion: !this.state.accordion,
// });

const style = {
    textList: { fontSize: 14 },
    titleList: { fontSize: 18,color: '#333',fontWeight: '400', backgroundColor: '#eeeeee',padding: 18, borderBottom: '2px solid #1E88E5' },
};


export default class CollapseList extends React.Component {


    render() {
        return (
            <div className="hidden-md hidden-lg mtop50">
                <Collapse accordion={true}>
                    <Panel header="Nº do pedido: 124741" leftIcon={<ContentReceipt />} style={style.titleList}>
                        <List className="styleList">
                            <ListItem primaryText="" leftIcon={<ContentCheck />}>
                                <span style={style.textList}>Computador Samsung 15 - R$ 15,00</span>
                            </ListItem>
                            <ListItem primaryText="" leftIcon={<ContentCheck />}>
                                <span style={style.textList}>Mesa para computador Tipo Escrivaninha Modelo 025458 - Motorola - R$ 30,44</span>
                            </ListItem>
                            <ListItem primaryText="" leftIcon={<ContentCheck />}>
                                <span style={style.textList}>Celular Samsung Galaxy S7 - R$ 1999,99</span>
                            </ListItem>
                        </List>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
