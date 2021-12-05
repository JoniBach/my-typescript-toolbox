import { Card, Skate, Test, Charts, FormBuilder } from "src/pages";
import React from 'react';
import { MultiPage, Template } from "src/components";
import { formBuilderData } from "./formBuilder";

export const playground = [
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
  {
    component: <MultiPage data={formBuilderData} />,
    link: "/pages",
    label: "Pages",
  },
];
