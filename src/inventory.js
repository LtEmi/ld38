function itemInventory0(){
	if (teapot.itemStored == false){	
		teapotSprite.inputEnabled = true;
		
		//itemActions(); todo
		teapotSprite.events.onInputOver.add(displaySpeech0, this); //displays item description on hover
		teapotSprite.events.onInputOut.add(hideSpeech, this); //hides item description when hovering stops
		teapotSprite.events.onInputDown.add(objectMenu0, this); //interactions on click
	}
	else{
		teapotSprite.inputEnabled = false;
	}
}

function itemInventory1(){	
	if (teacup.itemStored == false){
		teacupSprite.inputEnabled = true;
		
		//itemActions(); todo
		teacupSprite.events.onInputOver.add(displaySpeech1, this);
		teacupSprite.events.onInputOut.add(hideSpeech, this);
		teacupSprite.events.onInputDown.add(objectMenu1, this);
	}
	else {
		teacupSprite.inputEnabled = false;
	}
}