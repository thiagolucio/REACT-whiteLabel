import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
   {value: 0,name: 'Visa'},
  {value: 1, name: 'Mastercard'},
  {value: 2, name: 'Aura'},
  {value: 3, name: 'Discover'},
  {value: 4, name: 'Elo'},
  {value: 5, name: 'JCB'},
];
for (let i = 0; i < 5; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Cartão ${i}`} />);
}
export default class DropDownMenuLongMenuExample extends Component {
  state = {
    value: 6,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };
};
export default class TextFieldCreditPay extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10">      
                    <TextField hintText="Digite o número do cartão de crédito" fullWidth={true} /><br /> <br />
                    <SelectField value={this.state.value} onChange={this.handleChange} maxHeight={200} >
                        {items}
                    </SelectField>      
                <TextField hintText="Nome impresso no cartão."/><br/>
                <TextField id="text-field-default" defaultValue="Default Value"/><br/>
                <TextField hintText="Validade" floatingLabelText="Floating Label Text"/><br/>
                <TextField defaultValue="Código de segurança (CVV)" floatingLabelText="Floating Label Text"/><br/>
                <TextField hintText="Digite o número de parcelas" floatingLabelText="Parcelas" floatingLabelFixed={true} /><br />
            </div>    
            </div>
        );
    }
}
