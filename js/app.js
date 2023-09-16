let addTitle = document.querySelector(".addTitle");
let addDesc = document.querySelector(".addDesc");
let addItem = document.querySelector(".addItem");
let errOne = document.querySelector(".errOne");
let errTwo = document.querySelector(".errTwo");
let list = document.querySelector(".list");
let storeArr = [];
let count = 0;

addItem.addEventListener("click", function () {
  let titleValue = addTitle.value;
  let titleSpecialChar = titleValue.match(/[\W]/g);
  let descSpecialChar = addDesc.value.match(/[\W]/g);
  let alphabetTitle = titleValue.charAt(0).match(/[A-z]/g);
  let alphabetDesc = addDesc.value.charAt(0).match(/[A-z]/g);
  let titleSpace = titleValue.match(/[\s]/g);
  let descSpace = addDesc.value.match(/[\s]/g);
  let titleDigit = titleValue.match(/[\d]/g);
  let descDigit = addDesc.value.match(/[\d]/g);
  let c = [];
  let d = [];
  let specialChar = [];
  let specialCharTwo = [];
  let obj = {};

  if (titleSpecialChar) {
    let count = 0;
    titleSpecialChar.map((el) => {
      if (el === " ") {
      } else {
        specialChar[count] = el;
        count++;
      }
    });
  }

  if (descSpecialChar) {
    let count = 0;
    descSpecialChar.map((el) => {
      if (el === " ") {
      } else {
        specialCharTwo[count] = el;
        count++;
      }
    });
  }

  if (titleSpace) {
    let array = titleValue.split("");
    array.map((el, index) => {
      if (el === " ") {
        let a = isNaN(titleValue.charAt(index + 1) - 1);
        let b = isNaN(titleValue.charAt(index - 1) - 1);
        if (a && b) {
          c.push("ok");
        } else {
          c.push("err");
        }
      }
    });
  }

  if (descSpace) {
    let array = addDesc.value.split("");
    array.map((el, index) => {
      if (el === " ") {
        let a = isNaN(addDesc.value.charAt(index + 1) - 1);
        let b = isNaN(addDesc.value.charAt(index - 1) - 1);
        if (a && b) {
          d.push("ok");
        } else {
          d.push("err");
        }
      }
    });
  }

  if (
    addTitle.value === "" ||
    titleDigit !== null ||
    specialChar.length > 0 ||
    !c.every((acd) => acd === "ok") ||
    alphabetTitle.includes("_")
  ) {
    errOne.innerHTML = "Error: Give a valid Title !";
  } else {
    errOne.innerHTML = "";
    obj.one = "true";
  }

  if (
    addDesc.value === "" ||
    descDigit !== null ||
    specialCharTwo.length > 0 ||
    !d.every((acd) => acd === "ok") ||
    alphabetDesc.includes("_")
  ) {
    errTwo.innerHTML = "Error: Give a valid Description !";
  } else {
    errTwo.innerHTML = "";
    obj.two = "true";
  }

  if (obj.one === "true" && obj.two === "true") {
    storeArr.push({ title: addTitle.value, desc: addDesc.value });
    insertValue();
  }
});

