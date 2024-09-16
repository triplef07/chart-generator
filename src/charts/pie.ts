import * as echarts from "echarts";
import type { ChartInputData } from "../interface/chartInput";

export function pieChart(
  title: string,
  chartData: ChartInputData[],
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
    title: {
      text: title,
      left: "center",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        type: "pie",
        data: chartData,
        label: {
          formatter: `{b} ({d}%)`,
        },
      },
    ],
  });

  const svgString = chart.renderToSVGString();
  chart.dispose();
  return svgString;
}
