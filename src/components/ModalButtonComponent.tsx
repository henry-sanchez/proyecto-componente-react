import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import './modal.css';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

interface ModalProps {
  keepMounted: boolean;
  value: string;
  open: boolean;
  title: string;
  items: string[];
  onClose: (value?: string) => void;
}

interface ButtonProps {
  primary?: boolean;
  buttonLabel: string;
  items: string[];
  title: string;
  backgroundColor?: string;
}

const ModalComponent = (props: ModalProps) => {
  const { onClose, value: valueProp, open, title, items, ...other } = props;
  console.log('items: ', items);
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {items.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}


const ModalButtonComponent = ({
  primary = false,
  buttonLabel,
  items = ['opcion 1', 'opcion 2'],
  title,
  backgroundColor = 'lightblue',
  ...props
}: ButtonProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = (newValue?: string) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <button
      type="button"
      style={{ backgroundColor }}
      className={['storybook-button', `storybook-button--large`, mode].join(' ')}
      {...props}
      onClick={openModal}
    >
      {buttonLabel}
    </button>
    <ModalComponent
      keepMounted
      open={open}
      title={title}
      items={items}
      onClose={handleClose}
      value={value}
    />
    </div>
  );
}

export default ModalButtonComponent;