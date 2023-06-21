import React, { FC, useState } from "react";
import useTheme from "../../context/Theme/useTheme";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";
import { ChangeEventHandler } from "react";

interface props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  width?: string;
}
const SearchField: FC<props> = ({ onChange, width }) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState<string>("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  const resetHandler = () => {
    setSearchValue("");
  };
  return (
    <div
      className={style.searchInput}
      style={{
        width: width ? width : "18em",
        border: `1px solid ${theme.palette.secondary}`,
        backgroundColor: "white",
      }}
    >
      <FontAwesomeIcon
        color={theme.palette.textSecondary}
        className={style.searchIcon}
        icon={faMagnifyingGlass}
      />
      <input
        placeholder="Search"
        onChange={onChangeHandler}
        value={searchValue}
      />
      {searchValue !== "" && (
        <FontAwesomeIcon
          color={theme.palette.textSecondary}
          onClick={resetHandler}
          className={style.searchIcon}
          data-testid="reset-icon"
          icon={faXmark}
        />
      )}
    </div>
  );
};
export default SearchField;
