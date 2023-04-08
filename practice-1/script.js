// открываем модальную форму
let setP = document.querySelector(".setPartners");
let modal = document.querySelector(".modal--ten");
setP.onclick = function () {
  modal.classList.toggle("noVisible");
  setP.classList.toggle("noVisible");
};

// закрываем модалку по клику в другое место на экране

let overlay = document.querySelector(".overlay");
overlay.onclick = function () {
  modal.classList.toggle("noVisible");
  setP.classList.toggle("noVisible");
};
// кнопка отменить
let cancel = document.querySelector(".modal__buttCancel");

let inputi = document.querySelectorAll(".in");

cancel.onclick = function () {
  inputi.forEach((elem) => (elem.value = ""));

  document.getElementById("image1").setAttribute("src", "./img/Ellipse 44.png");
  let arr = document.querySelectorAll(".avaLabel");
  arr.forEach((elem) => elem.classList.remove("noVisible"));
};

// загрузка картинки

document.getElementById("file1").addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("image1").setAttribute("src", e.target.result);
      let arr = document.querySelectorAll(".avaLabel");
      arr.forEach((elem) => elem.classList.add("noVisible"));
    };
    reader.readAsDataURL(this.files[0]);
  }
});
// удаление картинки
let exit = document.querySelector(".modal__imgExit");
exit.onclick = function () {
  document.getElementById("image1").setAttribute("src", "./img/Ellipse 44.png");
  let arr = document.querySelectorAll(".avaLabel");
  arr.forEach((elem) => elem.classList.remove("noVisible"));
};
