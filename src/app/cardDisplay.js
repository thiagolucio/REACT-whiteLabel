import React, {Component} from 'react';

export default class cardDisplay extends Component {

    render() {
        return (
            <div className="col-md-6" style={{"background":"#333333;","width":"600"}}>
                <div class='card-wrapper-credit hidden-xs hidden-sm' data-model="{&quot;orderId&quot;:null,&quot;number&quot;:null,&quot;holderName&quot;:null,&quot;expirationDate&quot;:null,&quot;cvv&quot;:null,&quot;acceptedBrands&quot;:[8,7,2,3,4,5,6],&quot;selectedBrand&quot;:0,&quot;selectedNumberInstallment&quot;:null,&quot;installments&quot;:[{&quot;number&quot;:1,&quot;amount&quot;:100.00,&quot;template&quot;:&quot;{instalment} {amount} s/juros&quot;,&quot;value&quot;:&quot;1|R$ 100,00|False&quot;,&quot;approximateAmount&quot;:&quot;&quot;},{&quot;number&quot;:2,&quot;amount&quot;:102.30,&quot;template&quot;:&quot;{instalment} {ApproximateAmount} c/juros 2% a.m.&quot;,&quot;value&quot;:&quot;2|R$ 102,30|True&quot;,&quot;approximateAmount&quot;:&quot;Valor aproximado&quot;},{&quot;number&quot;:3,&quot;amount&quot;:100.00,&quot;template&quot;:&quot;{instalment} {ApproximateAmount} c/juros 2% a.m.&quot;,&quot;value&quot;:&quot;3|R$ 100,00|True&quot;,&quot;approximateAmount&quot;:&quot;Valor aproximado&quot;},{&quot;number&quot;:4,&quot;amount&quot;:100.00,&quot;template&quot;:null,&quot;value&quot;:&quot;4|R$ 100,00|False&quot;,&quot;approximateAmount&quot;:&quot;&quot;}],&quot;selectedInstallment&quot;:null}"></div>
            </div>
        );
    }
}