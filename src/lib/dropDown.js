import * as React from 'react';

const dropDown = ({ productData }) => {
  const options = productData;
  const [value, setValue] = React.useState({
    optionType: "",
    optionAmt: ""
  })


  const handleChange = (event) => {
    setValue({
      optionType: event.target.options[event.target.selectedIndex].attributes.variantname.value,
      optionAmt: event.target.value
    })
  };
  return (
    <div>
      <Dropdown
        label=""
        options={options}
        variantname={value.optionType}
        value={value.optionAmt}
        onChange={handleChange}
      />
      <p className="product-price"><span>{value.optionType}</span> {value.optionAmt}</p>
    </div>
  );
};

const Dropdown = ({ label, value, variantname, options, onChange }) => {
  if (typeof options === 'undefined') {
    return "" ;
  } else {
    return (
      <label>
        {label}
        <select value={value} variantname={variantname} onChange={onChange}>
          {options.map((option, i) => (
            <option value={option.price} variantname={option.variantName} key={i}>{option.variantName}</option>
          ))}
        </select>
      </label>
    );
  }
  
};

export default dropDown;
