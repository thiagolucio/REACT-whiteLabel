import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import SvgIcon from 'material-ui/SvgIcon';
import TabBankTicket from './bankTicket';
import TabDebitCard from './debitCard';
import TabNixCard from './nixCard';
import Paper from 'material-ui/Paper';
import TextFieldCreditPay from './formCredit';



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
    },
    Paper: {
        padding: 16,
    },
};

export default class TabWhitelabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }
    handleChange = (value) => {
        this.setState({slideIndex: value});
    };

    render() {
        return (

                <div className="centered-horizontal">
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex} className="hidden-xs hidden-sm">
                        <Tab label="Cartão de Crédito" value={0}  style={styles.Tab}/>
                        <Tab label="Boleto Bancário" value={1} style={styles.Tab}/>
                        <Tab label="Cartão de Débito" value={2} style={styles.Tab}/>
                        <Tab icon={<SvgIcon className="logoNixTab"/>} label="" value={3} style={styles.Tab}/>
                    </Tabs>
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex} className="hidden-md hidden-lg">
                        <Tab value={0}  icon={<SvgIcon className="IconCredit"/>} style={styles.Tab}/>
                        <Tab value={1} icon={<SvgIcon className="IconTabTicket"/>} style={styles.Tab}/>
                        <Tab value={2} icon={<SvgIcon className="IconTabDebit"/>} style={styles.Tab}/>
                        <Tab value={3} icon={<SvgIcon  className="logoNixTab"/>} alt="WalletNix" label=""  style={styles.Tab}/>
                    </Tabs>
                    <Paper zDepth={2} style={styles.Paper}>
                        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                            <div className="col-md-12" id="cartao-credito">
                                <h2 style={styles.contentTitleBodyTabs}>Cartão de crédito</h2>
                                <TextFieldCreditPay/>
                            </div>
                            <div style={styles.slide}>
                                <h2 style={styles.contentTitleBodyTabs}>Boleto Bancário</h2>
                                <TabBankTicket/>
                            </div>
                            <div style={styles.slide}>
                                <h2 style={styles.contentTitleBodyTabs}>Cartão de Débito</h2>
                                <TabDebitCard/>
                            </div>
                            <div style={styles.slide}>
                                <h2 style={styles.contentTitleBodyTabs}>Cartão NIX</h2>
                                <TabNixCard/>
                            </div>
                        </SwipeableViews>
                    </Paper>
                </div>
        );
    }
}
