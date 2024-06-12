const linksPreventDefault = document.querySelectorAll(".btnList a");

for (let i = 0, n = linksPreventDefault.length; i < n; i++) {
  linksPreventDefault[i].onclick = function (event) {
    event.preventDefault();
    return false;
  };
}
