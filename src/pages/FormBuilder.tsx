import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Output } from "src/components";
import { formBuilderData } from "src/configs/formBuilder";
import { useForm } from "src/contexts/form-context";

const PageContainer = styled(motion.div)``;

export const FormBuilder = () => {
  const { resetForm, form, generateForm, renderForm, BuildForm, editForm, saveEdit, cancelEdit } = useForm();


  return (
    <PageContainer>
      <Button onClick={() => generateForm(formBuilderData)}>generate</Button>
      <Button onClick={() => resetForm(formBuilderData)}>clear</Button>
      <Button onClick={() => editForm()}>Edit</Button>
      <Button onClick={() => saveEdit()}>Save</Button>
      <Button onClick={() => cancelEdit()}>Cancel</Button>
  {renderForm()}
    </PageContainer>
  );
};
