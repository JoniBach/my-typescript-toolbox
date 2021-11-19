import React, { FC, useContext, useState } from "react";
import { Button, Form, Input } from "src/components";

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
    if (form.length !== 0) return <Form layoutData={form} />;
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

  const addField = () => {};

  const updateGroup = (key: any, content: any) => {
    const final = []
    // what we need to change
    const target = newForm.filter((item: any) => item.key === key)[0];
    // the rest of the data
    const arr = newForm.filter((item: any) => item.key !== key);
    // where it originally was
    const targetIndex = newForm.findIndex((item: any) => item.key === key);
    // a new object with the updated value
    const newObj = {...target, key: content}
    // an array with the new object
    arr.splice(targetIndex, 0, newObj)
    setNewForm(arr)
  };

  const addGroup = (key: any, e: any) => {
    e.preventDefault()
    setNewForm([...newForm, { key: key, data: [] }]);
  };

  const BuildForm = () => {
    return (
      <div>
        {/* <Form layoutData={form} /> */}
        {newForm?.map((group: any, index: any) => (
          <>
            <Input
              value={group.key}
              onChange={(e) => updateGroup(group.key, e.target.value)}
              label="Group Name"
              type="text"
            />
          </>
        ))}
        {/* <Input onChange={() => setNewForm([])} label='new' value={null} type='string'/> */}
        <Button
          onClick={(e) => addGroup(`new ${(newForm.length + 1).toString()}`, e)}
        >
          new
        </Button>
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
