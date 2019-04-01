importScripts('workbox-sw.prod.v2.1.3.js');
var url;
const workboxSW = new self.WorkboxSW();
workboxSW.precache([
  {
    "url": "0.ddaf3553de59d8f398a0.chunk.js",
    "revision": "f7657a7b909cec7b28055deb7c6f6b44"
  },
  {
    "url": "1.76426924245e5becaadf.chunk.js",
    "revision": "c1bc2d853475829851169d921599a340"
  },
  {
    "url": "10.e216faa7929d6b0d58b1.chunk.js",
    "revision": "799189ceaf6c6400b5fed3623752ca2b"
  },
  {
    "url": "11.a16c2b25b07fc17d4e45.chunk.js",
    "revision": "c2fec75bef9113d7991588985d106a92"
  },
  {
    "url": "12.200386e0838888a054c3.chunk.js",
    "revision": "01beea5dd7bc15e45466f27d98d445bf"
  },
  {
    "url": "13.c7b6d896919e6fc91be2.chunk.js",
    "revision": "7d500215b4ba59212971271593d592ca"
  },
  {
    "url": "14.f36bf4bf0d3d360a05d3.chunk.js",
    "revision": "5498e6a9bde418bdc63dafed78239b21"
  },
  {
    "url": "15.4f989d65e8deb244802d.chunk.js",
    "revision": "5a17a77aa726182c175fb29a9054facc"
  },
  {
    "url": "16.4488ae34e0e195c6212e.chunk.js",
    "revision": "d1089198d9f24e5a1c750db0bcb03cb2"
  },
  {
    "url": "17.84e4afa028ba8ce70d6e.chunk.js",
    "revision": "8aa55484ece86b01e158a83841ac0592"
  },
  {
    "url": "18.ca687de487c76d6ed7c6.chunk.js",
    "revision": "161ec38b8e236a70d074068638c95907"
  },
  {
    "url": "19.62bdf2aea5716442650a.chunk.js",
    "revision": "4578995430d9ed6ffb2f9f29c23f5983"
  },
  {
    "url": "2.ba2c4bc0fb374d00d873.chunk.js",
    "revision": "d22b82fb0af8784a73feb3bfc231c1bc"
  },
  {
    "url": "20.76fc2f140f5ac39769cb.chunk.js",
    "revision": "6780f70ba6f7f45c6bdfccb5f8e360f3"
  },
  {
    "url": "21.84e1a3bd251df17202f5.chunk.js",
    "revision": "083c5e9ce7d187870e4f4105570e8dae"
  },
  {
    "url": "22.c2537ea3ca7e4922f438.chunk.js",
    "revision": "f475b0277edfbfb184d3e53599b797e6"
  },
  {
    "url": "23.5e6994b580da26d16cfa.chunk.js",
    "revision": "3f1790c6b89ee6fd0a42f87a76423c5c"
  },
  {
    "url": "24.8864a567a5c38b9638c0.chunk.js",
    "revision": "2f99631df0ed5a8b99882410b7a8ecd6"
  },
  {
    "url": "25.65071cf5be7e8d47ac80.chunk.js",
    "revision": "5a062e28c76edcef6121032aa4f9340f"
  },
  {
    "url": "26.e22cb89a106899c32415.chunk.js",
    "revision": "12f55b4702fe5e3650656484a981ee30"
  },
  {
    "url": "27.da035dba6c97a174ae2f.chunk.js",
    "revision": "d7ebc37442f934634dd0b407e6fd94c7"
  },
  {
    "url": "28.732703681dae0e074888.chunk.js",
    "revision": "f7579eaf2d85880ebaaaeeb6b3d141f0"
  },
  {
    "url": "29.c1d8ffe8c64aa1eb2806.chunk.js",
    "revision": "9640f062c0478a471e35211e7c475757"
  },
  {
    "url": "3.30cf89766685b189b50b.chunk.js",
    "revision": "8ce840b15146791f9b04ba7cd0301f38"
  },
  {
    "url": "30.90c70bc7f87484ce2d4c.chunk.js",
    "revision": "dabdc2b56ce30a008c72ac630cd7a960"
  },
  {
    "url": "31.8706bd8050ffa0d0128a.chunk.js",
    "revision": "61d940514ecc1ef11b9c3da09390fe4a"
  },
  {
    "url": "3rdpartylicenses.txt",
    "revision": "855b6ddc5ad5afedb5fd132b8d01eb62"
  },
  {
    "url": "4.865d78fd08e241b12fa9.chunk.js",
    "revision": "af14b16dc605f3860d163a2b3dd99b8f"
  },
  {
    "url": "5.f32f736572361db1ec68.chunk.js",
    "revision": "49d1c04817c3f9ffeefdb8dab1d3a893"
  },
  {
    "url": "6.5e1c59252881a7715145.chunk.js",
    "revision": "be44774d0e82f23fc9f669e6c78c8b4d"
  },
  {
    "url": "7.169484b4149325fc10b3.chunk.js",
    "revision": "bd07f15d0fb11e6ace38580ccca7e2b3"
  },
  {
    "url": "8.bb8534cd7f54db4c225c.chunk.js",
    "revision": "30cbe2424fb0736f81f724fa1d4d60b9"
  },
  {
    "url": "9.3c276477913ca394a87a.chunk.js",
    "revision": "0f99f0e5e8dafa9aeaf9d23324892831"
  },
  {
    "url": "assets/fonts/iconfont.css",
    "revision": "6bd66b653b733138060262fb4d702afb"
  },
  {
    "url": "assets/fonts/iconfont.eot",
    "revision": "2de252fb84cc9ee07e28d840c858dd3c"
  },
  {
    "url": "assets/fonts/iconfont.html",
    "revision": "89d99ce79197118824eeaafd5b76a341"
  },
  {
    "url": "assets/fonts/iconfont.svg",
    "revision": "57481bf85fa8e7f56b51bdbcc842b55a"
  },
  {
    "url": "assets/fonts/iconfont.ttf",
    "revision": "45a6d4b7adf51f27a17db8bd10d76c2e"
  },
  {
    "url": "assets/fonts/iconfont.woff",
    "revision": "bf9a05606cbe7e61bbf813267937a3b4"
  },
  {
    "url": "assets/fonts/iconfont.woff2",
    "revision": "9850d54755773bd2d9bf74b4ec3726e3"
  },
  {
    "url": "assets/i18n/en-OLD.json",
    "revision": "9128f056211378eafb8f0520c1e5090a"
  },
  {
    "url": "assets/i18n/en.json",
    "revision": "fbbf5bd92237d6bc93f17612be38b703"
  },
  {
    "url": "assets/i18n/hi.json",
    "revision": "a48ba0204ca1685e3e3a87a543f8cb55"
  },
  {
    "url": "assets/icons/android-512x512.png",
    "revision": "9eee2c84cb7cc2913adebec8f856531d"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "9eee2c84cb7cc2913adebec8f856531d"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "9eee2c84cb7cc2913adebec8f856531d"
  },
  {
    "url": "assets/icons/favicon.ico",
    "revision": "68451f1f0c7773cdfde92acc7e58bca5"
  },
  {
    "url": "assets/icons/favicon.png",
    "revision": "21e0c4385afded6fa1d7c38a1130e062"
  },
  {
    "url": "assets/images/about_bg.png",
    "revision": "ea5470ebb7b8b04a15e413db174d53e5"
  },
  {
    "url": "assets/images/announcements-img.svg",
    "revision": "6f5ae984a5c9cdfda94c13f6c8cb02aa"
  },
  {
    "url": "assets/images/api_boxImg.png",
    "revision": "8fe6806ce204179ffd6386a09b6e9608"
  },
  {
    "url": "assets/images/api_seprater_green.png",
    "revision": "e2ff9978a7c045b33a14ec99fa1a1272"
  },
  {
    "url": "assets/images/api_seprater.png",
    "revision": "38da2f1487bfd26cda5c0a1b9020f2a8"
  },
  {
    "url": "assets/images/banner-image.png",
    "revision": "12e0ddb86f7c1ec8d8058bf858745e42"
  },
  {
    "url": "assets/images/banner.png",
    "revision": "08b169b530c7e1820827961817f83ced"
  },
  {
    "url": "assets/images/banner1.png",
    "revision": "f3959d80bd4632b97d2a0037747f63cc"
  },
  {
    "url": "assets/images/banner2.png",
    "revision": "1e8b95ffc45a7e9de93b2e03ffce9610"
  },
  {
    "url": "assets/images/banner3.png",
    "revision": "5094fc3fc269d7e59416220ada2ee4d9"
  },
  {
    "url": "assets/images/bg-4.jpg",
    "revision": "cc8110b5f032413ac3f8ec8790aed355"
  },
  {
    "url": "assets/images/bitcoin_banner.jpg",
    "revision": "e6afe755521855795d497a213ff09054"
  },
  {
    "url": "assets/images/bitcoin_banner2.jpg",
    "revision": "d2309b23e2351ef6e3752fd674a09de0"
  },
  {
    "url": "assets/images/BitcoinTalk.svg",
    "revision": "e8afa9f3a0eb7b836ce8fc5bd2ee14ae"
  },
  {
    "url": "assets/images/brain-likeNew.png",
    "revision": "5ae8a0505cbe25e04d0aea764cdb14f1"
  },
  {
    "url": "assets/images/brush_ink.png",
    "revision": "8ccee4a3e50e6584108321e9b8f1ed79"
  },
  {
    "url": "assets/images/brush_inkNew.png",
    "revision": "e23bf7427fc6aa9464693b80d9bff7a1"
  },
  {
    "url": "assets/images/buy.png",
    "revision": "cd89aacc283e34afc0687eb592671a73"
  },
  {
    "url": "assets/images/calender.png",
    "revision": "3f8d2133239a93ca289d193d779ef26d"
  },
  {
    "url": "assets/images/cancel.svg",
    "revision": "a850ee1bc5bcabbc67252f7c8c741ab0"
  },
  {
    "url": "assets/images/captcha.png",
    "revision": "75a7c670a30348a1955b34409ea6c9d9"
  },
  {
    "url": "assets/images/chart.png",
    "revision": "b385ed76a75872dd9ddb8fd04902a1a4"
  },
  {
    "url": "assets/images/close.png",
    "revision": "0a04d106108604716867e964334b1444"
  },
  {
    "url": "assets/images/code_Card.png",
    "revision": "464a48d29b3d59f52165eae2a435c578"
  },
  {
    "url": "assets/images/coin_upload.png",
    "revision": "c5359576812478b01a84b60f40c40f65"
  },
  {
    "url": "assets/images/coin.png",
    "revision": "3bc9adaf1571f967319bb509588d8244"
  },
  {
    "url": "assets/images/coinNew.png",
    "revision": "7da50de239df7bac2cc85dfe55e72272"
  },
  {
    "url": "assets/images/contactInfo_bg.png",
    "revision": "18a97793605da893e295c9bae598058b"
  },
  {
    "url": "assets/images/contactInfo_phone.png",
    "revision": "7296f851cfc818f46adf4dfdda4ef98f"
  },
  {
    "url": "assets/images/contactus_bg.jpg",
    "revision": "bc2dea01f6abc34ddafdd446a6702a36"
  },
  {
    "url": "assets/images/contactus_title_line.png",
    "revision": "ae48142a2699a2dd44963066c111d4ea"
  },
  {
    "url": "assets/images/dash-icon.png",
    "revision": "887946e44f4f09ec2d199377284f7686"
  },
  {
    "url": "assets/images/data-not-found.jpg",
    "revision": "b36e23fe4477aa2e865f38a58ead8553"
  },
  {
    "url": "assets/images/dottedLine.png",
    "revision": "f416056ab5b32f6730d65795b33a31cf"
  },
  {
    "url": "assets/images/down-arrow.png",
    "revision": "be3f37b56902a75c491c30ba8a83a534"
  },
  {
    "url": "assets/images/dropdown-arrow.png",
    "revision": "d6ac304c4b35dc75014ff799b4850d25"
  },
  {
    "url": "assets/images/Dropdown.svg",
    "revision": "f51fd6934d5fc0c66178db5d1742cb34"
  },
  {
    "url": "assets/images/dust3.png",
    "revision": "def8f2c23268cfd96333297ba035a882"
  },
  {
    "url": "assets/images/email.png",
    "revision": "fc55940307caaf32af32b256c2553359"
  },
  {
    "url": "assets/images/ethereum-icon.png",
    "revision": "1243ad631f50bd0300df606ea528e5d9"
  },
  {
    "url": "assets/images/exchange-1.png",
    "revision": "16461a346e024fb068b1500e96e52414"
  },
  {
    "url": "assets/images/exchange-1.svg",
    "revision": "dc0a89152332b2c7dc3ec053db857e01"
  },
  {
    "url": "assets/images/exchange-2.png",
    "revision": "5638e2e047e10195d94ea61a3210c209"
  },
  {
    "url": "assets/images/exchange-2.svg",
    "revision": "b9076881596edde04c829218f850050e"
  },
  {
    "url": "assets/images/exchange-3.png",
    "revision": "d299da3996415fbb54cf4fc1d5a4cf7c"
  },
  {
    "url": "assets/images/exchange-3.svg",
    "revision": "ad8a282b0751265ef69a43f6c433d6bc"
  },
  {
    "url": "assets/images/exchange-work-img.png",
    "revision": "c591e4fa423e9e9f1931305230738849"
  },
  {
    "url": "assets/images/exchange-work-shadow.png",
    "revision": "175ef969abe2b6eca8702b067c69abf5"
  },
  {
    "url": "assets/images/Facebook.svg",
    "revision": "af51b323bf05813c2bf5ddd5f7460af8"
  },
  {
    "url": "assets/images/feature-img.png",
    "revision": "b549048f8c29c0188ab1c344edd1afd5"
  },
  {
    "url": "assets/images/feature-left-arrow.png",
    "revision": "83bf510dd670a207f3911ad044cb13d1"
  },
  {
    "url": "assets/images/forgot-password-logo.png",
    "revision": "5537f7c189e632345fefdad3defdbbb6"
  },
  {
    "url": "assets/images/get-started-background-img.png",
    "revision": "e81504ebe9762c67ed5e1963ffedbf97"
  },
  {
    "url": "assets/images/google-authentication.png",
    "revision": "9db28a1f43320d8e01ed32ce1b102466"
  },
  {
    "url": "assets/images/great-support.png",
    "revision": "9eaa1e980a5af92b446880a968b38b9a"
  },
  {
    "url": "assets/images/green-underline.png",
    "revision": "3fd14dace3eaf59009b7e7b8cfd9b2a1"
  },
  {
    "url": "assets/images/how--it-work-1.png",
    "revision": "11bda70d7326a9643b6949fab325ecb2"
  },
  {
    "url": "assets/images/how-it-work-arrow.png",
    "revision": "b7537daa247fb77a13534ffcd01df666"
  },
  {
    "url": "assets/images/how-it-work-icon1-OLD.png",
    "revision": "ddd49e34d26bf3133c49ce73b8a85ab1"
  },
  {
    "url": "assets/images/how-it-work-icon1.png",
    "revision": "b0c70768298ee023a788ef458c03661c"
  },
  {
    "url": "assets/images/how-it-work-icon2-OLD.png",
    "revision": "9525d7a1080b9385411ee3f2af6961c6"
  },
  {
    "url": "assets/images/how-it-work-icon2.png",
    "revision": "16e84bc4241c291f0cc6760131873c7c"
  },
  {
    "url": "assets/images/how-it-work-icon3-OLD.png",
    "revision": "09a53c8151965fd2098b3b443f044215"
  },
  {
    "url": "assets/images/how-it-work-icon3.png",
    "revision": "96ff250a94383f0ddcd998da47c5a6bd"
  },
  {
    "url": "assets/images/how-it-work-line.png",
    "revision": "6e3529ba7b7701c6682e040ad3c93928"
  },
  {
    "url": "assets/images/id.svg",
    "revision": "712ff6607ef7cd5b74c9063523c88077"
  },
  {
    "url": "assets/images/Instagram.svg",
    "revision": "a7b3726fccfdcab34e60419f7b1d02ed"
  },
  {
    "url": "assets/images/Invitations.png",
    "revision": "cf794782a7368d35ca6f861d3ae2a267"
  },
  {
    "url": "assets/images/kyc-icon-1.png",
    "revision": "1762b7680ec6b16029420537eab65696"
  },
  {
    "url": "assets/images/kyc-icon-2.png",
    "revision": "2caa5c882b3c810bb20ba958fb7b0543"
  },
  {
    "url": "assets/images/kyc-icon-3.png",
    "revision": "00ca3d5dbfb84b3c7067b74488991085"
  },
  {
    "url": "assets/images/levels-icon-1.png",
    "revision": "2f4231834d1a5c318b049fb302c24e80"
  },
  {
    "url": "assets/images/levels-icon-2.png",
    "revision": "426cb5b4864c2d151e551a0dc110eba9"
  },
  {
    "url": "assets/images/levels-icon-3.png",
    "revision": "a53ff372133a5d314233c7a7417bfa3c"
  },
  {
    "url": "assets/images/Linkdin.svg",
    "revision": "0c82fa8302a387ac4ece8961502628ee"
  },
  {
    "url": "assets/images/litecoin-icon.png",
    "revision": "1a2bc40a5437ceb38d36761029b451d3"
  },
  {
    "url": "assets/images/login_Alert.png",
    "revision": "6c7e36589af77fd2a5c728230dbe4fb9"
  },
  {
    "url": "assets/images/login_shield.png",
    "revision": "a307782d01996159b14903163663b122"
  },
  {
    "url": "assets/images/logo-old.png",
    "revision": "f92379988ed55b56bb84e8a81cb2d214"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "50e50ef1e7270b2b614e8fc82021405c"
  },
  {
    "url": "assets/images/manage.png",
    "revision": "216e0f088c658806293d00878018f7d7"
  },
  {
    "url": "assets/images/Mastbit_Banner.png",
    "revision": "3286757dc8e2e886da5f2c4c4d0a143e"
  },
  {
    "url": "assets/images/Mastbit_Banner2.png",
    "revision": "a6599c005e9618b0b1631c9c5f31cc3d"
  },
  {
    "url": "assets/images/Mastbit_Banner3.png",
    "revision": "7480a87f722a31a73eb49da1fcb8823a"
  },
  {
    "url": "assets/images/mastbit_logo.png",
    "revision": "80ad0c00b16c4c65b3a17e76d720ccc1"
  },
  {
    "url": "assets/images/mastbit-bg-1.png",
    "revision": "400e14b1a06614b3185d69fc09bbb41d"
  },
  {
    "url": "assets/images/mastbit-bg-2.png",
    "revision": "7dea92e8c31adcb65749798b707e274c"
  },
  {
    "url": "assets/images/mastbit-bg-3.png",
    "revision": "3120dce730453442d92ad459b26f75b9"
  },
  {
    "url": "assets/images/mastbit-bg-4.png",
    "revision": "97b18a45bc5cffb99373468553340a70"
  },
  {
    "url": "assets/images/mastbit-icon-1.png",
    "revision": "c92671c177e08f088a3daa302b61bb83"
  },
  {
    "url": "assets/images/Medium.svg",
    "revision": "a32e6862a37de7a32df3f480e80eedcb"
  },
  {
    "url": "assets/images/mobo_logo.png",
    "revision": "6ebfbf5e7d384a6c21bc29811060bb69"
  },
  {
    "url": "assets/images/modal-g2fa.png",
    "revision": "1d269edf2598598b2dfffcb48501f17f"
  },
  {
    "url": "assets/images/newsSlider.png",
    "revision": "54a9c1457feaff08cc358f9424f9c98b"
  },
  {
    "url": "assets/images/pageBG-404_old.jpg",
    "revision": "ec4729d78b5d89188b68360ca3f2a8e4"
  },
  {
    "url": "assets/images/pageBG-404.jpg",
    "revision": "20a0fdcc74e913158b8cf430cd8d7d13"
  },
  {
    "url": "assets/images/password.svg",
    "revision": "6d9c681203ecec7e54ee0e15da5ad4b6"
  },
  {
    "url": "assets/images/profile-icon-1.png",
    "revision": "32927b92675b3a8c125b120aa5c190c9"
  },
  {
    "url": "assets/images/profile-icon-2.png",
    "revision": "04ef6f4c868ffae6a36523ab39ef2589"
  },
  {
    "url": "assets/images/profile-icon-3.png",
    "revision": "2d86bd39dceeb6cce213fd12b5541ce4"
  },
  {
    "url": "assets/images/reddit.png",
    "revision": "19beaeae523c0395f7ff0029b4007695"
  },
  {
    "url": "assets/images/reddit.svg",
    "revision": "e2729cb901ba4a75e6a68596b90cc4fa"
  },
  {
    "url": "assets/images/security-icon-1.png",
    "revision": "3764e6d2a2bbee627e5512b76656647a"
  },
  {
    "url": "assets/images/security-icon-2.png",
    "revision": "14dd83baf775afe5af00fe96ae263758"
  },
  {
    "url": "assets/images/security-icon-3.png",
    "revision": "73207e46426cbe72e99eb64598a04935"
  },
  {
    "url": "assets/images/Self-development.png",
    "revision": "1faab074896604c63e36bec28a0788a0"
  },
  {
    "url": "assets/images/sell.png",
    "revision": "39ae8438aaec9cd1005f6afdc88b564c"
  },
  {
    "url": "assets/images/signup-signin-logo.png",
    "revision": "724bc207e2ebcad33659603ccd7bdc70"
  },
  {
    "url": "assets/images/slider_btc.png",
    "revision": "500fc34d0610fa151ce91594799320a8"
  },
  {
    "url": "assets/images/slider_btc3.png",
    "revision": "8e1e58164f87d4575da603efbc54f24f"
  },
  {
    "url": "assets/images/slider_btc4.png",
    "revision": "2be76e157f262978375881a6fd324bbc"
  },
  {
    "url": "assets/images/slider_btc5.png",
    "revision": "d2ea99ffce3260094625e5515ff49580"
  },
  {
    "url": "assets/images/slider_eth.png",
    "revision": "688f51a22631ec62b047c76029d93a37"
  },
  {
    "url": "assets/images/slider_eth2.png",
    "revision": "7333d629cb5e346bd2dff251cc6fb819"
  },
  {
    "url": "assets/images/slider-chart-1.png",
    "revision": "c02070ccd7a7c694172f7d0d7f2d987f"
  },
  {
    "url": "assets/images/slider-chart-1.svg",
    "revision": "2e0ef9182782e98b57dc8141bfb1ca76"
  },
  {
    "url": "assets/images/slider-chart-2.png",
    "revision": "7081f0ecfb53b8db2511e23f50ca1af3"
  },
  {
    "url": "assets/images/slider-chart-2.svg",
    "revision": "dfc3cd7a7cf707c3b3b43ba98f56b5b8"
  },
  {
    "url": "assets/images/slider1.png",
    "revision": "d5024fc90719fbd7223154d797c520cb"
  },
  {
    "url": "assets/images/sliderImage3.png",
    "revision": "8e777d0901dee805ea24a9c5f9967739"
  },
  {
    "url": "assets/images/sms-authentication.png",
    "revision": "baafbc49546cecf2c8bf6b8a5b2dbae6"
  },
  {
    "url": "assets/images/stemit.svg",
    "revision": "59215501b875b8742dd06565fee06457"
  },
  {
    "url": "assets/images/telegram.svg",
    "revision": "8d14acdef9ab642e9038185b972d1e48"
  },
  {
    "url": "assets/images/terms&condition_line.png",
    "revision": "35ca57e2e4c8d1cbc7666d49efda84b9"
  },
  {
    "url": "assets/images/tick.png",
    "revision": "f8b43b1ff3e0f785b4320a292034a615"
  },
  {
    "url": "assets/images/tron-icon.png",
    "revision": "30c38522d43b7e7eeb7eb8a9ddab0829"
  },
  {
    "url": "assets/images/twetter_feed.png",
    "revision": "6052a92c90ba433be665075be7090196"
  },
  {
    "url": "assets/images/twitter.svg",
    "revision": "ce80a3448afdb214f8f3678e8972f036"
  },
  {
    "url": "assets/images/Under-Maintenance.jpg",
    "revision": "8223d788c6fb6b679530ec0c9fe1c292"
  },
  {
    "url": "assets/images/underline-green.png",
    "revision": "a4d1e73c65abbc949dbed6468365c420"
  },
  {
    "url": "assets/images/upload.png",
    "revision": "58494253a17436bcaa100246f8ec2595"
  },
  {
    "url": "assets/images/usd-icon.png",
    "revision": "87ba051d81b1914a7831a09d2fc055ff"
  },
  {
    "url": "assets/images/user-edit.png",
    "revision": "4b2e9f2e3d467f442ad77f1751d0859f"
  },
  {
    "url": "assets/images/user-profile.png",
    "revision": "c4fea042d15ff9f362476484cdbcd6ed"
  },
  {
    "url": "assets/images/view-1.png",
    "revision": "0c9cb80580e8c1c1dac41d948850c13b"
  },
  {
    "url": "assets/images/view.png",
    "revision": "279bdc16383d6daa6cf38bb9acb49291"
  },
  {
    "url": "assets/images/View.svg",
    "revision": "24f430478ba7ab58e972dc1fb725edcf"
  },
  {
    "url": "assets/images/white-underline.png",
    "revision": "7ae747dbe71f13e000e4eb164a4e856c"
  },
  {
    "url": "assets/images/work-flow-arrow-1.png",
    "revision": "826feabcc7798a6fab93b1ab971ebc37"
  },
  {
    "url": "assets/images/work-flow-arrow-2.png",
    "revision": "5f02f6f9d43bc40896a90acb532f1c63"
  },
  {
    "url": "assets/images/work-flow-arrow.png",
    "revision": "0fcad1a36c1f152a73df698820d127f8"
  },
  {
    "url": "assets/images/yellow_strip.png",
    "revision": "6ba5be0d2f2161664f6e90daf68487b0"
  },
  {
    "url": "assets/loader/css-loader.css",
    "revision": "882ec8a921e87465c14c449d6aca8bd7"
  },
  {
    "url": "assets/tw.js",
    "revision": "88952f7b22d95c38d5b1dee709f34ceb"
  },
  {
    "url": "bg-4.c755b78f92f5b1e6c190.jpg",
    "revision": "c755b78f92f5b1e6c1906ad29ebbe979"
  },
  {
    "url": "contactInfo_bg.6047710ff37e9dea1dd4.png",
    "revision": "6047710ff37e9dea1dd48639b12cc8ce"
  },
  {
    "url": "contactus_bg.4bba4c6bb0e51b131e06.jpg",
    "revision": "4bba4c6bb0e51b131e061747bf92752d"
  },
  {
    "url": "dust3.b831ee6f0b9dcda02b80.png",
    "revision": "b831ee6f0b9dcda02b8093cbd4c80e25"
  },
  {
    "url": "favicon.ico",
    "revision": "68451f1f0c7773cdfde92acc7e58bca5"
  },
  {
    "url": "fontawesome-webfont.674f50d287a8c48dc19b.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fontawesome-webfont.912ec66d7572ff821749.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fontawesome-webfont.af7ae505a9eed503f8b8.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fontawesome-webfont.b06871f281fee6b241d6.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fontawesome-webfont.fee66e712a8a08eef580.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "index.html",
    "revision": "7d601b074dd057825e29a2b224d0706a"
  },
  {
    "url": "inline.527ecc719baac177d571.bundle.js",
    "revision": "aba746255ac8f5e1276f307ba8f262b6"
  },
  {
    "url": "main.610720dd144edbae6cd2.bundle.js",
    "revision": "07c41c98ce1d67e0de11b899d75b9e75"
  },
  {
    "url": "manifest.json",
    "revision": "174b1107690b4de211c094ae28da743f"
  },
  {
    "url": "mastbit-bg-1.fe20719eb4a7a17f4a80.png",
    "revision": "fe20719eb4a7a17f4a80129291d7bf9a"
  },
  {
    "url": "mastbit-bg-2.0af0b92d8215432595e5.png",
    "revision": "0af0b92d8215432595e5b748e08bd9a3"
  },
  {
    "url": "mastbit-bg-3.820452aea7b58f948f8a.png",
    "revision": "820452aea7b58f948f8a26dcf14f7a8d"
  },
  {
    "url": "mastbit-bg-4.85f61d4f20fec58a3450.png",
    "revision": "85f61d4f20fec58a34503e22de666a74"
  },
  {
    "url": "pageBG-404.da3e725361bd3210cdde.jpg",
    "revision": "da3e725361bd3210cdde3b4a31d92f3e"
  },
  {
    "url": "polyfills.b907b64e0434587fd5c6.bundle.js",
    "revision": "047af68f4d404ee973287bc7888f06c2"
  },
  {
    "url": "scripts.66361e80eab100bc0e7f.bundle.js",
    "revision": "5e0c6276982f39536de9f48372b6e12e"
  },
  {
    "url": "styles.a7c0ee60cfcd1f57a567.bundle.css",
    "revision": "a7c0ee60cfcd1f57a56789938e297e13"
  },
  {
    "url": "work-flow-arrow.70be209d6623123c542f.png",
    "revision": "70be209d6623123c542f67d9ecf2f135"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js.map",
    "revision": "1cbd1bf8f8f05f7504355e0f7674b67e"
  }
]);
workboxSW.router.registerNavigationRoute("/index.html");
workboxSW.router.registerRoute(/^https:\/\/*.mastbit.com\/.*/, workboxSW.strategies.networkFirst({}), 'GET');

const applicationServerPublicKey = 'BCOy8YVNB9h0J0leynA_qbqOjmooIk_HxIwEKkxECI_q73THufnvRaSMUmtieR3vSdKrMVKrLg7BdbEmltqKePA=';

/* eslint-enable max-len */


self.addEventListener('push', function (event) {

  // var notify = event.data.json();

  const title = event.data.json().title;
  url = event.data.json().url;
  const options = {
    body: event.data.json().message,
    icon: 'assets/images/logo-white.png',
    badge: 'assets/images/logo-white.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  event.waitUntil(
    // clients.openWindow(url)
    clients.matchAll({type: 'window'}).then( function (windowClients ) {



      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }

      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
  // If not, then open the target URL in a new window/tab.
  // if (clients.openWindow) {
  //   return clients.openWindow(url);
  // }
    })
  );
});

// self.addEventListener('pushsubscriptionchange', function (event) {
//   const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//   event.waitUntil(
//     self.registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: applicationServerKey
//     }).then(function (newSubscription) {
//       /* TODO: Send the subscription object to application server.
//        *       notifications are sent from the server using this object.
//        */
//     })
//   );
// });
