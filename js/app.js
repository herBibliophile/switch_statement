"use strict";

// matter_1_of_switch

// let week = 2;

// switch (week) {
//   case 1:
//     console.log(`Dushanba`);
//     break;

//   case 2:
//     console.log(`Seshanba`);
//     break;

//   case 3:
//     console.log(`Chorshanba`);
//     break;
//   case 4:
//     console.log(`Payshanba`);
//     break;
//   case 5:
//     console.log(`Juma`);
//     break;
//   case 6:
//     console.log(`Shanba`);
//     break;
//   case 7:
//     console.log(`Yakshanba`);
//     break;

//   default:
//     console.log(`Such a week does not exist`);
//     break;
// }

// // matter_2_of_switch

// let K = 3;

// switch (K) {
//   case 1:
//     console.log(`Yomon`);
//     break;
//   case 2:
//     console.log(`Qoniqarsiz`);
//     break;
//   case 3:
//     console.log(`Qoniqarli`);
//     break;

//   case 4:
//     console.log(`Yaxshi`);
//     break;
//   case 5:
//     console.log(`A'lo`);
//     break;
//   default:
//     break;
// }

// // matter_3_of_switch

// let month = 9;

// switch (month) {
//   case 1:
//     console.log(`First month is 'Winter'`);
//     break;
//   case 2:
//     console.log(`Second month is 'Winter'`);
//     break;
//   case 3:
//     console.log(`Third month is 'Spring'`);
//     break;
//   case 4:
//     console.log(`Fourth month is 'Spring'`);
//     break;
//   case 5:
//     console.log(`Fifth month is 'Spring'`);
//     break;
//   case 6:
//     console.log(`Sixth month is 'Summer'`);
//     break;
//   case 7:
//     console.log(`Seventh month is 'Summer'`);
//     break;
//   case 8:
//     console.log(`Eighth month is 'Summer'`);
//     break;
//   case 9:
//     console.log(`Ninth month is 'Autumn'`);
//     break;
//   case 10:
//     console.log(`Tenth month is 'Autumn'`);
//     break;
//   case 11:
//     console.log(`Eleventh month is 'Autumn'`);
//     break;
//   case 12:
//     console.log(`Twelveth month is 'Winter'`);
//     break;
//   default:
//     console.log(`Error`);
//     break;
// }

// // matter_4_of_switch

// let dayMonth = 5;

// switch (dayMonth) {
//   case 1:
//     console.log(`January has 31 days`);
//     break;
//   case 2:
//     console.log(`February has 28-29 days`);
//     break;
//   case 3:
//     console.log(`March has 31 days`);
//     break;
//   case 4:
//     console.log(`April has 30 days`);
//     break;
//   case 5:
//     console.log(`May has 31 days`);
//     break;
//   case 6:
//     console.log(`June has 30 days`);
//     break;
//   case 7:
//     console.log(`July has 31 days`);
//     break;
//   case 8:
//     console.log(`August has 31 days`);
//     break;
//   case 9:
//     console.log(`September has 30 days`);
//     break;
//   case 10:
//     console.log(`October has 31 days`);
//     break;
//   case 11:
//     console.log(`November has 30 days`);
//     break;
//   case 12:
//     console.log(`December has 31 days`);
//     break;

//   default:
//     console.log(`Error`);
//     break;
// }

// // matter_5_of_switch

// let A = 5,
//   B = 7,
//   M = 4;

// switch (M) {
//   case 1:
//     console.log(`(+) Addition  ${A + B} `);
//     break;
//   case 2:
//     console.log(`(-) Subtraction ${A - B} `);
//     break;
//   case 3:
//     console.log(`(/) Division ${A / B}`);
//     break;
//   case 4:
//     console.log(`(*) Multiplication ${A * B} `);
//     break;

//   default:
//     console.log(`This result isn't`);
//     break;
// }

// // matter_6_of_switch

