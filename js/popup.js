document.getElementById('button').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.bg-modal').addEventListener('click',
function(){
  document.querySelector('.bg-modal').style.display = 'none';
  event.preventDefault();
});
function pageRedirect() {
    window.location.replace("index.html");
}
setTimeout("pageRedirect()", 50000);
