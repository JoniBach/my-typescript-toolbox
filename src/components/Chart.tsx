import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { connect } from "http2";

const ChartContainer = styled(motion.div)`
  height: 100px;
  width: 100%;
`;

type ChartProps = {
  data: any;
  config: any;
  type: any;
};

type GetChartProps = {
  width: any;
  height: any;
  data: any;
  margin: any;
  type: string;
  dataKey: string;
  stroke: string;
  outerRadius: number;
};

export const Chart = ({ data, config, type }: ChartProps) => {
  const { items, xKey } = config;
  const [chartContent, setChartContent] = useState(defaultChartContent);

  const GetChartGraphic = (item: any) => {
    switch (type) {
      case "line":
        return (
          <Line
            type="monotone"
            dataKey={item.id}
            stroke={item.stroke}
            activeDot={{ r: 8 }}
          />
        );
      case "area":
        return (
          <Area
            type="monotone"
            dataKey={item.id}
            stroke={item.stroke}
            fill={item.stroke}
            activeDot={{ r: 8 }}
          />
        );
      case "bar":
        return (
          <Bar
            type="monotone"
            dataKey={item.id}
            stroke={item.stroke}
            fill={item.stroke}
          />
        );
      case "pie":
        return (
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        );
      case "radar":
        return (
          <Radar
            name={item.id}
            fillOpacity={0.3}
            dataKey={item.id}
            cx="50%"
            cy="50%"
            fill={item.stroke}
            stroke={item.stroke}
          />
        );
      case "radial":
        return (
          //   <RadialBar
          //   name={item.id}
          //   fillOpacity={0.3}
          //   dataKey={item.id}
          //   cx="50%"
          //   cy="50%"
          //   fill={item.stroke}
          //   stroke={item.stroke}
          // />
          <RadialBar
            // minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            // clockWise={true}
            dataKey="uv"
          />
        );
      default:
        <div />;
    }
  };

  const ChartContent = (content: any) => {
    return (
      <>
        {content.xAxis && type === "radar" ? (
          <PolarAngleAxis dataKey={xKey} />
        ) : (
          <XAxis dataKey={xKey} />
        )}
        {content.yAxis && type !== "pie" && type === "radar" ? (
          <PolarRadiusAxis />
        ) : (
          <YAxis />
        )}
        {content.grid && type !== "pie" && type === "radar" ? (
          <PolarGrid />
        ) : (
          <CartesianGrid strokeDasharray="3 3" />
        )}
        {content.tooltip && <Tooltip />}
        {content.legend && <Legend />}

        {/* <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}

        {type === "pie"
          ? GetChartGraphic({ type: "pie" })
          : items.map((item: any) => GetChartGraphic(item))}
      </>
    );
  };

  const GetChart = ({
    width,
    height,
    margin,
    dataKey,
    stroke,
    outerRadius,
  }: GetChartProps) => {
    switch (type) {
      case "line":
        return (
          <LineChart width={width} height={height} data={data} margin={margin}>
            {ChartContent(chartContent)}
          </LineChart>
        );
      case "area":
        return (
          <AreaChart width={width} height={height} data={data} margin={margin}>
            {ChartContent(chartContent)}
          </AreaChart>
        );
      case "bar":
        return (
          <BarChart width={width} height={height} data={data} margin={margin}>
            {ChartContent(chartContent)}
          </BarChart>
        );
      case "pie":
        return (
          <PieChart width={width} height={height}>
            {/* {ChartContent(chartContent)} */}
            <Pie
              dataKey={dataKey}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={outerRadius}
              fill={stroke}
              label
            />

            <Tooltip />
          </PieChart>
        );
      case "radar":
        return (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            {ChartContent(chartContent)}
          </RadarChart>
        );
      case "radial":
        return (
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              label={{ fill: "#222", position: "insideStart" }}
              background
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Tooltip />
          </RadialBarChart>
        );
      default:
        return <div />;
    }
  };

  return (
    <ChartContainer style={{ height: config.height }}>
      <ResponsiveContainer width="100%" height="100%">
        {GetChart(config)}
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const defaultChartContent = {
  xAxis: true,
  yAxis: true,
  grid: true,
  tooltip: true,
  legend: true,
};
