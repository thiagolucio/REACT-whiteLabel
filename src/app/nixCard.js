import React from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class TabNixCard extends React.Component {
    state = {
        value: 1,
    };
    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    <TextField hintText="Número do Cartão de Crédito." style={{"width": "88%" }}/>
                    <img src="./img/arrow-drop-down.svg" className="verticalAlignMiddle mtop-20"/>
                    <IconButton>
                        <img src="./img/noCard.svg" width={40} height={40}/>
                    </IconButton>
                    <TextField hintText="Número do Token." fullWidth={true}/>
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
                        <h5 className="totalField"><b>Valor total:<span id="total-amount"></span></b></h5>

                        <RaisedButton label="CONCLUIR PAGAMENTO" primary={true} className="primary"/>


                </div>

            </div>
        );
    }
}
