document.addEventListener("DOMContentLoaded", (event) => {
  const input_field = document.getElementById("input_field");
  const myInput = document.getElementById("myInput");
  const iconClear = document.getElementById("iconClear");
  const largeIconSearch = document.getElementById("largeIconSearch");
  const largeIconClose = document.getElementById("largeIconClose");
  const searchContainer = document.getElementById("searchContainer");
  const searchresultSearch = document.getElementById("searchresultSearch");
  const searchResult = document.getElementById("searchResult");

  const inputAction = () => {
    if (myInput.value.length == 0) {
      iconClear.style.display = "none";
      input_field.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
      myInput.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
    } else {
      iconClear.style.display = "block";
      input_field.style.backgroundColor = "white";
      myInput.style.backgroundColor = "white";
      input_field.style.border = "1px solid var(--shades-ink-100, #F1F2F4)";
    }
  };

  const focusAction = () => {
    iconClear.style.display = "none";
    input_field.style.backgroundColor = "white";
    myInput.style.backgroundColor = "white";
    input_field.style.border = "1px solid var(--shades-ink-100, #F1F2F4)";
  };

  const focusActionForSearchResult = () => {
    searchresultSearch.style.border =
      "1px solid var(--shades-ink-1100, #282D3E)";
  };

  const blurAction = () => {
    if (myInput.value.length == 0) {
      iconClear.style.display = "none";
      input_field.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
      myInput.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
      input_field.style.border = ""; // return the border to its original state
      searchContainer.style.display = "none";
      largeIconSearch.style.display = "block";
      largeIconClose.style.display = "none";
    }
  };

  const blurActionForSearchResult = () => {
    if (searchResult.value.length == 0) {
      searchresultSearch.style.border = "";
    }
  };

  const clearAction = () => {
    myInput.value = "";
    iconClear.style.display = "none";
    input_field.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
    myInput.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
    input_field.style.border = ""; // return the border to its original state
  };

  const openSearch = () => {
    searchContainer.style.display = "block";
    largeIconSearch.style.display = "none";
    largeIconClose.style.display = "block";
  };

  const closeSearch = () => {
    searchContainer.style.display = "none";
    largeIconSearch.style.display = "block";
    largeIconClose.style.display = "none";
  };

  myInput.addEventListener("input", inputAction);
  myInput.addEventListener("focus", focusAction);
  // searchResult.addEventListener("focus", focusActionForSearchResult);
  // searchResult.addEventListener("blur", blurActionForSearchResult);
  myInput.addEventListener("blur", blurAction);
  iconClear.addEventListener("click", clearAction);
  largeIconSearch.addEventListener("click", openSearch);
  largeIconClose.addEventListener("click", closeSearch);

  myInput.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Go to searchresults.html
      window.location.href = "searchresults.html";
    }
  });

  window.addEventListener("resize", function () {
    // Get the current window width
    const windowWidth = window.innerWidth;

    // Check if the search container is open and the window width is greater than 1200px
    if (searchContainer.style.display === "block" && windowWidth > 1200) {
      // Close the search container
      closeSearch();
    }
  });

  // largeIconSearch.addEventListener("click", function () {
  //     // Go to searchresults.html
  //     window.location.href = 'searchresults.html';
  // });

  let dropdown = document.querySelector(".dropdown-btn");
  let dropdownContent = document.querySelector(".dropdown-content");
  let chevronIcon = document.getElementById("chevron-icon");

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
    toggleChevron();
  });

  document.addEventListener("click", function () {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
      toggleChevron();
    }
  });

  for (let item of dropdownContent.children) {
    item.addEventListener("click", function () {
      dropdown.textContent = this.textContent;
      dropdownContent.classList.remove("show");
      toggleChevron();
    });
  }

  function toggleChevron() {
    if (chevronIcon.classList.contains("icon-chevron-small-down")) {
      chevronIcon.classList.remove("icon-chevron-small-down");
      chevronIcon.classList.add("icon-chevron-small-up");
      // Replace SVG to Chevron Up SVG
      chevronIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46967Z" fill="#282D3E"/>
      </svg>`;
    } else {
      chevronIcon.classList.remove("icon-chevron-small-up");
      chevronIcon.classList.add("icon-chevron-small-down");
      // Replace SVG to Chevron Down SVG
      chevronIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L12 12.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967Z" fill="#282D3E"/>
      </svg>`;
    }
  }

  const burgerIcon = document.getElementById("burgerIcon");
  const closeBurgerIcon = document.getElementById("closeBurgerIcon");
  const menu = document.getElementById("menu");

  document.addEventListener("click", function (event) {
    // Get the current window size
    const windowWidth = window.innerWidth;

    // Check if the click is outside the menu, closeBurgerIcon and window size is mobile
    if (
      !menu.contains(event.target) &&
      !closeBurgerIcon.contains(event.target) &&
      windowWidth <= 768
    ) {
      closeMenu();
    }
  });

  burgerIcon.addEventListener("click", function (event) {
    // Open the menu
    openMenu();

    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
  });

  window.addEventListener("resize", closeMenu);

  function closeMenu() {
    // Hide the menu
    menu.style.display = "none";

    // Show the burger icon
    burgerIcon.style.display = "block";

    // Hide the close icon
    closeBurgerIcon.style.display = "none";
  }

  function openMenu() {
    // Open the menu
    menu.style.display = "block";

    // Hide the burger icon
    burgerIcon.style.display = "none";

    // Show the close icon
    closeBurgerIcon.style.display = "block";
  }

  // closeBurgerIcon.addEventListener("click", () => {
  //   // Close the menu
  //   menu.style.display = "none";

  //   // Show the burger icon
  //   burgerIcon.style.display = "block";

  //   // Hide the close icon
  //   closeBurgerIcon.style.display = "none";
  // });

  closeBurgerIcon.addEventListener("click", function (event) {
    // Close the menu
    closeMenu();

    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
  });

  const menu_change_input_color = document.getElementById(
    "menu-change-input-color"
  );
  const menu_trigger = document.getElementById("menu-trigger");

  menu_trigger.addEventListener("click", () => {
    // Open the menu
    menu_change_input_color.style.backgroundColor = "white";
    menu_trigger.style.backgroundColor = "white";

    // Hide the burger icon
    menu_change_input_color.style.border = "1px solid black";
  });

  menu_trigger.addEventListener("blur", () => {
    // Open the menu
    menu_change_input_color.style.backgroundColor = "";
    menu_trigger.style.backgroundColor = "";

    // Hide the burger icon
    menu_change_input_color.style.border = "";
  });

  const switchLang = document.querySelector("#switch-lang");
  const selectedLang = document.querySelector("#selected-lang");
  const languageOptions = document.querySelectorAll(".language-option");

  // Toggle the open class when switchLang is clicked
  switchLang.addEventListener("click", function () {
    switchLang.classList.toggle("open");
  });

  // Update selectedLang when a languageOption is clicked
  languageOptions.forEach(function (languageOption) {
    languageOption.addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      selectedLang.textContent = lang;
    });
  });

  // JavaScript
  // Select the icon

  const mobilelogo = document.getElementById("mobile-logo");

  // Listen for resize events
  window.addEventListener("resize", function () {
    // If the viewport is between 320px and 1000px wide
    if (
      window.matchMedia("(min-width: 320px) and (max-width: 1000px)").matches
    ) {
      // Show the icon
      burgerIcon.style.display = "block";
      mobilelogo.style.display = "block";
    } else {
      // Otherwise, hide the icon
      burgerIcon.style.display = "none";
      mobilelogo.style.display = "none";
    }
  });

  window.addEventListener("resize", function () {
    // Window width is greater than 1200px
    if (window.innerWidth > 1200) {
      closeMenu();
      closeSearch();
      // Hide the burger icon
      burgerIcon.style.display = "none";
    }
    // Window width is between 1000px and 1200px
    else if (window.innerWidth > 1000 && window.innerWidth <= 1200) {
      closeMenu();
      closeSearch();
      // Hide the burger icon
      burgerIcon.style.display = "none";
    }
    // Window width is between 320px and 1000px
    else if (window.innerWidth >= 320 && window.innerWidth <= 1000) {
      // Make sure that the burger icon is visible
      burgerIcon.style.display = "block";
    }
  });

  // Run the function once at the start to account for the current viewport size
  window.dispatchEvent(new Event("resize"));

  window.addEventListener("scroll", function () {
    // Close the menu and search when scrolling.
    closeMenu();
    closeSearch();
    // If window width is less than or equal to 1000px, make sure the burger icon is visible.
    if (window.innerWidth <= 1000) {
      burgerIcon.style.display = "block";
    }
    // If window width is more than 1000px, make sure the burger icon is hidden.
    else {
      burgerIcon.style.display = "none";
    }
  });

  document.getElementById("date").addEventListener("click", function () {
    document.getElementById("date-dropdown").classList.toggle("show");
  });

  document.getElementById("category").addEventListener("click", function () {
    document.getElementById("category-dropdown").classList.toggle("show");
  });

  document.querySelectorAll("#date-dropdown a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var year = this.textContent;
      document.getElementById("date").childNodes[0].nodeValue = year + " ";
      document.getElementById("date-dropdown").classList.toggle("show");
    });
  });

  document.querySelectorAll("#category-dropdown a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var category = this.textContent;
      document.getElementById("category").childNodes[0].nodeValue =
        category + " ";
      document.getElementById("category-dropdown").classList.toggle("show");
    });
  });

  var modal = document.getElementById("modal-proc");
  var btn = document.getElementById("open-modal-proc");
  var span = document.getElementById("close-modal-proc");

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
