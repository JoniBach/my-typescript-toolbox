import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Output } from "src/components";
import { Chart } from "src/components/Chart";
import { config, data, data01, pieConfig } from "src/configs/charts";

const PageContainer = styled(motion.div)``;

interface Props {
  height: number;
  shoe: number;
}

const options = [
  "bar",
  "line",
  "area",
  "pie",
  "radar",
  // "radial"
];

export const Charts = () => {
  const [chartType, setChartType] = useState<string>("line");

  return (
    <PageContainer>
      {chartType === "pie" ? (
        <Chart config={pieConfig} data={data01} type={chartType} />
      ) : (
        <Chart config={config} data={data} type={chartType} />
      )}

      <div style={{ display: "flex" }}>
        {options.map((item: string) => (
          <Button onClick={() => setChartType(item)}>{item}</Button>
        ))}
      </div>
    </PageContainer>
  );
};
