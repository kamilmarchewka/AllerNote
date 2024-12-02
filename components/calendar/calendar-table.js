import React from "react";

export default function calcTable(year, month) {
    let arr = new Array(6);

    let startDayInWeek = new Date(year, month, 1).getDay();
    let monthLong = new Date(year, month + 1, 0).getDate();

    let counter = 1;
    let startCount = false;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(7);
      for (let j = 0; j < arr[i].length; j++) {
        if (i === 0 && j === startDayInWeek) {
          startCount = true;
        }

        if (startCount) {
          arr[i][j] = counter;
          counter++;
          if (counter > monthLong + 1) {
            arr[i][j] = "";
          }
        } else {
          arr[i][j] = "";
        }
      }
    }
    return arr;
  }