import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'fontFace': {
    'fontFamily': ''Open Sans Light'',
    'src': 'url('../fonts/OpenSans-Light-webfont.eot')',
    'src': 'url('../fonts/OpenSans-Light-webfont.eot?iefix') format('eot'), url('../fonts/OpenSans-Light-webfont.woff') format('woff'), url('../fonts/OpenSans-Light-webfont.ttf') format('truetype'), url('../fonts/OpenSans-Light-webfont.svg#webfont') format('svg')'
  },
  'fontFace': {
    'fontFamily': ''Open Sans Regular'',
    'src': 'url('../fonts/OpenSans-Regular-webfont.eot')',
    'src': 'url('../fonts/OpenSans-Regular-webfont.eot?iefix') format('eot'), url('../fonts/OpenSans-Regular-webfont.woff') format('woff'), url('../fonts/OpenSans-Regular-webfont.ttf') format('truetype'), url('../fonts/OpenSans-Regular-webfont.svg#webfont') format('svg')'
  },
  'fontFace': {
    'fontFamily': ''Open Sans Bold'',
    'src': 'url('../fonts/OpenSans-Bold-webfont.eot')',
    'src': 'url('../fonts/OpenSans-Bold-webfont.eot?iefix') format('eot'), url('../fonts/OpenSans-Bold-webfont.woff') format('woff'), url('../fonts/OpenSans-Bold-webfont.ttf') format('truetype'), url('../fonts/OpenSans-Bold-webfont.svg#webfont') format('svg')'
  },
  // TRATAMENTO DA LOGO DO NIX COMO ICONFONT
  'fontFace': {
    'fontFamily': ''icomoon'',
    'src': 'url('../fonts/icomoon.eot?oowph9')',
    'src': 'url('../fonts/icomoon.eot?oowph9#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?oowph9') format('truetype'),
    url('../fonts/icomoon.woff?oowph9') format('woff'),
    url('../fonts/icomoon.svg?oowph9#icomoon') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  '[class^="icon-"]': {
    'fontFamily': ''icomoon' !important',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  '[class*=" icon-"]': {
    'fontFamily': ''icomoon' !important',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'icon-logo-nix:before': {
    'content': '"\e900"'
  },
  // FINAL ICONFONT COM LOGO DA NIX
  'html': {
    'fontFamily': ''Open Sans Regular', sans-serif'
  },
  'body': {
    'fontFamily': ''Open Sans Regular', sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'container': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'mtop-50': {
    'marginTop': [{ 'unit': 'px', 'value': -50 }]
  },
  'sloganTitle': {
    'marginTop': [{ 'unit': 'px', 'value': 43 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.04 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'espacoLogo': {
    'position': 'absolute'
  },
  'centered-horizontal': {
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'WebkitTransform': 'translateX(-50%)',
    'MsTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center'
  },
  'centered-absolute': {
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center'
  },
  'logoNixTab': {
    'background': 'url('./logo_nix_gateway.svg') no-repeat center center',
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'styleList': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }],
    'borderImage': 'initial',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'footerList': {
    'display': 'block',
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'maxWidth': [{ 'unit': 'px', 'value': 360 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0.2 }, { 'unit': 'px', 'value': 0.2 }, { 'unit': 'px', 'value': 0.2 }, { 'unit': 'px', 'value': 0.2 }]
  }
});
