import * as echarts from "echarts";

export function radialBarChart(
  title: string,
  width?: number | string,
  height?: number | string
) {
  // SVG
  let chart = echarts.init(null, null, {
    renderer: "svg", // must use SVG rendering mode
    ssr: true, // enable SSR
    width: width ?? 400, // need to specify height and width
    height: height ?? 300,
  });

  chart.setOption({
    // title: {
    //   text: title,
    // },
    angleAxis: {
      endAngle: -180,
      min: 0,
      max: 160,
      interval: 20,
      axisLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: "category",
      // data: ["Memori", "Figural", "Verbal", "Angka"],
      data: ["Angka", "Verbal", "Figural", "Memori"],
      // data: ["Angka", "Verbal"],
      axisLabel: { interval: 0 },
      z: 10,
    },
    polar: {},
    series: [
      {
        // Untuk efek background
        type: "bar",
        data: [160, 160, 160, 160],

        coordinateSystem: "polar",
        barGap: "-100%",
        barWidth: 13,
        itemStyle: {
          color: "#dddddd",
        },
      },
      {
        type: "bar",
        // data: [101.1, 87.0, 125.0, 124.0],
        data: [124.0, 125.0, 87.9, 101.1],

        coordinateSystem: "polar",
        barWidth: 13, // Mengatur ketebalan si garis birunya
        // barGap: "20%",
        // showBackground: true,
        emphasis: {
          focus: "series",
        },
        // label: {
        //   show: true,
        // },
        // barCategoryGap: "50%",
      },
    ],
  });
  const svgString = chart.renderToSVGString();
  chart.dispose();
  return svgString;
}
