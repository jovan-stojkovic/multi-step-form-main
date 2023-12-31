//NEXT BUTTONS
const nextFirstPage = document.querySelector("#first-page-next-button");
const nextSecondPage = document.querySelector("#second-page-next-button");
const nextThirdPage = document.querySelector("#third-page-next-button");

//BACK BUTTONS
const backSecondPage = document.querySelector("#second-page-go-back");
const backThirdPage = document.querySelector("#third-page-go-back");
const backFourthPage = document.querySelector("#fourth-page-go-back");

//CONFIRM BUTTON
const confirmButton = document.querySelector("#confirm-button");

//SELECTORS
const firstOption = document.querySelector("#arcade-selector");
const secondOption = document.querySelector("#advanced-selector");
const thirdOption = document.querySelector("#pro-selector");

//PAGES
const pageOne = document.querySelector("#first-page-container");
const pageTwo = document.querySelector("#second-page-container");
const pageThree = document.querySelector("#third-page-container");
const pageFour = document.querySelector("#fourth-page-container");
const pageFive = document.querySelector("#fifth-page-container");

//STEPS
const stepOne = document.querySelector("#stepOne");
const stepTwo = document.querySelector("#stepTwo");
const stepThree = document.querySelector("#stepThree");
const stepFour = document.querySelector("#stepFour");

//INPUTS
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone-number");

//ERRORS
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const phoneNumberError = document.querySelector("#phone-number-error");

//PAYMENT TOGGLE
const paymentToggle = document.querySelector("#payment-toggle");
const textMonthly = document.querySelector("#monthly");
const textYearly = document.querySelector("#yearly");
const yearlyPriceInfos = document.querySelectorAll(".two-months");
const monthlyPrice = document.querySelectorAll(".price-info");
const yearlyPrice = document.querySelectorAll(".price-info-year");
const addonFirstOption = document.querySelector("#first-option");
const addonSecondOption = document.querySelector("#second-option");
const addonThirdOption = document.querySelector("#third-option");

//SUMMARY PAGE
const priceSummary = document.querySelector("#price-summary");
const totalPriceSummary = document.querySelector("#total-price");
const nameSummary = document.querySelector("#option-name");
const onlineSrvcValue = parseFloat(
  document.querySelector(".online-service-container").getAttribute("data-value")
);
const largerStorageValue = parseFloat(
  document.querySelector(".larger-storage-container").getAttribute("data-value")
);
const customizableValue = parseFloat(
  document
    .querySelector(".customizable-profile-container")
    .getAttribute("data-value")
);
const onlineSrvcPrice = document.querySelector(".online-service-price");
const largerStoragePrice = document.querySelector(".larger-storage-price");
const customizablePrice = document.querySelector(".customizable-profile-price");

const onlineSrvcContainer = document.querySelector(".online-service-container");
const largerStorageContainer = document.querySelector(
  ".larger-storage-container"
);
const customizableContainer = document.querySelector(
  ".customizable-profile-container"
);

//THE REST
const patern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const selectors = document.querySelectorAll(".selector");
const changeButton = document.querySelector("#change-button");
const separator = document.querySelector(".separator");

//THIRD PAGE CHECKBOXES
const firstCheckbox = document.querySelector("#cbx-1");
const secondCheckbox = document.querySelector("#cbx-2");
const thirdCheckbox = document.querySelector("#cbx-3");

selectors.forEach((button) => {
  button.addEventListener("click", () => {
    selectors.forEach((btn) => btn.classList.remove("focused"));
    button.classList.add("focused");
  });
});

