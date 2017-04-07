import React from 'react';
import CardReactFormContainer from 'card-react';
import SelectCreditCard from './selectCardButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class ReactFormContainer extends React.Component {
    render() {
        return (
                <CardReactFormContainer
                    container="card-wrapper"
                    formInputsNames={
                        {
                            number: 'number', // optional — default "number"
                            expiry: 'expiry',// optional — default "expiry"
                            cvc: 'cvc', // optional — default "cvc"
                            name: 'name' // optional - default "name"
                        }
                    }
                    initialValues= {
                        {
                            number: '•••• •••• •••• ••••', // optional — default •••• •••• •••• ••••
                            cvc: '•••', // optional — default •••
                            expiry: '••/••', // optional — default ••/••
                            name: 'Nome Impresso no Cartão' // optional — default FULL NAME
                        }
                    }
                    classes={
                        {
                            valid: 'jp-card-valid', // optional — default 'jp-card-valid'
                            invalid: 'jp-card-invalid' // optional — default 'jp-card-invalid'
                        }
                    }
                    formatting={true}
                >
                    <div></div>
                    <form>
                        <TextField hintText="" fullWidth={true} id="nome-cartao" name="name"/>
                        <TextField hintText=""  style={{"width":"88%"}} id="numero-cartao" name="number"/>
                        <SelectCreditCard/>
                        <DatePicker hintText="" container="inline" mode="landscape" id="validade-cartao" name="expiry" locale="fr"/>
                        <TextField hintText="Código Segurança (CVV)." id="cod-secure" name="cvc"/>
                        <div className="col-md-12">
                            <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                            <button className="bt btn-primary btn-lg gateway-button" style={{"borderRadius":"0","border":"0"}}>CONCLUIR PAGAMENTO</button>
                        </div>
                    </form>
                </CardReactFormContainer>
    );
    }
}
