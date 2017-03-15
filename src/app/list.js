import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentCheck from 'material-ui/svg-icons/navigation/check';
import ContentReceipt from 'material-ui/svg-icons/action/receipt';


const style = {
    textList: { fontSize: 14, },
    titleList: { fontSize: 18,color: '#333',fontWeight: '400', backgroundColor: '#bdbdbd',padding: 18, borderBottom: '2px solid #333' },
};
export default class ListPedidos extends React.Component {

    render() {
        return (
            <div>
              <List className="styleList">
                  <ListItem  primaryText="Nº do pedido: 124741"  leftIcon={<ContentReceipt />} style={style.titleList} />
                  <Divider />
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
              <img src="bottom-tear.svg" className="footerList"/>
            </div>
        );
    }
}
