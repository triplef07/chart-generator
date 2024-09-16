import { t } from "elysia";

export const PostCreatePieChartBody = t.Object({
  title: t.String(),
  chartData: t.Array(
    t.Object({
      value: t.Number(),
      name: t.String(),
    })
  ),
  width: t.Optional(t.Union([t.String(), t.Number()])),
  height: t.Optional(t.Union([t.String(), t.Number()])),
});

export const PostCreateRadarChartBody = t.Object({
  title: t.String(),
  chartData: t.Array(
    t.Object({
      value: t.Number(),
      name: t.String(),
    })
  ),
  width: t.Optional(t.Union([t.String(), t.Number()])),
  height: t.Optional(t.Union([t.String(), t.Number()])),
});

export const PostCreateBarChartWithShadowBody = t.Object({
  title: t.String(),
  chartData: t.Array(
    t.Object({
      value: t.Number(),
      name: t.String(),
    })
  ),
  maxValue: t.Number(),
  width: t.Optional(t.Union([t.String(), t.Number()])),
  height: t.Optional(t.Union([t.String(), t.Number()])),
});
