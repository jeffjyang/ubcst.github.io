var ias = $.ias({
  container:  '.posts',
  item:       '.post-preview',
  pagination: '.pagination',
  next:       '.next'
});

// Add a loader image which is displayed during loading
ias.extension(new IASSpinnerExtension());

// Add a text when there are no more pages left to load
ias.extension(new IASNoneLeftExtension({text: "You reached the end"}));