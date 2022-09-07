// export class LightningDonationsUtils {
// const host = 'https://embed.twentyuno.net';

// contrastingColor(color) {
//   return (luma(color) >= 200) ? '#000' : '#fff';
// }

// luma(color) {
//   let rgb = hexToRGB(color);
//   return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]);
// }

// hexToRGB(color) {
//   let rgb = [];
//   for (let i = 0; i <= 2; i++) {
//     rgb[i] = parseInt(color.substr(i * 2, 2), 16);
//   }
//   return rgb;
// }

// async fetchInvoice(to, amount, comment) {
//   const response = await fetch(host + `/invoice?to=${to}&amount=${amount}&comment=${comment}`, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(response.error);
//   }

//   return response.json();
// }

// async fetchParams(to) {
//   const response = await fetch(host + `/params?to=${to}`, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(response.error);
//   }

//   return response.json();
// }

// module.exports = {
//   fetchInvoice,
//   luma,
//   contrastingColor,
//   fetchParams,
// };}
