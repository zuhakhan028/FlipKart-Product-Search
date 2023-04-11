
// for(i=0;i<10;i++){
//    var child= document.getElementById("product")
//     document.body.createElement("div").appendChild(child)

// }
var close_fnc1 = document.getElementById("close_functionality1");
var togglebtn1 = document.getElementById("toggle1");
togglebtn1.addEventListener("click", function () {
  var docdiv = document.createElement("div");
  docdiv.id = "docdiv"
  docdiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  docdiv.classList.add("innerHTML")
  docdiv.classList.add("togglediv")

  if (close_fnc1.classList.contains("togglediv")) {
    let docdiv_header = document.getElementById("docdiv")
    close_fnc1.removeChild(docdiv_header);
  } else {
    close_fnc1.classList.add("togglediv")
    close_fnc1.appendChild(docdiv);
  }

})

var close_fnc2 = document.getElementById("close_functionality2");
var togglebtn2 = document.getElementById("toggle2");
togglebtn2.addEventListener("click", function () {
  var docdiv = document.createElement("div");
  docdiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  docdiv.classList.add("innerHTML")
  docdiv.classList.add("togglediv")
  close_fnc2.appendChild(docdiv);
})

var close_fnc3 = document.getElementById("close_functionality3");
var togglebtn3 = document.getElementById("toggle3");
togglebtn3.addEventListener("click", function () {
  var docdiv = document.createElement("div");
  docdiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  docdiv.classList.add("innerHTML")
  docdiv.classList.add("togglediv")
  close_fnc3.appendChild(docdiv);
})











var transform1 = document.getElementById("toggle1");
transform1.addEventListener("click", rotate1)


var transform2 = document.getElementById("toggle2");
transform2.addEventListener("click", rotate2)


var transform3 = document.getElementById("toggle3");
transform3.addEventListener("click", rotate3)



function rotate1() {
  transform1.classList.add("cross_img_rotate")
}

function rotate2() {
  transform2.classList.add("cross_img_rotate")
}

function rotate3() {
  transform3.classList.add("cross_img_rotate")
}

// let repeatingdiv=document.getElementById("product");
// let newdiv=document.createElement("div");
// for(i=0;i<10;i++){
//    let p= repeatingdiv.cloneNode(true);
//    let divparent=newdiv.appendChild(p);

// }
// repeatingdiv.appendChild(newdiv);










// // for(i=0;i<10;i++){
// //     let divChild=document.getElementById('product')
// //     document.createElement("div").appendChild(divChild)
// // }




















const productJSON = [
  {
    title: "APPLE iPhone 11 (White, 64 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
  {
    title: "APPLE iPhone 11 (Black, 64 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
  {
    title: "APPLE iPhone 11 (White, 128 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
  {
    title: "APPLE iPhone 11 (Black, 128 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
];


let product_JSON_1_ele = productJSON[0];
let product_string = JSON.stringify(product_JSON_1_ele);
let product_parse = JSON.parse(product_string);

document.getElementsByClassName("product-name")[0].innerHTML = `${product_parse.price.mrp}`





























const footerJson = {
  colunms: [
    {
      title: "About",
      dataType: "ARRAY",
      data: [
        "Contact Us",
        "About Us",
        "Careers",
        "Flipkart Stories",
        "Press",
        "Flipkart Wholesale",
        "Corporate Information",
      ],
    },
    {
      title: "HELP",
      dataType: "ARRAY",
      data: [
        "Payments",
        "Shipping",
        "Cancellation & Returns",
        "FAQ",
        "Report Infringement",
      ],
    },
    {
      title: "POLICY",
      dataType: "ARRAY",
      data: [
        "Return Policy",
        "Terms Of Use",
        "Security",
        "Privacy",
        "Sitemap",
        "EPR Compliance",
      ],
    },
    {
      title: "SOCIAL",
      dataType: "ARRAY",
      data: ["Facebook", "Twitter", "YouTube"],
    },
    {
      title: "Mail Us:",
      dataType: "MAIL_ADDRESS",
      data: "Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India",
    },
    {
      title: "Registered Office Address:",
      dataType: "REGISTERED_ADDRESS",
      data: "Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107 Telephone: 044-45614700",
    },
  ],
  bottomColunms: [
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K",
      text: "Become a seller",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
      text: "Advertise",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
      text: "Gift Cards",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
      text: "Help Center",
    },
    {
      text: "© 2007-2023 Flipkart.com",
    },
    {
      img: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg",
    },
  ],
}