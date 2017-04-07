import React from 'react';
import ReactFormContainer from './cardDisplay';


export default class TextFieldCreditPay extends React.Component {
    state = {
        value: 1,
    };
    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <ReactFormContainer/>
                </div>
                <div className="col-md-6 hidden-xs hidden-sm">
                    <div id="card-wrapper"></div>
                </div>
            </div>
        );
    }
}
