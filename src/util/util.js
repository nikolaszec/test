export const createDynamicInput = (type = "text", name) => {
  const newEl = document.createElement("input");
  newEl.setAttribute("type", type);
  newEl.setAttribute("name", name);
  newEl.addEventListener("keydown", () => setErrorText(""));
  return newEl;
};
export const addChildToElement = (parent, child) => {
  parent.appendChild(child);
};

export const getLoader = () => {
  const loader = document.createElement("div");
  loader.setAttribute("class", "loader");
  return loader;
};
export const removeLoader = () => {
  const loader = document.querySelector(".loader");
  loader.removeAttribute("class");
};
export const setErrorText = (text) => {
  const error = document.querySelector("#error-msg");
  error.textContent = text;
};

export const setActiveTab = (tab) => {
  const activeTab = document.querySelector(".active-tab");
  if (activeTab === null && activeTab !== tab) {
    tab.classList.add("active-tab");
  } else if (activeTab !== null && activeTab !== tab) {
    activeTab.classList.remove("active-tab");
    tab.classList.add("active-tab");
  }
};
