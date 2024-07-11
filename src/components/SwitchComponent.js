
import React, { useState } from 'react';
import Switch from 'react-switch';

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      className="react-switch"
      id="pricingSwitch"
    />
  );
};

export default SwitchComponent;
