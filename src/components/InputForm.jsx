import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { supportedCoins } from '../utils/coins';

const InputForm = (props) => {
  const formik = useFormik({
    initialValues: {
      addressCount: 0,
      coinType: '',
    },
    onSubmit: (values) => {
      props.onFormSubmit(values);
    },
  });

  return (
    <div>
      <Form inline onSubmit={formik.handleSubmit}>
        <Form.Label htmlFor="coinType" srOnly>
          Coin Type
        </Form.Label>
        <Form.Control
          as="select"
          className="mb-2 mr-sm-2"
          id="coinType"
          name="coinType"
          onChange={formik.handleChange}
          value={formik.values.coinType}
        >
          {' '}
          <option value="" selected>
            -- Coin Type--{' '}
          </option>
          {supportedCoins.map((coin) => {
            const cUpper = coin.charAt(0).toUpperCase() + coin.slice(1);
            return <option value={coin}>{cUpper}</option>;
          })}
        </Form.Control>

        <Form.Label htmlFor="addressCount" srOnly>
          Address Count:
        </Form.Label>
        <Form.Control
          id="addressCount"
          type="number"
          name="addressCount"
          className="mb-2 mr-sm-2"
          onChange={formik.handleChange}
          value={formik.values.addressCount}
        ></Form.Control>

        <Button type="submit" className="mb-2">
          Generate
        </Button>
      </Form>
    </div>
  );
};

export default InputForm;
