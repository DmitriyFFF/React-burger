import React, { useState } from "react";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { patchUserData } from "../../../services/actions/auth";
import styles from "./ProfileForm.module.css";

export const ProfileForm = () => {
  const { user } = useSelector(state => state.authReducer);
  const [form, setForm] = useState({ ...user, password: '******' });
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setIsChanged(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(patchUserData(form.name, form.email));
    setIsChanged(false);
  };

  const cancelForm = () => {
    setForm({ ...user });
    setIsChanged(false);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        value={form.name}
        name={'name'}
        placeholder="Имя"
        icon="EditIcon"
      />
      <EmailInput
        onChange={onChange}
        value={form.email}
        name={'email'}
        placeholder="Логин"
        extraClass="mt-6"
        icon="EditIcon"
      />
      <PasswordInput
        onChange={onChange}
        value={form.password}
        name={'password'}
        placeholder="Пароль"
        extraClass="mt-6"
        icon="EditIcon"
      />
      {isChanged && (
        <div className={styles.buttonContainer}>
          <Button extraClass="mt-6" type="secondary" size="medium" htmlType="button" onClick={() => cancelForm()}>Отмена</Button>
          <Button extraClass="mt-6" type="primary" size="medium" htmlType="submit">Сохранить</Button>
        </div>
        )
      }
    </form>
  )
}
