import sharp from "sharp";
import { pieChart } from "./charts/pie";
import { radarChart } from "./charts/radar";
import { radialBarChart } from "./charts/radialBar";
import { barChartWithShadow } from "./charts/barWithShadow";

// Pie Chart
const title = "Referer of a website";
const chartData = [
  {
    value: 1048,
    name: "Search Engine",
  },
  {
    value: 735,
    name: "Direct",
  },
  {
    value: 580,
    name: "Email",
  },
  {
    value: 484,
    name: "Union Ads",
  },
  {
    value: 300,
    name: "Video Ads",
  },
];

const pieChartSvgString = pieChart(title, chartData, 750, 600);

const pngBuffer = await sharp(Buffer.from(pieChartSvgString)).png().toBuffer();
await Bun.write("cek.png", new Blob([pngBuffer]));

// Radar Chart
// const radarChartData = [
//   {
//     value: 109,
//     name: "Dasar",
//   },
//   {
//     name: "Analisis",
//     value: 107,
//   },
//   {
//     name: "Komunikasi",
//     value: 121,
//   },
// ];

// const radarChartSvgString = radarChart("Ability Radar", radarChartData);
// const radarPngBuffer = await sharp(Buffer.from(radarChartSvgString))
//   .png()
//   .toBuffer();
// await Bun.write("cekRadar.png", new Blob([radarPngBuffer]));

// Radial Bar Chart
// const radialBarChartSvgString = radialBarChart("Kecerdasan Dasar");
// const radialBarPngBuffer = await sharp(Buffer.from(radialBarChartSvgString))
//   .png()
//   .toBuffer();
// await Bun.write("cekRadial.png", new Blob([radialBarPngBuffer]));

// Bar Chart with Shadow
// const barChartData = [
//   {
//     value: 101.1,
//     name: "Memori",
//   },
//   {
//     name: "Figural",
//     value: 87.0,
//   },
//   {
//     name: "Verbal",
//     value: 125.0,
//   },
//   {
//     name: "Angka",
//     value: 124.0,
//   },
// ];
// const barChartWithShadowSvgString = barChartWithShadow(
//   "Kecerdasan Dasar",
//   barChartData,
//   160,
//   [0, 40, 80, 120, 160]
// );
// const barChartWithShadowPngBuffer = await sharp(
//   Buffer.from(barChartWithShadowSvgString)
// )
//   .png()
//   .toBuffer();
// await Bun.write("cekBar.png", new Blob([barChartWithShadowPngBuffer]));
