import { Input, InputProps } from 'react-daisyui';

interface InputWithLabelProps extends InputProps {
  label: string | React.ReactNode;
  error?: string;
  descriptionText?: string;
}

const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, error, descriptionText, ...rest } = props;

  const classes = ['text-sm'];

  if (error) {
    classes.push('input-error');
  }

  return (
    <div className="form-control w-full">
      {typeof label === 'string' ? (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      ) : (
        label
      )}
      <Input className={classes.join(' ')} {...rest} />
      {(error || descriptionText) && (
        <label className="label">
          <span className={`label-text-alt ${error ? 'text-red-500' : ''}`}>
            {error || descriptionText}
          </span>
        </label>
      )}
    </div>
  );
};

export default InputWithLabel;
