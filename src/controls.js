let controls = {
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false,
  ArrowUp:false,
  ArrowDown:false,
  ArrowLeft:false,
  ArrowRight:false,
  addControls(){
    document.addEventListener('keydown',event=>{ 
      if(Object.keys(this).indexOf(`${event.code}`) !== -1){
      event.preventDefault()
      console.log(this[event.code])
      console.log(player.headPosition);
      this[event.code]=true;
      }
    })

    document.addEventListener('keyup',event =>{
      if(Object.keys(this).indexOf(`${event.code}`) !== -1){
        event.preventDefault()
        this[event.code]=false;
        console.log(this[event.code])
    }
  })
  }
}