// let m = 1,
//   a = 100,
//   natija;
// switch (m) {
//   case 1:
//     natija = `${a} detsimetr = ${a / 10} metr `;
//     break;
//   case 2:
//     natija = `${a} kilometr = ${a * 1000} metr `;
//     break;
//   case 3:
//     natija = `${a} metr = ${a} metr `;
//     break;
//   case 4:
//     natija = `${a} millimetr = ${a / 10000} metr `;
//     break;
//   case 5:
//     natija = `${a} santimetr = ${a / 100} metr `;
//     break;
//   default:
//     console.log(`This answer is error`);

//     break;
// }

// console.log(natija);

// // matter_7_of_switch

// let w = 5,
//   b = 1,
//   result;
// switch (w) {
//   case 1:
//     result = `${b} kilogramm = ${b} kilogramm `;
//     break;
//   case 2:
//     result = `${b} milligramm = ${b / 1000000 } kilogramm`;
//     break;
//   case 3:
//     result = `${b} gramm = ${b / 1000} kilogramm `;
//     break;
//   case 4:
//     result = `${b} tonna = ${b * 1000} kilogram `;
//     break;
//   case 5:
//     result = `${b} sentner = ${b * 100} kilogram `;

//     break;
//   default:
//     console.log(`This answer is error`);
//     break;
// }

// console.log(result);

// matter_8_of_switch

// let D = 29,
//   M = 2,
//   Y = 2024;

// switch (M) {
//   case 2:
//     if (D == 29) {
//       console.log(`${D}.${M}  - Yil 366 kunda iborat`);
//     } else {
//       console.log(`${D}.${M}  - Yil 365 kunda iborat`);
//     }
//     break;

//   default:
//     break;
// }

// switch (Y % 4) {
//   case 0:
//     console.log(`${D}.${M}.${Y}  - Yil 366 kundan iborat`);
//     break;

//   default:
//     console.log(`${D}.${M}.${Y}  - Yil 365 kundan iborat`);
//     break;
// }

// matter_9_of_switch

// let D = 31,
//   M = 5,
//   Y = 2025,
//   kabisa;

// if (Y % 4 === 0) {
//   kabisa = 366;
// } else {
//   kabisa = 365;
// }

// switch (M) {
//   case 1:
//     if (D == 31) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 2:
//     if (D == 28) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 3:
//     if (D == 31) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 4:
//     if (D == 30) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 5:
//     if (D == 31) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 6:
//     if (D == 30) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 7:
//     if (D == 31) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 8:
//     if (D == 31) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 9:
//     if (D == 30) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 10:
//     if (D == 31) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 11:
//     if (D == 30) {
//       console.log(`${1}.${M + 1}.${Y} - Yil ${kabisa} kundan iborat `);
//     } else {
//       console.log(`${D + 1}.${M}.${Y} - Yil ${kabisa} kundan iborat`);
//     }
//     break;
//   case 12:
//     if (D == 31) {
//       console.log(
//         `${1}.${1}.${Y + 1}  - Yil ${
//           (Y + 1) % 4 == 0 ? 366 : 365
//         } kundan iborat`
//       );
//     } else if (D >= 31) {
//       console.log(`${(D = 1)}.${M + 1}.${Y} -  Yil ${kabisa} kundan iborat`);
//     }
//     break;

//   default:
//     console.log(`Error`);
//     break;
// }

// matter_10_of_switch

// let Y = "j",
//   K = 1,
//   holat = Y + K,
//   text;

// switch (holat) {
//   case "j0":
//     text = "Janubga ";
//     break;

//   case "j1":
//     text = "Sharqqa ";
//     break;

//   case "j2":
//     text = "G'arbga ";
//     break;

//   case "sh0":
//     text = "Shimolga ";
//     break;

//   case "sh1":
//     text = "G'arbga ";
//     break;

//   case "sh2":
//     text = "Sharqqa ";
//     break;

//   case "q0":
//     text = "Sharqqa";
//     break;

//   case "q1":
//     text = "Shimolga";
//     break;

