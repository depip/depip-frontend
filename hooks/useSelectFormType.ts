import { useState } from "react";
type SelectType = "A" | "B" | "C" | null;

const useSelectFormType = (initialValue) => {
  const [selectedType, setSelectedType] = useState<SelectType>(initialValue);

  const selectType = (value: SelectType) => {
    debugger;
    setSelectedType(value);
  };

  return {
    selectedType,
    selectType,
  };
};
export default useSelectFormType;
