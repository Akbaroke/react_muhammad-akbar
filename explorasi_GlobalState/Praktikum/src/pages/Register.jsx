import { hasLength, isEmail, matchesField, useForm } from '@mantine/form';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { setOrUpdateUsers } from '../redux/slices/usersSlice';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      firstname: hasLength(
        { min: 3 },
        'Fistname must be at least 3 characters.'
      ),
      lastname: hasLength(
        { min: 3 },
        'Lastname must be at least 3 characters.'
      ),
      username: hasLength(
        { min: 3 },
        'Username must be at least 3 characters.'
      ),
      email: isEmail('Email is not valid.'),
      password: (value) =>
        value.length < 8 ? 'Password must be at least 8 characters.' : null,
      confirmPassword: matchesField('password', 'Passwords are not the same'),
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createAccount(form.values);
      navigate('/login');
      form.reset();
    } catch (error) {
      alert(error.message);
    }
  };

  const createAccount = (newAccount) => {
    const account = users?.find(
      (account) => account.email === newAccount.email
    );
    if (account) {
      throw new Error('Email already registered.');
    }
    dispatch(
      setOrUpdateUsers({
        id: uuidv4(),
        ...newAccount,
      })
    );
  };

  return (
    <div className="max-w-[400px] m-auto my-10 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 bg-gray-200">
        <h1 className="text-xl font-bold">Register</h1>
      </div>
      <div className="p-5">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            label="Firstname"
            id="firstname"
            type="text"
            value={form.values.firstname}
            errorLabel={form.errors.firstname}
            onChange={(e) => form.setFieldValue('firstname', e)}
          />
          <Input
            label="Lastname"
            id="lastname"
            type="text"
            value={form.values.lastname}
            errorLabel={form.errors.lastname}
            onChange={(e) => form.setFieldValue('lastname', e)}
          />
          <Input
            label="Username"
            id="username"
            type="text"
            value={form.values.username}
            errorLabel={form.errors.username}
            onChange={(e) => form.setFieldValue('username', e)}
          />
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
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={form.values.confirmPassword}
            errorLabel={form.errors.confirmPassword}
            onChange={(e) => form.setFieldValue('confirmPassword', e)}
          />
          <Button type="submit" isDisabled={!form.isValid()}>
            Register
          </Button>
        </form>
        <div className="flex flex-col justify-center items-center text-[14px] mt-8 mb-4 gap-2">
          <p>Already have an account ?</p>
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
