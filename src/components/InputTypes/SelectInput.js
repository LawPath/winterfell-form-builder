import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ displayValue, options, name, classes, required, onSelect }) => {
  const [value, setValue] = useState(displayValue);

  useEffect(() => {
    setValue(displayValue);
  }, [displayValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onSelect(e.target.value, e);
  };

  return (
    <select
      name={name}
      className={classes.select}
      value={value}
      required={required ? 'required' : undefined}
      onChange={handleChange}
      onSelect={onSelect}
      autoComplete={name}
    >
      <option value="">&nbsp;</option>
      {options &&
        options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.text}
          </option>
        ))}
    </select>
  );
};

SelectInput.propTypes = {
  displayValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  classes: PropTypes.object,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  required: PropTypes.bool,
};

SelectInput.defaultProps = {
  classes: {
    select: 'form-control',
  },
  id: '',
  name: '',
  value: '',
  options: [],
  onChange: () => {},
  onSelect: () => {},
  required: false,
  displayValue: '',
};

export default SelectInput;
