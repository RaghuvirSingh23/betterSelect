const markInstance = new Mark(document.body);
let lastSelectedText = "";
let popupDiv = null;

function removePopup() {
  if (popupDiv && popupDiv.parentNode) {
    popupDiv.parentNode.removeChild(popupDiv);
    popupDiv = null;
  }
}

function clearHighlights() {
  markInstance.unmark();
}

function showPopup(range) {
  removePopup();
  const rect = range.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return;
  const div = document.createElement("div");
  div.className = "selectionPopup";
  div.style.top = `${window.scrollY + rect.top - 30}px`;
  div.style.left = `${window.scrollX + rect.right - 10}px`;
  div.style.cursor = "pointer";
  div.textContent = "H";
  div.addEventListener("click", () => {
    removePopup();
    clearHighlights();
    markInstance.mark(lastSelectedText, {
      element: "span",
      className: "highlighted-match",
      caseSensitive: false,
      accuracy: "partially",
      separateWordSearch: false
    });
  });

  document.body.appendChild(div);
  popupDiv = div;
}

function handleSelection() {
  removePopup();
  const sel = window.getSelection();
  if (!sel) return;
  const text = sel.toString().trim();
  if (!text) {
    lastSelectedText = "";
    return;
  }
  lastSelectedText = text;
  const range = sel.getRangeAt(0);
  if (range && !range.collapsed) showPopup(range);
}

document.addEventListener("mouseup", () => setTimeout(handleSelection, 10));
document.addEventListener("keyup", () => setTimeout(handleSelection, 10));

document.addEventListener("mousedown", (evt) => {
  if (popupDiv && !popupDiv.contains(evt.target)) {
    removePopup();
  }
});

window.addEventListener("beforeunload", () => {
  clearHighlights();
  removePopup();
});
