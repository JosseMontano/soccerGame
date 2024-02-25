import { useState } from "react";
import styles from "./css/index.module.css";

interface Option {
  name: string;
  subOptions: string[];
}

const options: Option[] = [
  {
    name: "Option 1",
    subOptions: ["Sub-option 1", "Sub-option 2"],
  },
  {
    name: "Option 2",
    subOptions: ["Sub-option 1", "Sub-option 2"],
  },
  // Add more options here...
];

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setActiveOption(option === activeOption ? null : option);
  };

  return (
    <>
      <div className={styles.sidebar}>
        {options.map((option, index) => (
          <div key={index}>
            <div
              className={styles.option}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.name}
            </div>
            {activeOption === option.name &&
              option.subOptions.map((subOption, index) => (
                <div key={index} className={styles.subOption}>
                  {subOption}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Sidebar;
