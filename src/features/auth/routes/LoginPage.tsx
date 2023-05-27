import { Button, TextInput } from '@mantine/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../common/contexts/auth.context';
import { useNavigate } from 'react-router-dom';
import { Pages } from '../../../routes';

type LoginDto = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<LoginDto>({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      }),
      onSubmit: (values) => {
        console.log(values);
        login();
        navigate(Pages.Dashboard);
      },
    });

  return (
    <div className="grid min-h-screen place-items-center bg-blue-50 px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded bg-white p-16 md:max-w-[400px]"
      >
        <header>
          <h1>Login</h1>
        </header>

        <div className="space-y-6">
          <TextInput
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            type="email"
          />

          <TextInput
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />
          <div className="text-right">
            <a className="cursor-pointer text-sm underline">Forgot password?</a>
          </div>
          <Button fullWidth type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
