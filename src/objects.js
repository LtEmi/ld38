//DIALOG
function Speech(sid, sname, ssprite1, ssprite2) {
	this.speechId = sid;
	this.speechName = sname;
	this.speechSprite1 = ssprite1;
	this.speechSprite2 = ssprite2;
}

//characters list
doll1 = new Speech(0, 'BabyDoll', 'character1', 'bubble'); 

function displayDoll1() { //display character, speech bubble & character's name
	doll1SpeechChara = game.add.sprite(10, 300, doll1.speechSprite1)
	doll1SpeechBubble = game.add.sprite(180, 310, doll1.speechSprite2);
	doll1SpeechName = game.add.text(300, 300, doll1.speechName);
}

function hideDoll1() { //hide character, speech bubble & character's name
	doll1SpeechChara.destroy();
	doll1SpeechBubble.destroy();
	doll1SpeechName.destroy();
}

// ITEM LIST
function Item(iname, isprite, x, y) {
	this.itemName = iname;
	this.itemSprite = isprite;
	this.itemPosX = x;
	this.itemPosY = y;
}

teapot = new Item('Teapot', 'item2', 200, 130);
teacup = new Item('Teacup', 'item1', 400, 130);

var ITEMS = [];
	ITEMS.push(teapot);
	ITEMS.push(teacup);

//function itemProperties(){
	//for (ITEMS){
	//	this.itemSprite.inputEnabled = true;
	//	imagesItems = game.add.sprite(ITEMS[i].itemPosX, ITEMS[i].itemPosY, ITEMS[i].itemSprite);
	//	imagesItems.events.onInputOver.add(displaySpeech, this)
	//	imagesItems.events.onInputOut.add(hideSpeech, this);
	//	imagesItems.events.onInputDown.add(objectMenu, this);
	//};
//}