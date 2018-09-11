  var link = document.querySelector(".btn-write");
  var modal = document.querySelector(".modal");
  var close = document.querySelector(".modal-close");
  var form = document.querySelector(".write-us");
  var username = modal.querySelector(".username");
  var email = modal.querySelector(".email");
  var letter = modal.querySelector(".letter")
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!username.value || !email.value || !letter.value) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("username", username.value);
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
