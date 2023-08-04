document.addEventListener('DOMContentLoaded', (event) => {
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
    }

    const focusAction = () => {
        iconClear.style.display = "none";
        input_field.style.backgroundColor = "white";
        myInput.style.backgroundColor = "white";
        input_field.style.border = "1px solid var(--shades-ink-100, #F1F2F4)";
        
    }

    const focusActionForSearchResult = () => {
        searchresultSearch.style.border = "1px solid var(--shades-ink-1100, #282D3E)"
    }

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
    }

    const blurActionForSearchResult = () => {
        if (searchResult.value.length == 0) {
            searchresultSearch.style.border = ""
        }
    }

    const clearAction = () => {
        myInput.value = "";
        iconClear.style.display = "none";
        input_field.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
        myInput.style.backgroundColor = "var(--shades-ink-100, #F1F2F4)";
        input_field.style.border = ""; // return the border to its original state
    }

    const openSearch = () => {
        searchContainer.style.display = "block";
        largeIconSearch.style.display = "none";
        largeIconClose.style.display = "block";
    }

    const closeSearch = () => {
        searchContainer.style.display = "none";
        largeIconSearch.style.display = "block";
        largeIconClose.style.display = "none";
    }

    myInput.addEventListener("input", inputAction);
    myInput.addEventListener("focus", focusAction);
    searchResult.addEventListener("focus", focusActionForSearchResult);
    searchResult.addEventListener("blur", blurActionForSearchResult);
    myInput.addEventListener("blur", blurAction);
    iconClear.addEventListener("click", clearAction);
    largeIconSearch.addEventListener("click", openSearch);
    largeIconClose.addEventListener("click", closeSearch);
});