//   case "q2":
//     text = "Janubga";
//     break;

//   case "g0":
//     text = "G'arbga";
//     break;

//   case "g1":
//     text = "Janubga";
//     break;

//   case "g2":
//     text = "Shimolga";
//     break;

//   default:
//     console.log(`Error`);
//     break;
// }

// console.log(text += "qarab turibdi");

// matter_11_of_switch

// let K1 = "q",
//   K2 = 2,
//   condition = K1 + K2,
//   matn;

// switch (condition) {
//   case "j0":
//     matn = "G'arbga ";
//     break;

//   case "j1":
//     matn = "Sharqqa ";
//     break;

//   case "j2":
//     matn = "Shimolga ";
//     break;

//   case "sh0":
//     matn = "Sharqqa ";
//     break;

//   case "sh1":
//     matn = "G'arbga ";
//     break;

//   case "sh2":
//     matn = "Sharqqa ";
//     break;

//   case "q0":
//     matn = "Janubga ";
//     break;

//   case "q1":
//     matn = "Shimolga ";
//     break;

//   case "q2":
//     matn = "G'arbga ";
//     break;

//   case "g0":
//     matn = "Shimolga ";
//     break;

//   case "g1":
//     matn = "Janubga ";
//     break;

//   case "g2":
//     matn = "Sharqqa ";
//     break;

//   default:
//     console.log(`Error`);
//     break;
// }

// console.log((matn += "qarab turibdi"));

// matter_12_of_switch

// let a , R , D , L , S = 45;

// const pi = 3.14;

// if (R) {
//     a = 1
// } else if (D) {
//     a = 2
// } else if (L) {
//     a = 3
// }else if (S) {
//     a = 4
// }

// switch (a) {
//     case 1:
//         D = 2 * R
//         L = 2*pi*R
//         S = pi*Math.pow(R,2)
//         break;
//     case 2:
//         R = D / 2
//         L = 2*pi*R
//         S = pi*Math.pow(R,2)
//         break;
//     case 3:
//         R = L / (2 * pi)
//         D = 2*R
//         S = pi*Math.pow(R,2)
//         break;
// case 4:
//     R = Math.sqrt(S / pi)
//     D = 2 * R
//     L = 2*pi*R
//     break;

//     default:
// console.log('Error');

//         break;
// }

// console.log( `R = ${R}, D = ${D}, L = ${L} , S = ${S} `);

// matter_13_of_switch

// let x,
//   a,
//   c,
//   h ,
//   S = 12.25 ;

// if (a) {
//   x = 1;
// } else if (c) {
//   x = 2;
// } else if (h) {
//   x = 3;
// } else if (S) {
//   x = 4;
// }

// switch (x) {
//   case 1:
//     c = a * Math.sqrt(2);
//     h = c / 2;
//     S = (c * h) / 2;
//     break;
//   case 2:
//     a = c / Math.sqrt(2);
//     h = c / 2;
//     S = (c * h) / 2;
//     break;
//   case 3:
//     c = h * 2;
//     a = c / Math.sqrt(2);
//     S = (c * h) / 2;
//     break;
//   case 4:
//     a = Math.sqrt(S * 2);
//     c = a * Math.sqrt(2);
//     h = c / 2;
//     break;

//   default:
//     console.log(`Error`);
//     break;
// }

// console.log(` a = ${a} , c = ${c} , h = ${h} , S = ${S}`);

// matter_14_of_switch

// let a,
//   R1,
//   R2,
//   S = 10.8,
//   y;

// if (a) {
//   y = 1;
// } else if (R1) {
//   y = 2;
// } else if (R2) {
//   y = 3;
// } else if (S) {
//   y = 4;
// }

