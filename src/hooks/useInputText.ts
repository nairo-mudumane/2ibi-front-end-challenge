import React from "react";

export function useInputText<T>(initialValues: T) {
  const [values, setValues] = React.useState<T>(initialValues || ({} as T));

  function handleInputChange(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.currentTarget;
    return setValues({ ...values, [name]: value });
  }

  function clear() {
    return setValues(initialValues);
  }

  return { ...values, handleInputChange, clear };
}
