function InputField({
  type = "text",
  label,
  name,
  placeholder,
  customStyles,
  required = false,
  onChange,
}) {
  const labelId = label.toLowerCase().split(" ").join("");
  const inputType = (type) => {
    switch (type) {
      case "text":
      case "password":
      case "email":
      case "search":
      case "textbox":
      case "textarea":
        return (
          <TextBox
            type={type}
            name={name}
            placeholder={placeholder}
            labelId={labelId}
            customStyles={customStyles}
            required={required}
            onChange={onChange}
          />
        );

      case "radio":
      case "checkbox":
        return (
          <SelectBox
            type={type}
            name={name}
            placeholder={placeholder}
            labelId={labelId}
            customStyles={customStyles}
            required={required}
            onChange={onChange}
          />
        );
    }
  };

  return (
    <div className="input_group input_container">
      <label htmlFor={labelId} className="">
        {label} {required ? <span>*</span> : ""}
      </label>

      {inputType(type)}
    </div>
  );
}

function TextBox({
  type,
  name,
  placeholder,
  labelId,
  customStyles,
  required,
  onChange,
}) {
  switch (type) {
    case "text":
    case "password":
    case "email":
    case "search":
      return (
        <input
          type={type}
          id={labelId}
          name={name}
          placeholder={placeholder}
          style={customStyles}
          required={required}
          autoComplete={name}
          onChange={onChange}
        />
      );
    case "textbox":
    case "textarea":
      return (
        <textarea
          id={labelId}
          name={name}
          cols="30"
          rows="10"
          placeholder={placeholder}
          required={required}
          style={customStyles}
          onChange={onChange}
        ></textarea>
      );
  }
}

function SelectBox({
  type,
  name,
  placeholder,
  labelId,
  customStyles,
  required,
  onChange,
}) {
  switch (type) {
    case "radio":
      return (
        <div style={customStyles}>
          <input
            type="radio"
            name={name}
            id={labelId}
            required={required}
            onChange={onChange}
          />{" "}
          {placeholder}
        </div>
      );
    case "checkbox":
      return (
        <div style={customStyles}>
          <input
            type="checkbox"
            name={name}
            id={labelId}
            required={required}
            onChange={onChange}
          />{" "}
          {placeholder}
        </div>
      );
  }
}
export default InputField;