// switch (y) {
//   case 1:
//     R1 = (a * Math.sqrt(3)) / 6;
//     R2 = 2 * R1;
//     S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
//     break;
//   case 2:
//     a = 6 * R1 / Math.sqrt(3);
//     R2 = 2 * R1;
//     S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
//     break;
//   case 3:
//     a = 3*R2 / Math.sqrt(3);
//     R1 = (a * Math.sqrt(3)) / 6;
//     S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
//     break;
//   case 4:
//     a = 2 * Math.sqrt(S)/ Math.pow(3,1/4);
//     R1 = (a * Math.sqrt(3)) / 6;
//     R2 = 2 * R1;
//     break;

//   default:
//     break;
// }
// console.log(`a = ${a} , R1 = ${R1} , R2 = ${R2} , S = ${S}`);

// matter_15_of_switch

// let M = 22,
//   N = 14,
//   result;

// if (N >= 6 && N <= 14 && M >= 1 && M <= 4) {
//   switch (N) {
//     case 6:
//       result = "Olti";
//       break;
//     case 7:
//       result = "Yetti";
//       break;
//     case 8:
//       result = "Sakkiz";
//       break;
//     case 9:
//       result = "To'qqiz";
//       break;
//     case 10:
//       result = "O'n";
//       break;
//     case 11:
//       result = "Valet";
//       break;
//     case 12:
//       result = "Dama";
//       break;
//     case 13:
//       result = "Qirol";
//       break;
//     case 14:
//       result = "Tuz";
//       break;
//   }

//   switch (M) {
//     case 1:
//       result += " g'isht";
//       break;
//     case 2:
//       result += " olma";
//       break;
//     case 3:
//       result += " chillak";
//       break;
//     case 4:
//       result += " qarg'a";
//       break;
//   }
// } else {
//   N >= 6 && N <= 14
//     ? (result = "1 <= M <= 4 oraliqlarda bo`lishi shart")
//     : (result = " N soni 6 <= N <= 14 oraliqlarda bo`lishi shart");
// }

// console.log(result);

// matter_16_of_switch

// let r = 4  , y = 6, age;

// switch (r) {
//     case 2:
//         age = "Yigirma"
//         break;
//     case 3:
//         age = "O'ttiz"
//         break;
//     case 4:
//         age = "Qirq"
//         break;
//     case 5:
//         age = "Ellik"
//         break;
//     case 6:
//         age = "Oltmish"
//         break;

//     default:
//         break;
// }

// switch (y) {
//     case 0:
//         age += " "
//         break;
//     case 1:
//         age += " bir"
//         break;
//     case 2:
//         age += " ikki"
//         break;
//     case 3:
//         age += " uch"
//         break;
//     case 4:
//         age += " to'rt"
//         break;
//     case 5:
//         age += " besh"
//         break;
//     case 6:
//         age += " olti"
//         break;
//     case 7:
//         age += " yetti"
//         break;
//     case 8:
//         age += " sakkiz"
//         break;
//     case 9:
//         age += " to'qqiz"
//         break;

//     default:
//         break;
// }

// ;console.log(age += " yosh");

// matter_17_of_switch

let m = 4,
  s = 5,
  issue;

switch (m) {
  case 1:
    issue = "O'n";
    break;
  case 2:
    issue = "Yigirma";
    break;
  case 3:
    issue = "O'ttiz";
    break;
  case 4:
    issue = "Qirq";
    break;

  default:
    break;
}

switch (s) {
  case 0:
    issue += "ta";
    break;
  case 1:
    if (m > 0 && m < 4) {
      issue += " bitta";
    } else {
      console.log("Error");
    }
    break;
  case 2:
    if (m > 0 && m < 4) {
      issue += " ikkkita";
    } else {
      console.log("Error");
    }
    break;
  case 3:
    if (m > 0 && m < 4) {
      issue += " uchta";
    } else {
      console.log("Error");
    }
    break;
  case 4:
    if (m > 0 && m < 4) {
      issue += " to'rtta";
    } else {
      console.log("Error");
    }
    break;
  case 5:
    if (m > 0 && m < 4) {
      issue += " beshta";
    } else {
      console.log("Error");
    }
    break;
  case 6:
    if (m > 0 && m < 4) {
      issue += " oltita";
    } else {
      console.log("Error");
    }
    break;
  case 7:
    if (m > 0 && m < 4) {
      issue += " yettita";
    } else {
      console.log("Error");
    }
    break;
  case 8:
    if (m > 0 && m < 4) {
      issue += " sakkizta";
    } else {
      console.log("Error");
    }
    break;
  case 9:
    if (m > 0 && m < 4) {
      issue += " to'qqizta";
    } else {
      console.log("Error");
    }
    break;

  default:
    break;
}

