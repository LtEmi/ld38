function itemInventory(){
	for (i in ITEMS){
		if (ITEMS[i].itemStored == false){
			ITEMSLIST[i].inputEnabled = true;
			ITEMSLIST[i].events.onInputOver.add(displayItemDescription, ITEMS[i]); //displays item description on hover
			ITEMSLIST[i].events.onInputOut.add(hideItemDescription, ITEMS[i]); //hides item description when hovering stops
			ITEMSLIST[i].events.onInputDown.add(objectMenu, ITEMS[i]); //interactions on click
		}
		else{
			ITEMSLIST[i].inputEnabled = true;
			hideItemDescription();
			ITEMSLIST[i].events.onInputDown.add(objectMenu, ITEMS[i]); //changes item behavior
			if (currentSpeech == 0){
				ITEMSLIST[i].events.onInputOver.add(displaySpeech, ITEMS[i]);
			}
			else{
				ITEMSLIST[i].events.onInputOut.add(hideSpeech, this);
			}
		}
	}
}

//function objectInInventory() {
//	this.input.enableDrag();
//	this.events.onDragStart.add(UIuseDisplay, this); //drag item to use it
//	this.events.onDragStop.add(UIuseHide, this]); //stop dragging item
//}