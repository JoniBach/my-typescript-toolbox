export const options2 = [
    "bar",
    "line",
    "area",
    "pie",
    "radar",
  ];

  export const config = {
    width: 500,
    height: 500,
    xKey: "test",
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    items: [
      { stroke: "#8884d8", id: "a" },
      { stroke: "#82ca9d", id: "b" },
      { stroke: "#01abdd", id: "c" },
    ],
  };

  export const pieConfig = {
    width: 500,
    height: 500,
    outerRadius: 200,
    dataKey: "value",
    stroke: "#8884d8",
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  };


export const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
export const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export const data = [
  {
    name: "Page A",
    a: 2000,
    b: 2400,
    c: 2400,
  },
  {
    name: "Page B",
    a: 2500,
    b: 1398,
    c: 2210,
  },
  {
    name: "Page C",
    a: 2000,
    b: 3800,
    c: 2290,
  },
  {
    name: "Page D",
    a: 2780,
    b: 3908,
    c: 2000,
  },
  {
    name: "Page E",
    a: 1890,
    b: 4800,
    c: 2181,
  },
  {
    name: "Page F",
    a: 2390,
    b: 3800,
    c: 2500,
  },
  {
    name: "Page G",
    a: 3490,
    b: 4300,
    c: 2100,
  },
];

export const data03 = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: -15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: -8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: -2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];
