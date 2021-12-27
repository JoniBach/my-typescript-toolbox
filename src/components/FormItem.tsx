import { useState } from "react";
import { inputTypes } from "src/configs/formBuilder";
import { Input, MultiSelect } from ".";

export const FormItem = (field: any, group: any, updateField: any) => {

    const handleChange = (e: any) => {
        console.log(e)
    }

    return (
      <div style={{ display: "flex" }}>
        <Input
          value={field.key}
          onChange={(e) => updateField(group.key, field.key, e.target.value)}
          label="Field Name"
          type="text"
        />
        <MultiSelect
          width="40%"
          label="Type"
          data={inputTypes}
          value={'test'}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    );
  };