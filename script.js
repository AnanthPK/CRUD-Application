let nametagcalling = document.getElementById("name");
      let mobiletagcalling = document.getElementById("mobile");
      let btntagcalling = document.getElementById("btn");
      let datadivtagcalling = document.getElementById("datadiv");

      //   function for button action
      btntagcalling.addEventListener("click", function crudOperationName() {
        let newdiv = document.createElement("div");
        // console.log(newdiv);
        datadivtagcalling.appendChild(newdiv);

        // name
        let namenewinputtagcreation = document.createElement("input");
        namenewinputtagcreation.value = nametagcalling.value;
        namenewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(namenewinputtagcreation);

        // mobile
        let mobilenewinputtagcreation = document.createElement("input");
        mobilenewinputtagcreation.value = mobiletagcalling.value;
        mobilenewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(mobilenewinputtagcreation);

        // update
        let editbutton = document.createElement("button");
        editbutton.innerHTML = "Edit";
        newdiv.appendChild(editbutton);

        editbutton.addEventListener("click", () => {
          namenewinputtagcreation.removeAttribute("readonly", "readonly");
          mobilenewinputtagcreation.removeAttribute("readonly", "readonly");
        });

        // save
        let savebutton = document.createElement("button");
        savebutton.innerHTML = "Save";
        newdiv.appendChild(savebutton);

        savebutton.addEventListener("click", () => {
          newdiv.appendChild(namenewinputtagcreation);
          namenewinputtagcreation.setAttribute("readonly", "readonly");
          mobilenewinputtagcreation.setAttribute("readonly", "readonly");
        });

        // delete
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "Delete";
        newdiv.appendChild(deletebtn);

        deletebtn.addEventListener("click", () => {
          newdiv.style.display = "none";
        });
      });