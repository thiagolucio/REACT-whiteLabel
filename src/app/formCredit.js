import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';




export default class TextFieldCreditPay extends React.Component {
    state = {
        value: 1,
    };
    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <TextField hintText="Número do Cartão de Crédito." style={{"width":"88%"}} classID="numero-cartao"/>
                        <img src="./img/arrow-drop-down.svg" className="verticalAlignMiddle mtop-20"/>
                    <IconButton>
                        <img src="./img/noCard.svg" width={40} height={40} classID="cardImg"/>
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
                    <div className="col-md-12" >
                    <SelectField  floatingLabelText="Parcelas" value={this.state.value}  onChange={this.handleChange} fullWidth={true}>
                        <MenuItem value={1} primaryText="1x Vezes sem juros" />
                        <MenuItem value={2} primaryText="2x Vezes sem juros" />
                        <MenuItem value={3} primaryText="3x Vezes sem juros" />
                        <MenuItem value={4} primaryText="4x Vezes sem juros" />
                        <MenuItem value={5} primaryText="5x Vezes sem juros" />
                        <MenuItem value={6} primaryText="6x Vezes sem juros" />
                        <MenuItem value={7} primaryText="7x Vezes sem juros" />
                        <MenuItem value={8} primaryText="8x Vezes sem juros" />
                        <MenuItem value={9} primaryText="9x Vezes sem juros" />
                        <MenuItem value={10} primaryText="10x Vezes sem juros" />
                        <MenuItem value={11} primaryText="11x Vezes sem juros" />
                        <MenuItem value={12} primaryText="12x Vezes sem juros" />
                    </SelectField>
                    </div>
                    <div className="col-md-12">
                        <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                            <RaisedButton label="CONCLUIR PAGAMENTO" primary={true} className="primary"/>
                    </div>
                </div>
            </div>
        );
    }
}
