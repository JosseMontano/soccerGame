import { useState } from "react";
import styles from "./css/index.module.css";
import { UseRouter } from "../../hooks/useRouter";

interface Option {
  name: string;
  subOptions: string[];
}

const options: Option[] = [
  {
    name: "Equipos",
    subOptions:[]
    /* subOptions: ["Sub-option 1", "Sub-option 2"], */
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
  const {redirect} = UseRouter();
  const handleOptionClick = (option: string) => {
    setActiveOption(option === activeOption ? null : option);
    redirect('/dashboard/'+ option);
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
