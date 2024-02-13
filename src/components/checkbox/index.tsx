import { useState } from "react";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

interface CheckboxProps {
  isChecked?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  onCheckChange,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handlePress = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckChange?.(newChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <S.CheckboxContainer>
        <S.CheckboxSquare checked={checked}>
          {checked && <S.CheckboxInner />}
        </S.CheckboxSquare>
      </S.CheckboxContainer>
    </TouchableOpacity>
  );
};
