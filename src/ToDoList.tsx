// import React, { useState  } from 'react';

import { useForm } from 'react-hook-form';

/* const ToDoList = () => {
  const [toDo, setTodo] = useState('');
  const [toDoError, setToDoError] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError('');
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError('To do should be longer');
    }
    console.log('submit');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} placeholder='Write a to do' />
        <button>Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
}; */

type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
};

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({ defaultValues: { email: '@naver.com' } });
  const onValid = (data: IFormData) => {
    if (data.password !== data.password1) {
      return setError(
        'password1',
        { message: 'Passwords are not the same' },
        { shouldFocus: true }
      );
    }
    setError('extraError', { message: 'Server offline.' });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'This arae is required',
            validate: {
              noNico: (value) =>
                value.includes('nico') ? 'No nicos allowed' : true,
              noNick: (value) => !value.includes('nick') || 'No nicks allowed',
            },
          })}
          placeholder='First Name'
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: 'This arae is required' })}
          placeholder='Last Name'
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', {
            required: 'This arae is required',
            minLength: {
              value: 5,
              message: 'username is too short',
            },
          })}
          placeholder='User Name'
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', {
            required: 'This arae is required',
            minLength: {
              value: 5,
              message: 'Your password is too short',
            },
          })}
          placeholder='Password'
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register('password1', {
            required: 'This arae is required',
            minLength: {
              value: 5,
              message: 'Your password is too short',
            },
          })}
          placeholder='Password 1'
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