function insertValue() {
  addTitle.value = "";
  addDesc.value = "";
  list.innerHTML = "";
  storeArr.map((item) => {
    list.innerHTML += `<li class="list-group-item"><h2 class='content'>${item.title}</h2><p>${item.desc}</p> <button class='edit btn btn-success btn-sm'>Edit</button> <button class='delete btn btn-danger btn-sm'>Delete</button><button class='share btn btn-info btn-sm'>Share</button></li>`;
  });

  let allDel = document.querySelectorAll(".delete");
  let delArr = Array.from(allDel);
  let allEdit = document.querySelectorAll(".edit");
  let editArr = Array.from(allEdit);
  let allShare = document.querySelectorAll(".share");
  let shareArr = Array.from(allShare);

  delArr.map((item, index) => {
    item.addEventListener("click", function () {
      storeArr.splice(index, 1);
      delArr.splice(index, 1);
      insertValue();
    });
  });

// setTimeOut(()=>{
//     delArr.map((item, index) => {
//     item.addEventListener("click", function () {
//       storeArr.splice(index, 1);
//       delArr.splice(index, 1);
//       insertValue();
//     });
//   });
// }, 120*1000);

  

  shareArr.map((item, index) => {
    item.addEventListener("click", function () {
      let desc =
        item.previousElementSibling.previousElementSibling
          .previousElementSibling.innerHTML;
      let title =
        item.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.innerHTML;

      storeArr.push({ title: title, desc: desc });
      insertValue();
    });
  });

  editArr.map((item, el) => {
    item.addEventListener("click", function () {
      count++;

      if (count > 1) {
        insertValue();
        insertList(el);
      } else {
        item.parentNode.outerHTML = `<li class="list-group-item"><h2 class='content'>${storeArr[el].title}</h2><input type="text" value='${storeArr[el].desc}' class="editInput form-control mb-2"> <button class='update btn btn-success btn-sm'>Update</button></li>`;
      }

      let allUpdate = document.querySelectorAll(".update");
      let updateArr = Array.from(allUpdate);

      function insertList(data) {
        list.children[
          data
        ].outerHTML = `<li class="list-group-item"><h2 class='content'>${storeArr[el].title}</h2><input type="text" value='${storeArr[el].desc}' class="editInput form-control mb-2"> <button class='update btn btn-success btn-sm'>Update</button></li>`;
      }

      updateArr.map((item) => {
        item.addEventListener("click", function () {
          let updateValue = item.previousElementSibling.value;
          let descSpecialChar = updateValue.match(/[\W]/g);
          let alphabetDesc = updateValue.charAt(0).match(/[A-z]/g);
          let descSpace = updateValue.match(/[\s]/g);
          let arrs = [];
          let descDigit = updateValue.match(/[\d]/g);
          let specialCharTwo = [];
          let objs = {};

          if (descSpecialChar) {
            let counts = 0;
            descSpecialChar.map((elements) => {
              if (elements === " ") {
              } else {
                specialCharTwo[counts] = elements;
                counts++;
              }
            });
          }

          if (descSpace) {
            let arrays = updateValue.split("");
            arrays.map((els, index) => {
              if (els === " ") {
                let a = isNaN(updateValue.charAt(index + 1) - 1);
                let b = isNaN(updateValue.charAt(index - 1) - 1);
                if (a && b) {
                  arrs.push("ok");
                } else {
                  arrs.push("err");
                }
              }
            });
          }

          if (
            updateValue === "" ||
            descDigit !== null ||
            specialCharTwo.length > 0 ||
            !arrs.every((acd) => acd === "ok") ||
            alphabetDesc.includes("_")
          ) {
            objs.two = "false";
          } else {
            objs.two = "true";
          }

          if (objs.two === "true") {
            storeArr[el].desc = updateValue;
            count = 0;
            insertValue();
          } else {
            insertValue();
            updateInfo(el, updateValue, (a, b) => {
              let descSpecialChart = b.match(/[\W]/g);
              let descSpacet = b.match(/[\s]/g);
              let alphabetDesc = b.charAt(0).match(/[A-z]/g);
              let arrt = [];
              let descDigitt = b.match(/[\d]/g);
              let specialCharTwot = [];
              let objt = {};

              if (descSpecialChart) {
                let count = 0;
                descSpecialChart.map((el) => {
                  if (el === " ") {
                  } else {
                    specialCharTwot[count] = el;
                    count++;
                  }
                });
              }

              if (descSpacet) {
                let array = b.split("");
                array.map((el, index) => {
                  if (el === " ") {
                    let aa = isNaN(b.charAt(index + 1) - 1);
                    let bb = isNaN(b.charAt(index - 1) - 1);
                    if (aa && bb) {
                      arrt.push("ok");
                    } else {
                      arrt.push("err");
                    }
                  }
                });
              }

              if (
                b === "" ||
                descDigitt !== null ||
                specialCharTwot.length > 0 ||
                !arrt.every((acd) => acd === "ok") ||
                alphabetDesc.includes("_")
              ) {
                objt.two = "false";
              } else {
                objt.two = "true";
              }

              if (objt.two === "true") {
                storeArr[el].desc = b;
                count = 0;
                insertValue();
              }
            });
          }
        });
      });

      function updateInfo(arrayIndex, arrValue, defaults) {
        list.children[
          arrayIndex
        ].outerHTML = `<li class="list-group-item"><h2 class='content'>${storeArr[arrayIndex].title}</h2><input type="text" value='${arrValue}' class="editInput form-control mb-2">
        <h3 class="errOne">Error: Give a Description !</h3> <button class='update btn btn-success btn-sm'>Update</button></li>`;

        let lastbutton = document.querySelector(".update");
        lastbutton.addEventListener("click", function () {
          let lastValue =
            lastbutton.previousElementSibling.previousElementSibling.value;
          defaults(arrayIndex, lastValue);
        });
      }
    });
  });
}
