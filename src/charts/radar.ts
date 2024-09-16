import type { ChartInputData } from "../interface/chartInput";
import * as echarts from "echarts";

export function radarChart(
  title: string,
  chartData: ChartInputData[],
  width?: number | string,
  height?: number | string
) {
  let chart = echarts.init(null, null, {
    renderer: "svg", // must use SVG rendering mode
    ssr: true, // enable SSR
    width: width ?? 400, // need to specify height and width
    height: height ?? 300,
  });

  const IndicatorArrayName = chartData.map((data) => {
    return {
      name: data.name,
    };
  });

  const dataValue = chartData.map((data) => data.value);

  chart.setOption({
    title: {
      text: title,
    },
    radar: {
      shape: "circle",
      axisName: {
        color: "#000000",
      },
      indicator: IndicatorArrayName,
    },
    series: [
      {
        name: "latest",
        type: "radar",
        data: [
          {
            value: dataValue,
            label: {
              show: true,
            },
            areaStyle: {
              opacity: 0.2,
            },
          },
        ],
      },
    ],
  });
  const svgString = chart.renderToSVGString();
  chart.dispose();
  return svgString;
}
