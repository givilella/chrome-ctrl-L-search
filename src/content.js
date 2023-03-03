// Function to focus on the search field
function focusSearchField() {
  var searchFields = document.querySelectorAll(
    'input[type="text"][placeholder*="search" i], input[type="text"][id*="search" i]'
  );

  if (searchFields.length > 0) {
    searchFields[0].focus();
  }
}

// Focus on search field on page load
// window.addEventListener('load', focusSearchField);

// Listen for "Ctrl+Shift+L" key combination to refocus search field
window.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.ctrlKey && event.shiftKey && event.key === 'L') {
    focusSearchField();
  }
});
