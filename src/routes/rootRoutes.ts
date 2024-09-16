import Elysia from "elysia";
import {
  PostCreateBarChartWithShadowBody,
  PostCreatePieChartBody,
  PostCreateRadarChartBody,
} from "../validator/root/body";
import { pieChart } from "../charts/pie";
import sharp from "sharp";
import { radarChart } from "../charts/radar";
import { splitNumber } from "../helper/formatter";
import { barChartWithShadow } from "../charts/barWithShadow";

export const rootRoutes = new Elysia()
  .get("/healthcheck", () => {
    return {
      message: "this ms is healthy",
    };
  })
  .post(
    "/pie",
    async ({ body, set }) => {
      const pieChartSvgString = pieChart(
        body.title,
        body.chartData,
        body.width,
        body.height
      );
      const pngBuffer = await sharp(Buffer.from(pieChartSvgString))
        .png()
        .toBuffer();
      set.headers["content-type"] = "image/png";
      return pngBuffer;
    },
    {
      body: PostCreatePieChartBody,
    }
  )
  .post(
    "/radar",
    async ({ body, set }) => {
      const radarChartSvgString = radarChart(
        body.title,
        body.chartData,
        body.width,
        body.height
      );
      const pngBuffer = await sharp(Buffer.from(radarChartSvgString))
        .png()
        .toBuffer();
      set.headers["content-type"] = "image/png";
      return pngBuffer;
    },
    {
      body: PostCreateRadarChartBody,
    }
  )
  .post(
    "/barWithShadow",
    async ({ body, set }) => {
      const tickValues = splitNumber(body.maxValue, 4);
      const barChartWithShadowSvgString = barChartWithShadow(
        body.title,
        body.chartData,
        body.maxValue,
        tickValues,
        body.width,
        body.height
      );

      const pngBuffer = await sharp(Buffer.from(barChartWithShadowSvgString))
        .png()
        .toBuffer();
      set.headers["content-type"] = "image/png";
      return pngBuffer;
    },
    {
      body: PostCreateBarChartWithShadowBody,
    }
  );