const renderPrice = () => {
  const focusedOption = document.querySelector(".focused");
  const focusedPrice = parseFloat(focusedOption.getAttribute("data-value"));
  const focusedName = focusedOption.getAttribute("data-name");

  onlineSrvcPrice.innerText = `+$${onlineSrvcValue}/mo`;
  largerStoragePrice.innerText = `+$${largerStorageValue}/mo`;
  customizablePrice.innerText = `+$${customizableValue}/mo`;

  if (!paymentToggle.checked) {
    priceSummary.innerText = `$${parseFloat(focusedPrice)}/mo`;
    nameSummary.innerText = `${focusedName} (Monthly)`;
  } else if (paymentToggle.checked) {
    priceSummary.innerText = `$${parseFloat(focusedPrice) * 10}/yr`;
    nameSummary.innerText = `${focusedName} (Yearly)`;
  }

  if (firstCheckbox.checked && !paymentToggle.checked) {
    onlineSrvcContainer.classList.add("second-container-summing-up-active");
    separator.classList.add("separator-active");
  } else if (firstCheckbox.checked && paymentToggle.checked) {
    onlineSrvcContainer.classList.add("second-container-summing-up-active");
    separator.classList.add("separator-active");
    onlineSrvcPrice.innerText = "+$10/yr";
  }
  if (secondCheckbox.checked && !paymentToggle.checked) {
    largerStorageContainer.classList.add("second-container-summing-up-active");
    separator.classList.add("separator-active");
  } else if (secondCheckbox.checked && paymentToggle.checked) {
    largerStorageContainer.classList.add("second-container-summing-up-active");
    separator.classList.add("separator-active");
    largerStoragePrice.innerText = "+$20/yr";
  }

  if (thirdCheckbox.checked && !paymentToggle.checked) {
    customizableContainer.classList.add("second-container-summing-up-active");
    separator.classList.add("separator-active");
  } else if (thirdCheckbox.checked && paymentToggle.checked) {
    customizableContainer.classList.add("second-container-summing-up-active");
    separator.classList.add("separator-active");
    customizablePrice.innerText = "+$20/yr";
  }
};

