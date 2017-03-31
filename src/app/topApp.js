import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


export default class TopApp extends React.Component {
    render() {
        return (
                <Toolbar className="toolbar-top">
                    <ToolbarGroup>
                        <img src="./img/logo_nix_gateway.svg" className="logNix"/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="SELECIONE A FORMA DE PAGAMENTO" className="topSlogan"/>
                    </ToolbarGroup>
                </Toolbar>
        );
    }
}
