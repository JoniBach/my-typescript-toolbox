import { useEffect } from "react";
import { FormProvider } from "./form-context";
type AppProviderTypes = {
  children: any;
};

const Providers = ({ children }: AppProviderTypes) => {

  return (
    <FormProvider>
        {children}
    </FormProvider>
  );
};

export default Providers;
