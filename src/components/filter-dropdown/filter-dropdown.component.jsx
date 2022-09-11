import { CustomSelect } from './filter-dropdown.styles';

const Filters = ({ isDark, options, onChange, value }) => {

  const customStyles =  {
    option: (provided, state) => ({
      ...provided,
      color: state.selectProps.changeInputText,
      fontSize: '1.5rem',
      fontWeight:' 600',
      backgroundColor: state.isSelected? "orange": null,
      border: state.isFocused? '1px solid orange': null,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.changeInputText,
    })    
  }

  return (
    <CustomSelect
      classNamePrefix={'Select'}
      value={value}
      onChange={onChange}     
      options={options}
      placeholder="Filter by region..."    
      changeInputText={isDark? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} 
      styles={customStyles}
    />
  );
};

export default Filters;
