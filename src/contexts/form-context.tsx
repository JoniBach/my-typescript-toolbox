import { create } from "domain";
import React, { FC, useContext, useState } from "react";
import { Button, Form, Input, MultiPage, MultiSelect, SingleSelect } from "src/components";
import { inputTypes } from "src/configs/formBuilder";
// import { v4 as uuid } from 'uuid';

type ContextProps = {
  form: any;
  updateForm: any;
  generateForm: any;
  renderForm: any;
  resetForm: any;
  BuildForm: any;
  saveEdit: any;
  editForm: any;
  cancelEdit: any;
};

export const FormContext = React.createContext<Partial<ContextProps>>({});

export const FormProvider: FC = ({ children }) => {
  const [form, setForm] = useState([]);
  const [prvForm, setPrvForm] = useState([]);
  const [newForm, setNewForm] = useState(["test"] as any);
  const [edit, setEdit] = useState(false);

  const updateForm = (props: any) => {
    setForm(props);
  };

  const generateForm = (props: any) => {
    setForm(props);
  };

  const renderForm = () => {
    if (edit) return BuildForm();
    if (form.length !== 0) return <MultiPage data={form} actions />;
  };

  const resetForm = () => {
    if (form.length !== 0) {
      setForm([]);
    }
  };

  const editForm = () => {
    setPrvForm(form);
    setNewForm(form);
    setEdit(true);
  };

  const saveEdit = () => {
    setForm(newForm);
    setEdit(false);
  };

  const cancelEdit = () => {
    setPrvForm(form);
    setNewForm(form);
    setForm(prvForm);
    setEdit(false);
  };

  // const addField = () => {};

  const updateGroup = (key: any, content: any) => {
    const target = newForm.filter((item: any) => item.key === key)[0];
    const arr = newForm.filter((item: any) => item.key !== key);
    const targetIndex = newForm.findIndex((item: any) => item.key === key);
    const newObj = { ...target, key: content };
    arr.splice(targetIndex, 0, newObj);
    setNewForm(arr);
  };

  const addGroup = (key: any, e: any) => {
    e.preventDefault();
    setNewForm([
      ...newForm,
      { key: key, data: [{ key: "initial text 1", type: "text" }] },
    ]);
  };

  const addField = (newKey: any, e: any) => {
    e.preventDefault();
    const target = newForm.filter((item: any) => item.key === newKey)[0];
    const arr = newForm.filter((item: any) => item.key !== newKey);
    const targetIndex = newForm.findIndex((item: any) => item.key === newKey);
    const newObj = {
      ...target,
      data: [
        ...target.data,
        { key: `new text ${target.data.length + 1}`, type: "text" },
      ],
    };
    arr.splice(targetIndex, 0, newObj);
    setNewForm(arr);
  };

  const updateField = (key: any, fieldKey: any, content: any, inputType?: any) => {
    const target = newForm.filter((item: any) => item.key === key)[0];
    const targetField = target.data.filter(
      (item: any) => item.key === fieldKey
    )[0];
    const newTargetField = inputType ? { key: targetField.key, type: inputType } : { key: content, type: targetField.type };
    const fieldIndex = target.data.findIndex(
      (item: any) => item.key === fieldKey
    );
    const targetData = target.data;
    const arr = targetData.filter((item: any) => item.key !== fieldKey);
    arr.splice(fieldIndex, 0, newTargetField);
    const newTarget = { key: target.key, data: arr };
    const newArr = newForm.filter((item: any) => item.key !== key);
    const targetIndex = newForm.findIndex((item: any) => item.key === key);
    newArr.splice(targetIndex, 0, newTarget);
    setNewForm(newArr);
  };

  const FormItem = (field: any, group: any, updateField: any) => {
    return (
      <div style={{ display: "flex" }}>
        <Input
          value={field.key}
          onChange={(e) => updateField(group.key, field.key, e.target.value)}
          label="Field Name"
          type="text"
        />
        <SingleSelect
          width="40%"
          label="Type"
          data={inputTypes}
          value={field.type}
          onChange={(e: any) => updateField(group.key, field.key, '', e)}
        />
      </div>
    );
  };

  const handleAddField = (key: any, e: any) => {
    e.preventDefault();
    addField(key, e);
  };

  const BuildForm = () => {
    return (
      <div>
        {newForm?.map((group: any, index: any) => (
          <>
            <Input
              value={group.key}
              onChange={(e) => updateGroup(group.key, e.target.value)}
              label="Group Name"
              type="text"
            />
            {group?.data?.map((field: any, fieldIndex: any) =>
              FormItem(field, group, updateField)
            )}
            <Button onClick={(e: any) => handleAddField(group.key, e)}>
              new field
            </Button>
            <hr />
          </>
        ))}
        {/* <Input onChange={() => setNewForm([])} label='new' value={null} type='string'/> */}
        <Button
          onClick={(e: any) =>
            addGroup(`new ${(newForm.length + 1).toString()}`, e)
          }
        >
          new group
        </Button>
        {/* <MultiSelect
          width="40%"
          label="Type"
          data={inputTypes}
          value={field.type}
          onChange={(e: any) => updateField(group.key, field.key, '', e)}
        /> */}
      </div>
    );
  };

  return (
    <FormContext.Provider
      value={{
        updateForm,
        form,
        generateForm,
        renderForm,
        resetForm,
        BuildForm,
        editForm,
        saveEdit,
        cancelEdit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

type UseFormProps = {
  key: string;
  data: any;
  // update: (key: string, data: any) => void;
  // create: (key: string, data: any) => void;
  // remove: (key: string) => void;
  // reset: () => void;
};

export const useForm = () => useContext(FormContext);
