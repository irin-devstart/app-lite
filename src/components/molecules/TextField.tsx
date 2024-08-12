import React, { ReactNode } from "react";
import { Input, Label, Typography } from "../atoms";
import { InputProps } from "../atoms/Input";
interface TextFieldProps extends InputProps {
  label?: string | ReactNode;
  required?: boolean;
  helperText?: string | ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { error, label, helperText, required, ...args } = props;
    return (
      <div>
        <Label required={required}>{label}</Label>
        <Input ref={ref} {...args} />
        {helperText && (
          <Typography color={error ? "error" : "default"}>
            {helperText}
          </Typography>
        )}
      </div>
    );
  }
);

export default TextField;
