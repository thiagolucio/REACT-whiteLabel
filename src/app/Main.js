import React, { Component } from 'react';
import { blue600, grey200, blue500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabWhitelabel from './tabs';
import ListPedidos from './list';

const style =  {
header: {
    flex: 1,
    alignItems: 'center',
}
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey200,
        accent1Color: blue600,
    },
    button: {
        accent2Color:  blue500,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="container centered-horizontal">
                        <div className="row centered-horizontal">
                            <div className="col-md-3 end-lg end-md">
                                <img src="./img/logo_nix_gateway.svg" width="250" height="250"/>
                            </div>
                            <div className="col-md-9">
                                <h3 className="sloganTitle"><b>SELECIONE A FORMA DE PAGAMENTO</b></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <ListPedidos></ListPedidos>
                            </div>
                            <div className="col-md-9">
                                <TabWhitelabel></TabWhitelabel>
                            </div>
                        </div>
                    </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
