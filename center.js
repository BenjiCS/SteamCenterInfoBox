window.addEventListener("DOMContentLoaded", (event) => {
  let centerText = document.querySelector("#centerText");

  centerText.addEventListener("click", () => {
    if (document.getElementById("showcase_8_notes").value == "") {
        let borderText = document.querySelector("#borderText");

        borderText.style.borderColor = "red";
        document.querySelector("#showcase_8_notes").placeholder = "Pls enter any text before trying to center";
        setTimeout(() => {
            borderText.style.borderColor = "";
          document.querySelector("#showcase_8_notes").placeholder = "Enter your text here";
        }, 5000);
    } else {
      function getTextWidth(text, font) {
        var canvas =
          getTextWidth.canvas ||
          (getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
      }
      var strr = "";
      var strr_in = document
        .getElementById("showcase_8_notes")
        .value.split("\n");
      document.getElementById("showcase_8_notes").value = "";
      strr_in.forEach(function (sttr_this) {
        var cleanString = sttr_this.replace(/\[(.*?)\]/g, "");
        cleanString = cleanString.replace(/\:(.*?)\:/g, "");
        strr = "";
        var str_width = getTextWidth(cleanString, "13px Arial");
        for (var i = 0; i < parseInt((600 - str_width) / 4 / 4); i++)
          strr += "⠀";
        strr += sttr_this;
        document.getElementById("showcase_8_notes").value += strr + "\n";
      });
    }
  });

  let centerTitle = document.querySelector("#centerTitle");

  centerTitle.addEventListener("click", () => {
    if (document.getElementById("title").value == "") {
      let borderTitle = document.querySelector("#borderTitle");

      borderTitle.style.borderColor = "red";
      document.querySelector("#title").placeholder = "Pls enter a title before trying to center";
      setTimeout(() => {
        borderTitle.style.borderColor = "";
        document.querySelector("#title").placeholder = "Enter a title";
      }, 5000);
    } else {
      function getTextWidth(text, font) {
        var canvas =
          getTextWidth.canvas ||
          (getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
      }
      var strr = "";
      var strr_in = document.getElementById("title").value.split("\n");
      document.getElementById("title").value = "";
      strr_in.forEach(function (sttr_this) {
        var cleanString = sttr_this.replace(/\[(.*?)\]/g, "");
        cleanString = cleanString.replace(/\:(.*?)\:/g, "");
        strr = "";
        var str_width = getTextWidth(cleanString, "13px Arial");
        for (var i = 0; i < parseInt((600 - str_width) / 4.4 / 4.4); i++)
          strr += "⠀";
        strr += sttr_this;
        document.getElementById("title").value += strr;
      });
    }
  });
});
