import Select from 'react-select';


function SelectMenu(props) {

  const styles = {
    control: (styles, {data, isDisabled, isFocused, isSelected}) => ({
      ...styles,
      width: '415px',
      height: '60px',
      borderRadius: '15px',
      backgroundColor: '#fff',
      paddingLeft: '5px',
      margin: '10px',
      border: 'none',
      fontSize: '18px',
      fontFamily: 'roboto',
      fontWeight: '400',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
      return { 
        ...styles,
        color: 'black',
      }
    },
    menu: (styles, {data, isDisabled, isFocused, isSelected}) => ({
      ...styles,
      width: '440px',
      backgroundColor: '#fff',
      border: 'none',
      fontSize: '18px',
      fontFamily: 'roboto',
      fontWeight: '400',
    }),
  };

  const handleChange = (selectedOption) => {
   console.log("handleChange", selectedOption)
  };

  return (
    <div className="select-style">
      <Select
        name="select"
        placeholder={props.placeholder}
        options={props.options}
        onChange={handleChange}
        styles={styles}
      />
    </div>
  );
}

export default SelectMenu