import { CustomSelect } from './filter-dropdown.styles';

const Filters = ({ isDark, options }) => {

  const customStyles =  {
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.changeInputText,
    })    
  }

  return (
    <CustomSelect
      classNamePrefix={'Select'}
      isDark={isDark}
      options={options}
      placeholder="Filter by region..."    
      changeInputText={isDark? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} 
      styles={customStyles}
    />
  );
};

export default Filters;
