import React, { useState, FC, FormEvent, ChangeEvent } from "react";
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../../hooks/hooks";
// import { useDispatch, useSelector } from "react-redux";
import { patchUserData } from "../../../services/actions/auth";
import styles from "./ProfileForm.module.css";
// import { TFormState } from "../../../utils/types";

export const ProfileForm: FC = () => {
  const { user } = useSelector(store => store.authReducer);
  const [form, setForm] = useState<{ [key: string]: string }>({ ...user, password: '******' });
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setIsChanged(true);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        type={'text'}
        onChange={onChange}
        value={form.name}
        name={'name'}
        placeholder="Имя"
        icon="EditIcon"
      />
      <Input
        type={'email'}
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
