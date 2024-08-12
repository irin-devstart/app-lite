import React from "react";
import { Button, TextField } from "..";
import { UseFormReturn } from "react-hook-form";
interface LoginFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: UseFormReturn<UserLogin, any, undefined>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const LoginForm = ({ state, onSubmit }: LoginFormProps) => {
  const {
    register,
    formState: { errors },
  } = state;

  return (
    <form className="flex flex-col gap-3 p-10" onSubmit={onSubmit}>
      <TextField
        {...register("email")}
        label="Email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("password")}
        label="Password"
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <div className="flex justify-center mt-3">
        <Button variant="contained" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
