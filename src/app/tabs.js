import React from 'react';
import {render} from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextFieldCreditPay from './formCredit';
import SvgIcon from 'material-ui/SvgIcon';


const styles = {
    contentTitleBodyTabs: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 50,
        fontWeight: 700,
    },
    slide: {
        padding: 10,
        height: 50,
    },
    Tab: {
        padding: 20,
        fontSize: 16,
        color: '#333',
        fontWeight: 700
    }
};

export default class TabWhitelabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };       
    }
    handleChange = (value) => {
        this.setState({slideIndex: value});
    };
    
    render() {
        return (
            <div className="larguraTabs centered-horizontal">
                <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                    <Tab label="Cartão de Crédito" value={0}  style={styles.Tab}/>
                    <Tab label="Boleto Bancário" value={1} style={styles.Tab}/>
                    <Tab label="Cartão de Débito" value={2} style={styles.Tab}/>
                    <Tab icon={<SvgIcon className="logoNixTab"/>} value={3} style={styles.Tab}/>                
                </Tabs>

                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                    <div className="col-md-12">
                        <h2 style={styles.contentTitleBodyTabs}>Conteúdo do cartão de crédito</h2>
                        <TextFieldCreditPay />
                    </div>
                    <div style={styles.slide}>
                        <h2 style={styles.contentTitleBodyTabs}>Conteúdo do Boleto Bancário</h2>
                         <img src="logoNix.svg" width="100" height="100" />
                    </div>
                    <div style={styles.slide}>
                        <h2 style={styles.contentTitleBodyTabs}>Conteúdo do Cartão de Débito</h2>
                    </div>
                    <div style={styles.slide}>
                        <h2 style={styles.contentTitleBodyTabs}>Conteúdo do cartão NIX</h2>                       
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
