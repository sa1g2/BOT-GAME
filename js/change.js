document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
    console.log(this.value);
};