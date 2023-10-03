import { isNotEmpty, useForm } from '@mantine/form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: isNotEmpty('Username is not valid.'),
      password: (value) =>
        value.length < 8 ? 'Password must be at least 8 characters.' : null,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onAuth(form.values);
      form.reset();
      navigate(from, { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  const dummyUser = { username: 'admin', password: 'password123' };
  const onAuth = (req) => {
    const { username, password } = req;
    if (dummyUser.username === username && dummyUser.password === password) {
      setAuth(true);
    } else {
      throw new Error('Invalid username or password.');
    }
  };

  return (
    <div className="max-w-[400px] m-auto my-10 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 bg-gray-200">
        <h1 className="text-xl font-bold">Login</h1>
      </div>
      <div className="p-5">
        <div className="p-5 rounded-xl bg-blue-200 text-[14px] text-gray-500 my-3">
          <p>Username : {dummyUser.username}</p>
          <p>Password : {dummyUser.password}</p>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            label="Username"
            id="username"
            type="text"
            value={form.values.username}
            errorLabel={form.errors.username}
            onChange={(e) => form.setFieldValue('username', e)}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            value={form.values.password}
            errorLabel={form.errors.password}
            onChange={(e) => form.setFieldValue('password', e)}
          />
          <Button type="submit" isDisabled={!form.isValid()}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
