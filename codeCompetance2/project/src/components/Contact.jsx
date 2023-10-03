import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';

export default function Contact() {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    },
    validate: {
      first_name: isNotEmpty('Please enter a valid First Name.'),
      last_name: isNotEmpty('Please enter a valid Last Name.'),
      email: isEmail('Please enter a valid Email Address.'),
      message: isNotEmpty('Please enter a valid Message.'),
    },
  });

  const handleSubmit = () => {
    const alertMessage = `First Name: ${form.values.first_name}\nLast Name: ${form.values.last_name}\nEmail: ${form.values.email}\nMessage: ${form.values.message}`;
    alert(alertMessage);
    form.reset();
  };

  return (
    <section id="contact" className="flex p-10 gap-5 justify-around">
      <div className="p-10 flex flex-col gap-4">
        <h1 className="font-bold text-[24px]">Contact us</h1>
        <p className="text-[14px] max-w-[300px]">
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the{' '}
          <b className="underline font-normal text-blue-700">
            department email
          </b>{' '}
          youd like to contact below.
        </p>
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="">
          <div className="flex gap-2">
            <Input
              label="Firsh Name"
              id="first_name"
              type="text"
              value={form.values.first_name}
              errorLabel={form.errors.first_name}
              onChange={(e) => form.setFieldValue('first_name', e)}
            />
            <Input
              label="Last Name"
              id="last_name"
              type="text"
              value={form.values.last_name}
              errorLabel={form.errors.last_name}
              onChange={(e) => form.setFieldValue('last_name', e)}
            />
          </div>
          <Input
            label="Email"
            id="email"
            type="email"
            value={form.values.email}
            errorLabel={form.errors.email}
            onChange={(e) => form.setFieldValue('email', e)}
          />
          <Textarea
            label="Message"
            id="message"
            value={form.values.message}
            errorLabel={form.errors.message}
            onChange={(e) => form.setFieldValue('message', e)}
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-600 mt-4"
          isDisabled={!form.isValid()}>
          Submit
        </Button>
      </form>
    </section>
  );
}
