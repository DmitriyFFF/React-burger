import React, { FC, FormEvent } from "react";
import {Link, useNavigate} from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { postForgotPassword } from "../../services/actions/forgot-password";
import { useForm } from "../../hooks/useForm";

export const ForgotPassword: FC = () => {
  const { values, handleChange } = useForm({ email: '' });
  const { forgotPasswordFailed } = useSelector(store => store.forgotPasswordReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postForgotPassword(values.email));
    if(!forgotPasswordFailed) {
      navigate({pathname:'/reset-password'})
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={`${styles.heading} text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          placeholder="Укажите e-mail"
          extraClass="mt-6"
          required
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="submit">Восстановить</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Вспомнили пароль? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
        </p>
      </div>
    </section>
  );
};
