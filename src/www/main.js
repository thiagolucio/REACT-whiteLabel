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
    "mtop-50": {
        "marginTop": -50
    },
    "sloganTitle": {
        "marginTop": 43,
        "marginLeft": "4%",
        "fontSize": 24
    },
    "logoTab": {
        "width": 48,
        "height": 48,
        "background": "url(logo_nix_gateway.svg) center center no-repeat",
        "backgroundSize": "48px 48px"
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
    }
});