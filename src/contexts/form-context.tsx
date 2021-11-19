import { create } from "domain";
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
    if (form.length !== 0) return <Form layoutData={form}/>;
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
    setNewForm([...newForm, { key: key, data: [{ key: "initial text 1", type: 'text' }] }]);
  };

  const addField = (newKey: any, e: any) => {
    e.preventDefault();

    // isolating the group
    const target = newForm.filter((item: any) => item.key === newKey)[0];
    // getting the remaining array
    const arr = newForm.filter((item: any) => item.key !== newKey);
    // fetching the group index
    const targetIndex = newForm.findIndex((item: any) => item.key === newKey);
    // create the new object with a new item in an array
    // const newObj = {
    //   target,
    //   data: [Object.create(target.data), { key: `new text ${target.data.length+1}`, type: 'text' }],

    const newObj = { 
      ...target, 
      data: [
        ...target.data,
        { key: `new text ${ target.data.length+1}`, type: 'text' },]
    };

    // };
    // applying the changes to the orriginal array
    arr.splice(targetIndex, 0, newObj);

console.log(arr)

    // setting state
    setNewForm(arr);


  };

  const updateField = (key: any, fieldKey: any, content: any) => {
    // isolating the group
    const target = newForm.filter((item: any) => item.key === key)[0];
    // getting the remaining array
    const arr = newForm.filter((item: any) => item.key !== key);
    // fetching the group index
    const targetIndex = newForm.findIndex((item: any) => item.key === key);
    // updating the target group
    const newObj = { ...target, key: content };
    // applying the changes to the orriginal array
    arr.splice(targetIndex, 0, newObj);
    // setting state
    setNewForm(arr);
  };

  // console.log(newForm)

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
            {group?.data?.map((field: any, fieldIndex: any) => (
              <>
                <Input
                  value={field.key}
                  onChange={(e) =>
                    updateField(group.key, field.key, e.target.value)
                  }
                  label="Field Name"
                  type="text"
                />
              </>
            ))}
            <Button
              onClick={(e) =>
                addField(group.key, e)
              }
            >
              new field
            </Button>
            <hr />
          </>
        ))}
        {/* <Input onChange={() => setNewForm([])} label='new' value={null} type='string'/> */}
        <Button
          onClick={(e) => addGroup(`new ${(newForm.length + 1).toString()}`, e)}
        >
          new group
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
