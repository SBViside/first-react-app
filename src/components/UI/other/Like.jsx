import React from "react";
import cls from "./Like.module.css";

export function Like({ checked, setLike, ...props }) {
  return (
    <div className={checked ? cls.block + " " + cls.active : cls.block}>
      <div
        onClick={setLike}
        className={checked ? cls.content + " " + cls.active : cls.content}
      >
        <div className={checked ? cls.picture + " " + cls.active : cls.picture}>
          <svg
            style={checked ? { fill: "#ff4848" } : { fill: "gray" }}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                checked
                  ? "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  : "M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98l-19.7 20.27l-19.7-20.27C208.6 47.4 170.8 32 133.3 32C103.1 32 73.23 41.93 49.04 62.86c-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7C239.4 476.7 247.6 480 255.9 480c8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1l-181.6 187.8L74.34 237.1C42.1 203.8 34.46 138.1 80.46 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z"
              }
            />
          </svg>
        </div>
        <p className={checked ? cls.text + " " + cls.active : cls.text}>
          Нравится
        </p>
      </div>
    </div>
  );
}
