import React, { Component } from 'react';
import { blue600, grey200, blue500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabWhitelabel from './tabs';
import ListPedidos from './list';
import TopApp from './topApp';



const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey200,
        accent1Color: blue600,
    },
    button: {
        accent1Color:  blue500,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="container">
                    <TopApp/>
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
