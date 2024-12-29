import React, { useState } from "react";

const data = {
  title: "User Registration",
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      validation: {
        required: true,
        minLength: 3,
      },
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter your email",
      validation: {
        required: true,
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      },
    },
    {
      name: "subscribe",
      label: "Subscribe to newsletter",
      type: "checkbox",
    },
    {
      name: "gender",
      label: "Gender",
      type: "dropdown",
      options: ["Male", "Female", "Other"],
      validation: {
        required: true,
      },
    },
  ],
};

const DyanamicForm = () => {
  const [formData, setFormData] = useState(data);

  const handleChange = (field: any, value: any) => {
    setFormData({ ...formData, [field.name]: value });
  };


  console.log(formData);
  return (
    <div>
      {formData?.title}
      {formData?.fields?.map((item) => (
        <div>
          {item.type == "text" && (
            <input
             type="text"
             placeholder={item.placeholder}
             value={formData[item.name] || ""}
             onChange={(e) => handleChange(item, e.target.value)}
           />
          )}
          {item.type === "checkbox" && (
            <input
              type="checkbox"
              checked={!!item.name}
              value={item.name}
              onChange={(e) => handleChange(item, e.target.value)}
            />
          )}
          {item.type == "dropdown" && (
            <select>
              {item.options?.map((item) => (
                <option value={item}> {item}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default DyanamicForm;
