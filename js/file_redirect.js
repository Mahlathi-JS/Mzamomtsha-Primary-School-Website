function pageRedirected() {
      window.location.href = "file.html";
}
function pageRedirect() {
      window.location.href = "fetch.html";
}
myForm.onsubmit = async (e) => {
  e.preventDefault();

let response = await fetch('/article/formdata/post/user-avatar', {
  method: 'POST',
  body: new FormData(formElem)
});

  let result = await response.json();

  alert(result.message);
};
