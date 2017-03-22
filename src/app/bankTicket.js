import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class TabBankTicket extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="barcode.svg" width={200} height={100} className="centered-horizontal"/>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                    <RaisedButton label="CONCLUIR PAGAMENTO" primary={true} className="primary"/>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

}
