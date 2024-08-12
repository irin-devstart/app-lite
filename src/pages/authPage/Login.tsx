import React from "react";
import { AuthTemplate, LoginForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AuthSchema } from "../../validations";
import { findOne } from "../../services/api/Auth";
import { WebRoute } from "../../common";
import useLocalStorage from "../../hooks/useLocalStorage";
import { login as loginStore } from "../../store";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const storage = useLocalStorage();
  const dispatch = useDispatch();
  const state = useForm<UserLogin>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      remember_me: 1,
    },
  });

  const login = useMutation({
    mutationFn: findOne,
    onSuccess: (data) => {
      storage.setItem("token", data.data.access_token);
      dispatch(loginStore(data.user.name));
      navigate(WebRoute.home);
    },
    onError: () => {
      state.setError("password", { message: "Email atau password salah" });
    },
  });

  console.log("Error", state.formState.errors);
  console.log("value", state.getValues());

  const onSubmit = state.handleSubmit((data, event) => {
    event?.preventDefault();
    login.mutate(data);
  });

  return (
    <AuthTemplate title="Login">
      <LoginForm state={state} onSubmit={onSubmit} />
    </AuthTemplate>
  );
};

export default Login;
