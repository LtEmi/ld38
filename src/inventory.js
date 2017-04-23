function itemInventory0(){
	if (teapot.itemStored == false){	
		teapotSprite.inputEnabled = true;
		
		//itemActions(); todo
		teapotSprite.events.onInputOver.add(displayItemDescription0, this); //displays item description on hover
		teapotSprite.events.onInputOut.add(hideItemDescription, this); //hides item description when hovering stops
		teapotSprite.events.onInputDown.add(objectMenu0, this); //interactions on click
	}
	else{
		teapotSprite.inputEnabled = true;
		hideItemDescription();
		teapotSprite.events.onInputDown.add(objectInInventory0, this); //changes item behavior
		if (currentSpeech == 0){
			teapotSprite.events.onInputOver.add(displaySpeech0, this);
		}
		else{
			teapotSprite.events.onInputOut.add(hideSpeech, this);
		}
	}
}

function itemInventory1(){	
	if (teacup.itemStored == false){
		teacupSprite.inputEnabled = true;
		
		//itemActions(); todo
		teacupSprite.events.onInputOver.add(displayItemDescription1, this);
		teacupSprite.events.onInputOut.add(hideItemDescription, this);
		teacupSprite.events.onInputDown.add(objectMenu1, this);
	}
	else {
		teacupSprite.inputEnabled = true;
		hideItemDescription();
		if (currentSpeech == 0){
			teacupSprite.events.onInputOver.add(displaySpeech1, this);
		}
		else{
			teacupSprite.events.onInputOut.add(hideSpeech, this);
		}
	}
}

function objectInInventory0() {
	teapotSprite.input.enableDrag();
	teapotSprite.events.onDragStart.add(UIuseDisplay0, this); //drag item to use it
	teapotSprite.events.onDragStop.add(UIuseHide0, this); //stop dragging item
}
function objectInInventory1() {
	teacupSprite.input.enableDrag();
	teacupSprite.events.onDragStart.add(UIuseDisplay1, this);
	teacupSprite.events.onDragStop.add(UIuseHide1, this);
}