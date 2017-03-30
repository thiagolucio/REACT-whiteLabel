import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectDebitCard from './selectDebitButton';


export default class TabDebitCard extends React.Component {

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    <TextField hintText="Número do Cartão de Crédito." style={{"width":"75%"}}/>
                        <SelectDebitCard/>
                    <TextField hintText="Nome Impresso no Cartão." fullWidth={true}  style={{"width":"88%"}}/>
                    <DatePicker hintText="Validade" container="inline" mode="landscape"/>
                    <TextField hintText="Código Segurança (CVV)."/>
                    <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                    <button className="bt btn-primary btn-lg gateway-button" style={{"borderRadius":"0","border":"0"}}>CONCLUIR PAGAMENTO</button>
                </div>
            </div>
        );
    }
}
