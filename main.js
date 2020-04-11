function addFrameSound(event) {
    const redframe = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const sounds = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    redframe.classList.add('playing');
    sounds.play();
    sounds.currentTime = 0;
  }
window.addEventListener("keydown", addFrameSound);


function removeFrameSound() {
    const removeredframe = document.getElementsByClassName("key");
    for (let div of removeredframe) {
      div.classList.remove('playing'); // クラスを取り除く
    }  
}
window.addEventListener("keyup", removeFrameSound);

//how...どういう風に消したいか
//when/where/howを気にする