class Coin{
  
}

class Quarter{
  private value: number = .25;
  get Value(){
    return this.value;
  }

  set Value(newValue: number){
    this.value = newValue;
  }
  getImageUrl(){
    return "img/Quarter.png";
  }
}

class Dime{
  private value = .10;
  get Value(){
    return this.value;
  }
  getImageUrl(){
    return "img/Dime.png";
  }
}



var coin = new Quarter();
coin.Value = .5;
