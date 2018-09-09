  var write = document.querySelector(".btn-write");
  var modal = document.querySelector(".modal");
  var close = document.querySelector(".modal-close");
  var formModal = document.querySelector(".write-us");
  var name = document.querySelector("[name=name]");
  var email = document.querySelector("[name=email]");
  var letter = document.querySelector("[name=letter]")
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
  write.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  });

  formModal.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        modal.classList.remove("modal-error");
      }
    }
  });