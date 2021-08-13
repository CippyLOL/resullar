import { createContext } from "react";

// for creating global states in the parent component
//  in this case, useform page/ component
const FormContext = createContext({});

export default FormContext;

export const { Provider, Consumer } = FormContext;