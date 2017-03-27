import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
export default class TabDebitCard extends React.Component {

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    <TextField hintText="Número do Cartão de Crédito." style={{"width":"88%"}}/>
                        <img src="./img/arrow-drop-down.svg" className="verticalAlignMiddle mtop-20"/>
                    <IconButton>
                        <img src="./img/noCard.svg" width={40} height={40}/>
                    </IconButton>
                    <TextField hintText="Nome Impresso no Cartão." fullWidth={true}  style={{"width":"88%"}}/>
                    <DatePicker hintText="Validade" container="inline" mode="landscape"/>
                    <TextField hintText="Código Segurança (CVV)."/>
                    <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                    <RaisedButton label="CONCLUIR PAGAMENTO" primary={true} className="primary"/>
                </div>
            </div>
        );
    }
}
