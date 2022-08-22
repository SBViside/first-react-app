import React, { useRef } from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function Filter({ filter, setFilter, openModal, ...props }) {
  const options = [
    { value: "title", key: "title", name: "по заголовку" },
    { value: "body", key: "body", name: "по содержимому" },
  ];

  const inputRef = useRef();
  const selectRef = useRef();

  const resetFilter = () => {
    setFilter({ sort: "", query: "" });
    inputRef.current.value = "";
    selectRef.current.value = "DEFAULT";
  };

  return (
    <div className="filter">
      <MyInput
        ref={inputRef}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <div className="filter__btns">
        <MySelect
          ref={selectRef}
          value=""
          onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
          title="Сортировать"
          options={options}
        />
        <div>
          <MyButton onClick={resetFilter}>Сбросить</MyButton>
          <MyButton onClick={() => openModal(true)}>Написать пост</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Filter;