const totalPriceFn = () => {
  let total;
  let period;
  let selectedPrice;

  if (!paymentToggle.checked) {
    period = "mo";
    if (firstOption.classList.contains("focused")) {
      selectedPrice = 9;
      if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 0 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 1 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 3 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 5 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 2 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 2 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 4 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 3 + selectedPrice;
      }
    } else if (secondOption.classList.contains("focused")) {
      selectedPrice = 12;
      if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 0 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 1 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 3 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 5 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 2 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 2 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 4 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 3 + selectedPrice;
      }
    } else if (thirdOption.classList.contains("focused")) {
      selectedPrice = 15;
      if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 0 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 1 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 3 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 5 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = 2 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 2 + selectedPrice;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 4 + selectedPrice;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = 3 + selectedPrice;
      }
    }
  } else if (paymentToggle.checked) {
    period = "yr";
    if (firstOption.classList.contains("focused")) {
      selectedPrice = 9;
      if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (0 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (1 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (3 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (5 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (2 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (2 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (4 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (3 + selectedPrice) * 10;
      }
    } else if (secondOption.classList.contains("focused")) {
      selectedPrice = 12;
      if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (0 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (1 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (3 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (5 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (2 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (2 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (4 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (3 + selectedPrice) * 10;
      }
    } else if (thirdOption.classList.contains("focused")) {
      selectedPrice = 15;
      if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (0 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (1 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (3 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (5 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        !thirdCheckbox.checked
      ) {
        total = (2 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (2 + selectedPrice) * 10;
      } else if (
        !firstCheckbox.checked &&
        secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (4 + selectedPrice) * 10;
      } else if (
        firstCheckbox.checked &&
        !secondCheckbox.checked &&
        thirdCheckbox.checked
      ) {
        total = (3 + selectedPrice) * 10;
      }
    }
  }

  totalPriceSummary.innerText = `+$${total}/${period}`;
};

paymentToggle.addEventListener("click", () => {
  paymentToggle.classList.toggle("right");
  paymentToggle.classList.toggle("left");
  let txtOptOne = addonFirstOption.innerText;
  addonFirstOption.innerText = txtOptOne == "+$1/mo" ? "+$10/yr" : "+$1/mo";

  let txtOptTwo = addonSecondOption.innerText;
  addonSecondOption.innerText = txtOptTwo == "+$2/mo" ? "+$20/yr" : "+$2/mo";

  let txtOptThree = addonThirdOption.innerText;
  addonThirdOption.innerText = txtOptThree == "+$2/mo" ? "+$20/yr" : "+$2/mo";

  textMonthly.classList.toggle("toggle-text-selected");
  textYearly.classList.toggle("toggle-text-selected");

  yearlyPriceInfos.forEach((paragraph) => {
    paragraph.classList.toggle("two-months-active");
  });

  monthlyPrice.forEach((info) => {
    info.classList.toggle("price-info-active");
  });

  yearlyPrice.forEach((info) => {
    info.classList.toggle("price-info-year-active");
  });
});

changeButton.addEventListener("click", () => {
  pageFour.classList.remove("single-page-container-active");
  pageTwo.classList.add("single-page-container-active");

  stepFour.classList.remove("number-active");
  stepTwo.classList.add("number-active");

  onlineSrvcContainer.classList.remove("second-container-summing-up-active");
  largerStorageContainer.classList.remove("second-container-summing-up-active");
  customizableContainer.classList.remove("second-container-summing-up-active");
  separator.classList.remove("separator-active");
});

//FIRST PAGE BUTTON(s) LOGIC

nextFirstPage.addEventListener("click", () => {
  if (
    nameInput.value &&
    emailInput.value.match(patern) &&
    phoneNumberInput.value.length > 6
  ) {
    pageOne.classList.remove("single-page-container-active");
    pageTwo.classList.add("single-page-container-active");

    stepOne.classList.remove("number-active");
    stepTwo.classList.add("number-active");
    nameError.innerText = "";
    emailError.innerText = "";
    phoneNumberError.innerText = "";
  } else if (!nameInput.value) {
    nameError.innerText = "This field is required";
  } else if (!emailInput.value) {
    nameError.innerText = "";
    emailError.innerText = "This field is required";
  } else if (!emailInput.value.match(patern)) {
    nameError.innerText = "";
    emailError.innerText = "Please enter a valid email address";
  } else if (!phoneNumberInput.value) {
    emailError.innerText = "";
    phoneNumberError.innerText = "This field is required";
  } else if (phoneNumberInput.value.length < 7) {
    emailError.innerText = "";
    phoneNumberError.innerText = "Please enter a valid phone number";
  }
});

//SECOND PAGE BUTTON(s) LOGIC
nextSecondPage.addEventListener("click", () => {
  pageTwo.classList.remove("single-page-container-active");
  pageThree.classList.add("single-page-container-active");

  stepTwo.classList.remove("number-active");
  stepThree.classList.add("number-active");
});

backSecondPage.addEventListener("click", () => {
  pageOne.classList.add("single-page-container-active");
  pageTwo.classList.remove("single-page-container-active");

  stepOne.classList.add("number-active");
  stepTwo.classList.remove("number-active");
});

//THIRD PAGE BUTTON(s) LOGIC
nextThirdPage.addEventListener("click", () => {
  renderPrice();
  totalPriceFn();

  pageThree.classList.remove("single-page-container-active");
  pageFour.classList.add("single-page-container-active");

  stepThree.classList.remove("number-active");
  stepFour.classList.add("number-active");
});

backThirdPage.addEventListener("click", () => {
  pageTwo.classList.add("single-page-container-active");
  pageThree.classList.remove("single-page-container-active");

  stepTwo.classList.add("number-active");
  stepThree.classList.remove("number-active");
});

//FOURTH PAGE BUTTON(s) LOGIC
confirmButton.addEventListener("click", () => {
  pageFour.classList.remove("single-page-container-active");
  pageFive.classList.add("last-container-active");
});

backFourthPage.addEventListener("click", () => {
  pageThree.classList.add("single-page-container-active");
  pageFour.classList.remove("single-page-container-active");

  stepThree.classList.add("number-active");
  stepFour.classList.remove("number-active");

  onlineSrvcContainer.classList.remove("second-container-summing-up-active");
  largerStorageContainer.classList.remove("second-container-summing-up-active");
  customizableContainer.classList.remove("second-container-summing-up-active");
  separator.classList.remove("separator-active");
});
