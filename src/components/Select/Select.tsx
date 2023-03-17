import Style from "./Select.module.scss";
import { SelectProps } from "../../utils/interface";

const Select: React.FC<SelectProps> = ({
  id,
  options,
  label,
  handleSelectChange,
  value,
}) => {
  return (
    <div className={Style["select-container"]}>
      <label htmlFor={id} aria-labelledby={id}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleSelectChange}
        className={Style["select-container__select"]}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
