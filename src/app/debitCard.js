import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
export default class TabDebitCard extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <TextField hintText="Número do Cartão de Crédito." style={{"width":"88%"}}/>
                        <img src="arrow-drop-down.svg" style={{"verticalAlign":"middle","marginTop":"-20"}}/>
                    <IconButton>
                        <img src="nocards.svg" width={40} height={40}/>
                    </IconButton>
                    <TextField hintText="Nome Impresso no Cartão." fullWidth={true} />
                <div className="row">
                    <div className="col-md-6">
                        <DatePicker hintText="Validade" container="inline" mode="landscape"/>
                    </div>
                    <div className="col-md-6">
                        <TextField hintText="Código Segurança (CVV)."/>
                    </div>
                </div>
                    <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                    <RaisedButton label="CONCLUIR PAGAMENTO" primary={true} className="primary"/>
                </div>
            </div>
        );
    }
}
