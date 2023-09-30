import { isEmail, useForm } from '@mantine/form';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/slices/authSlice';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location?.state?.from?.pathname || '/';
  const { users } = useSelector((state) => state.users);

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Email is not valid.'),
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

  const onAuth = (req) => {
    const { email, password } = req;
    const account = users?.find((account) => account.email === email);
    if (account) {
      if (account.password === password) {
        dispatch(
          setAuth({
            id: account.id,
            username: account.username,
            email: account.email,
          })
        );
      } else {
        throw new Error('Password wrong.');
      }
    } else {
      throw new Error('Email not registered.');
    }
  };

  return (
    <div className="max-w-[400px] m-auto my-10 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 bg-gray-200">
        <h1 className="text-xl font-bold">Login</h1>
      </div>
      <div className="p-5">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            label="Email"
            id="email"
            type="email"
            value={form.values.email}
            errorLabel={form.errors.email}
            onChange={(e) => form.setFieldValue('email', e)}
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
        <div className="flex flex-col justify-center items-center text-[14px] mt-8 mb-4 gap-2">
          <p>Dont have an account ?</p>
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