console.log((issue += " masala"));

// matter_18_of_switch

// let h = 8, t = 3, u = 9, unity;

// switch (h) {
//     case 1:
//         unity = "Bir yuz"
//         break;
//     case 2:
//         unity = "Ikki yuz"
//         break;
//     case 3:
//         unity = "Uch yuz"
//         break;
//     case 4:
//         unity = "To'rt yuz"
//         break;
//     case 5:
//         unity = "Besh yuz"
//         break;
//     case 6:
//         unity = "Olti yuz"
//         break;
//     case 7:
//         unity = "Yetti yuz"
//         break;
//     case 8:
//         unity = "Sakkiz yuz"
//         break;
//     case 9:
//         unity = "To'qqiz yuz"
//         break;

//     default:
//         console.log(`Error`);
//         break;
// }
 
// switch (t) {
//     case 0:
//         unity += " "
//         break;
//     case 1:
//         unity += " o'n"
//         break;
//     case 2:
//         unity += " yigirma"
//         break;
//     case 3:
//         unity += " o'ttiz"
//         break;
//     case 4:
//         unity += " qirq"
//         break;
//     case 5:
//         unity += " ellik"
//         break;
//     case 6:
//         unity += " oltmish"
//         break;
//     case 7:
//         unity += " yetmish"
//         break;
//     case 8:
//         unity += " sakson"
//         break;
//     case 9:
//         unity += " to'qson"
//         break;

//     default:
//         break;
// }

// switch (u) {
//     case 0:
//         unity += " "
//         break;
//     case 1:
//         unity += " bir"
//         break;
//     case 2:
//         unity += " ikki"
//         break;
//     case 3:
//         unity += " uch"
//         break;
//     case 4:
//         unity += " to'rt"
//         break;
//     case 5:
//         unity += "besh "
//         break;
//     case 6:
//         unity += " olti"
//         break;
//     case 7:
//         unity += " yetti"
//         break;
//     case 8:
//         unity += " sakkiz"
//         break;
//     case 9:
//         unity += " to'qqiz"
//         break;

//     default:
//         break;
// }

// console.log(unity);

// matter_19_of_switch

// let  yilBoshi = 1984,  yil = 2017 , x , text;

// if (yil > yilBoshi) {
//     x = yil - yilBoshi
// }else{
//     console.log(`Error`);
// }

// let c = Math.ceil(x / 12)
// let h = x % 12

// switch (c) {
//     case 1:
//         text = "Yashil"
//         break;
//     case 2:
//         text = "Qizil"
//         break;
//     case 3:
//         text = "Sariq"
//         break;
//     case 4:
//         text = "Oq"
//         break;
//     case 5:
//         text = "Qora"
//         break;

//     default:
//         break;
// }

// switch (h) {
//     case 1:
//         text += " sichqon"
//         break;
//     case 2:
//         text += " sigir"
//         break;
//     case 3:
//         text += " yo'lbars"
//         break;
//     case 4:
//         text += " quyon"
//         break;
//     case 5:
//         text += " ajdar"
//         break;
//     case 6:
//         text += " ilon"
//         break;
//     case 7:
//         text += " ot"
//         break;
//     case 8:
//         text += " qo'y"
//         break;
//     case 9:
//         text += " maymun"
//         break;
//     case 10:
//         text += " tovuq"
//         break;
//     case 11:
//         text += " it"
//         break;
//     case 12:
//         text += " to'ng'iz"
//         break;

//     default:
//         break;
// }

// console.log(text);
