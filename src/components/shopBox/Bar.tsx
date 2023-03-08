import React from "react";

const Range = (props: any) => {
  const onChange = (e: { target: { value: any } }) => {
    if (e.target.value == 0) return;
    props.updateRange(e.target.value);
    props.itemsAmountOnChange({ currentTarget: { value: e.target.value } });
    // props.setAmountItems(e.target.value)
  };
  return (
    <>
      <input
        id="range"
        type="range"
        //@ts-ignore
        defaultValue={props.rangeVal}
        step="1"
        onChange={onChange}
      />
      {/* <span id="output">{props.rangeVal}</span> */}
    </>
  );
};
export default Range;
