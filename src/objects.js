//DIALOG
function Speech(sid, sname, ssprite1, ssprite2) {
	this.speechId = sid;
	this.speechName = sname;
	this.speechSprite1 = ssprite1;
}

//characters list
doll1 = new Speech(0, 'Doll', 'character1'); 

function displayDoll1() { //displays character, speech bubble & character's name
	doll1SpeechChara = game.add.sprite(450, 220, doll1.speechSprite1)
	doll1SpeechName = game.add.text(190, 527, doll1.speechName + ':', { font: 'bold 16pt Lucida Sans', fill: TEXT_COLOR });
}

function hideDoll1() { //hides character, speech bubble & character's name
	doll1SpeechChara.destroy();
	doll1SpeechName.destroy();
}

// ITEM LIST
function Item(iname, isprite, x, y, istored, idescription) {
	this.itemName = iname;
	this.itemSprite = isprite;
	this.itemPosX = x;
	this.itemPosY = y;
	this.itemStored = istored; //is item in inventory? 
	this.itemDescription = idescription; //displayed on hover
}

teapot = new Item('Teapot', 'item2', 230, 240, false, 'A nice teapot full of hot tea.');
teacup = new Item('Teacup', 'item1', 465, 270, false, 'A small teacup. Empty.');

var ITEMS = [];
	ITEMS.push(teapot);
	ITEMS.push(teacup);

// NOT WORKING YET
//function itemProperties(){
	//for (ITEMS){
	//	this.itemSprite.inputEnabled = true;
	//	imagesItems = game.add.sprite(ITEMS[i].itemPosX, ITEMS[i].itemPosY, ITEMS[i].itemSprite);
	//	imagesItems.events.onInputOver.add(displaySpeech, this)
	//	imagesItems.events.onInputOut.add(hideSpeech, this);
	//	imagesItems.events.onInputDown.add(objectMenu, this);
	//};
//}