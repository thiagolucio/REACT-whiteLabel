import React from 'react';
import TextField from 'material-ui/TextField';
import SvgIcon from 'material-ui/SvgIcon';
import FlatButton from 'material-ui/FlatButton';

export default class TextFieldCreditPay extends React.Component {
    state = {
        value: null,
    };
    handleChange = (event, index, value) => this.setState({value});


    render() {
        return (
            <button className="column">
                <TextField hintText="Número do Cartão de Crédito."/>
                <img src="noCartao.png" className="footerList"/>
                <FlatButton icon={<SvgIcon className="noCard"/>} />

                <br/><br/>
                <TextField id="text-field-default" defaultValue="Default Value"/><br/>
                <TextField hintText="Hint Text" floatingLabelText="Floating Label Text"/><br/>
                <TextField defaultValue="Default Value" floatingLabelText="Floating Label Text"/><br/>
                <TextField hintText="Hint Text" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={true}/><br/>
                <TextField hintText="Password Field" floatingLabelText="Password" type="password"/><br/>
                <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" multiLine={true} rows={2} rowsMax={4}/><br/>
                <TextField hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiLine={true} rows={2}/><br/>
                <TextField hintText="Full width" fullWidth={true}/>
            </div>
        );
    }
}