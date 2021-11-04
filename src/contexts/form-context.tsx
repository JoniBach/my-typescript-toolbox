import React, { FC, useContext, useState } from 'react';

// We define our type for the context properties right here
type ContextProps = { 
    form: any;
    updateForm: any,
};

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
export const FormContext = 
  React.createContext<Partial<ContextProps>>({});

  export const FormProvider: FC = ({ children }) => {
    const [form, setForm] = useState(['hi']);
  
    const updateForm = (props: any) => {
        setForm(props);
    };
  
    return (
      <FormContext.Provider
        value={{
            updateForm,
            form
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
    // clear: () => void;
}
  export const form = ({key, data}: UseFormProps) => { 

    const update = () => {
        console.log(`update key: ${key}, data: ${data}`)
    }

    const create = () => {
        console.log(`create key: ${key}, data: ${data}`)
    }

    const remove = () => {
        console.log(`remove key: ${key}, data: ${data}`)
    }

    const clear = () => {
        console.log(`clear key: ${key}, data: ${data}`)
    }

    // create()
    //  create = () => {}
   

    //   return (
    //       <FormProvider>
    //         {children}
    //       </FormProvider>
    //   )
    //   useContext(FormContext);

    return ({update, create,remove,clear })
    }
  
//   export const UseForm = () =>  useContext(FormContext);

//   export const MapForm = (data: any) => {

//     return (
//         data.map((d: any) => (
//             <Input
//         ))
//     )
//   }