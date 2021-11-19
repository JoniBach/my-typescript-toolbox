import { Card, Skate, Test, Charts } from "src/pages";

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
      component: <Test />,
      link: "/form-builder",
      label: "FormBuilder",
    },
  ];

