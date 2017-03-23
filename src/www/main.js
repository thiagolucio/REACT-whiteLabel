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
    "verticalAlignMiddle": {
        "verticalAlign": "middle"
    },
    "sloganTitle": {
        "marginTop": 43,
        "marginLeft": "4%",
        "fontSize": 24
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
        "background": "url('./img/logo_nix_gateway.svg') no-repeat center center",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "styleList": {
        "borderTop": "1px solid #d9d9d9",
        "borderRight": "1px solid #d9d9d9",
        "borderBottom": "none",
        "borderLeft": "1px solid #d9d9d9",
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
    "primary": {
        "background": "#2979ff!important",
        "backgroundColor": "#2979ff!important"
    },
    "text-field-styles": {
        "paddingTop": 26,
        "paddingRight": 26,
        "paddingBottom": 26,
        "paddingLeft": 26
    }
});