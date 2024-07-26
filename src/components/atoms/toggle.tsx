import React, { ReactNode, useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ToggleProps {
  IconBefore?: ReactNode;
  IconAfter?: ReactNode;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ IconBefore, IconAfter, onToggle }) => {

  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <Form className='toggle__form' onClick={toggleSwitch}>
    {IconBefore && <span className='toggle__icon--left'>{IconBefore}</span>}
        <Form.Check 
            type="switch"
            id="custom-switch"
            label=""
            onChange={toggleSwitch}
            checked={isChecked}
        />
    {IconAfter && <span className='toggle__icon--right'>{IconAfter}</span>}
    </Form>
    );
  };
  
  export default Toggle;
  