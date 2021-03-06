import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "'Open Sans Regular', sans-serif"
    },
    "body": {
        "fontFamily": "'Open Sans Regular', sans-serif",
        "lineHeight": 20
    },
    "container": {
        "width": "80%!important"
    },
    "mtop-20": {
        "marginTop": -20
    },
    "mtop-50": {
        "marginTop": -50
    },
    "margin-bottom50": {
        "marginBottom": 50
    },
    "mtop50": {
        "marginTop": 50
    },
    "verticalAlignMiddle": {
        "verticalAlign": "middle"
    },
    "topSlogan": {
        "fontSize": 24,
        "textAlign": "left"
    },
    "espacoLogo": {
        "position": "absolute"
    },
    "centered-horizontal": {
        "position": "relative",
        "left": "50%",
        "WebkitTransform": "translateX(-50%)",
        "MsTransform": "translateX(-50%)",
        "transform": "translateX(-50%)",
        "alignItems": "center",
        "WebkitAlignItems": "center"
    },
    "centered-absolute": {
        "position": "relative",
        "left": "50%",
        "top": "50%",
        "transform": "translate(-50%, -50%)",
        "alignItems": "center",
        "WebkitAlignItems": "center"
    },
    "logoNixTab": {
        "background": "url('../img/logo_nix_gateway.svg') no-repeat center center",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "IconCredit": {
        "background": "url('../img/ic_payment_48px.svg') no-repeat center center",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "IconTabTicket": {
        "background": "url('../img/barcode.svg') no-repeat center center",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "styleList": {
        "border": "1px solid #d9d9d9",
        "borderBottom": "none",
        "borderImage": "initial",
        "height": "100%",
        "overflow": "hidden",
        "paddingTop": "0px!important",
        "paddingRight": "0px!important",
        "paddingBottom": "20px!important",
        "paddingLeft": "0px!important"
    },
    "footerList": {
        "display": "block",
        "position": "relative",
        "marginTop": -10,
        "maxWidth": 360,
        "boxShadow": 0.2
    },
    "totalField": {
        "backgroundColor": "#333",
        "color": "#FFFFFF",
        "fontWeight": "bold",
        "fontSize": 18,
        "opacity": 0.8,
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16
    },
    "btn": {
        "border": "0px!important",
        "boxShadow": "0px!important"
    },
    "gateway-button": {
        "background": "#42a5f5",
        "backgroundColor": "#42a5f5",
        "borderRadius": 0
    },
    "gateway-button:hover": {
        "transition": "all ease .5s!important",
        "backgroundColor": "#1FD9C1!important",
        "border": "0px!important"
    },
    "card-wrapper-credit": {
        "marginTop": 25,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 10
    },
    "text-field-styles": {
        "paddingTop": 26,
        "paddingRight": 26,
        "paddingBottom": 26,
        "paddingLeft": 26
    },
    "Paper": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "logNix": {
        "marginTop": 5,
        "width": 200,
        "height": "auto",
        "textAlign": "center"
    },
    "titleList": {
        "fontSize": 18,
        "color": "black!important",
        "fontWeight": "400",
        "backgroundColor": "#eeeeee",
        "borderBottom": "2px solid #1E88E5",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "toolbar-top": {
        "height": "100px!important",
        "marginBottom": 21,
        "backgroundColor": "transparent!important",
        "color": "rgba(0, 0, 0, 1.0)"
    }
});