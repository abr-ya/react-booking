import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Heading, Input } from "../../components";

import styles from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { registerUser } from "../../app/user.slice";

interface IFormData {
  email: string;
  password: string;
  username: string;
}

const schema = yup.object({
  email: yup.string().email("Email format is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
  username: yup.string().required("Name is required"),
});

const Register = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { registerErrorMessage } = useAppSelector((state) => state.user);

  const form = useForm<IFormData>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (params: IFormData) => {
    console.log(params);
    dispatch(registerUser(params));
  };

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getProfile());
  //     navigate("/");
  //   }
  // }, [navigate, jwt]);

  return (
    <div className={styles.wrapper}>
      <Heading>Create an account!</Heading>
      {registerErrorMessage && <div className={styles.errorBlock}>{registerErrorMessage}</div>}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="email">email</label>
          <Input id="email" placeholder="Email" {...register("email")} />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="password">password</label>
          <Input id="password" type="password" placeholder="password" {...register("password")} />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Username</label>
          <Input id="name" placeholder="Username" {...register("username")} />
          <p className={styles.error}>{errors.username?.message}</p>
        </div>
        <Button variant="big">Register</Button>
      </form>
      <div className={styles.links}>
        <div>Already have an account?</div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
