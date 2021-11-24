import { Card, Skate, Test, Charts, FormBuilder } from "src/pages";

export const routes = [
  {
    component: <Skate />,
    link: "/skate",
    label: "Skate",
  },
  {
    component: <Test />,
    link: "/test",
    label: "Test",
  },
  {
    component: <Card />,
    link: "/card",
    label: "Card",
  },
  {
    component: <Charts />,
    link: "/charts",
    label: "Charts",
  },
  {
    component: <FormBuilder />,
    link: "/form-builder",
    label: "Form Builder",
  },
];
