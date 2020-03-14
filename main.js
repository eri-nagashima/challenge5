function addFrameSound(event) {
    const redframe = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const sounds = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    redframe.classList.add("playing");
    sounds.play();
    sounds.currentTime = 0;
  }
window.addEventListener("keydown", addFrameSound);


function removeFrameSound() {
    const removeredframe = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    removeredframe.classList.remove("playing");
}
window.addEventListener("keyup", removeFrameSound);