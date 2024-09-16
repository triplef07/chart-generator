import type { ChartInputData } from "../interface/chartInput";
import * as echarts from "echarts";

export function barChartWithShadow(
  title: string,
  chartData: ChartInputData[],
  maxValue: number,
  yTickValues: number[],
  width?: number | string,
  height?: number | string
) {
  let chart = echarts.init(null, null, {
    renderer: "svg", // must use SVG rendering mode
    ssr: true, // enable SSR
    width: width ?? 400, // need to specify height and width
    height: height ?? 300,
  });

  const categoryNameArray = chartData.map(
    (data) => data.name.split(" ").join("\n")
    //   {
    //   return {
    //     value: data.name,
    //     textStyle: {
    //       fontSize: 5,
    //     },
    //   };
    // }
  );

  const dataValue = chartData.map((data) => data.value);

  chart.setOption({
    title: {
      text: title,
    },
    xAxis: {
      type: "category",
      data: categoryNameArray,
      boundaryGap: true,
      axisLabel: { interval: 0 },
    },
    yAxis: {
      type: "value",
      max: maxValue,
      axisTick: {
        alignWithLabel: true,
        // customValues: [0, 40, 80, 120, 160],
        customValues: yTickValues,
      },
      axisLabel: {
        // customValues: [0, 40, 80, 120, 160],
        customValues: yTickValues,
      },
    },
    series: [
      {
        data: dataValue,
        type: "bar",
        showBackground: true,
        label: {
          show: true,
        },
      },
    ],
  });
  const svgString = chart.renderToSVGString();
  chart.dispose();
  return svgString;
}
