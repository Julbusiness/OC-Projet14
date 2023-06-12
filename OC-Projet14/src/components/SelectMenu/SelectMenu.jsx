import React, { useState } from 'react';

import Select from 'react-select';
// import { colourOptions } from './docs/data';

function SelectMenu(props) {

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder={props.placeholder}
        name="state"
        options={props.options}
      />
    </>
  );
}

export default SelectMenu