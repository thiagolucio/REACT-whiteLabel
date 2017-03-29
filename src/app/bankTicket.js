import React from 'react';


export default class TabBankTicket extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <img src="./img/barcode.svg" width={200} height={100} className="centered-horizontal"/>
                </div>
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h5 className="totalField"><b>Valor total: <span id="total-amount"></span></b></h5>
                            <button className="bt btn-primary btn-lg gateway-button centered-horizontal" style={{"borderRadius":"0","border":"0"}}>CONCLUIR PAGAMENTO</button>
                        </div>
                    <div className="col-md-3"></div>
            </div>
        );
    }

}
