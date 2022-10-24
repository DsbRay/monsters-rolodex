import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangehandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  onChangehandler,
  placeholder,
  className,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangehandler}
  />
);

export default SearchBox;
