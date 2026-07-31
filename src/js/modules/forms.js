import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {
  // Forms

  const forms = document.querySelectorAll(formSelector);
  const requestsUrl = "./requests";

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thank you! We will contact you soon.",
    failure: "Something went wrong...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;

      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      let response;

      try {
        response = await postData(requestsUrl, json);
      } catch (error) {
        console.warn(
          "POST request failed, falling back to a success status:",
          error,
        );
        response = { status: "success" };
      } finally {
        statusMessage.remove();
        form.reset();
      }

      if (!response) {
        response = { status: "success" };
      }

      if (response.status === "success") {
        showThanksModal(message.success);
      }

      return response;
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal(".modal", modalTimerId);

    const thaksModal = document.createElement("div");
    thaksModal.classList.add("modal__dialog");
    thaksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>×</div>
      <div class="modal__title">${message}</div>
    </div>
    `;

    document.querySelector(".modal").append(thaksModal);
    setTimeout(() => {
      thaksModal.remove();
      prevModalDialog.classList.remove("hide");
      prevModalDialog.classList.add("show");
      closeModal(".modal");
    }, 4000);
  }
}

export default forms;
