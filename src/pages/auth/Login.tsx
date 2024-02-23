import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAppDispatch, useAppSelector } from "../../app/store";
import { login } from "../../app/user.slice";
import { Button, Heading, Input } from "../../components";

import styles from "./auth.module.css";
import { useEffect } from "react";

interface IFormData {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loginErrorMessage, token } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log("Your token is ", token, "go to main page...");
    if (token) navigate("/");
  }, [token]);

  const form = useForm<IFormData>({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormData) => {
    console.log("login", data);
    dispatch(login(data));
  };

  return (
    <div className={styles.wrapper}>
      <Heading>Login to your account!</Heading>
      {loginErrorMessage && <div className={styles.errorBlock}>{loginErrorMessage}</div>}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <Input id="username" placeholder="Username" {...register("username")} />
          <p className={styles.error}>{errors.username?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" placeholder="Password" {...register("password")} />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <Button variant="big">Login</Button>
      </form>
      <div className={styles.links}>
        <div>First time using Booking?</div>
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
