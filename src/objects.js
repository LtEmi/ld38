//DIALOG
function Speech(sid, sname, simage1) {
	this.speechId = sid;
	this.speechName = sname;
	this.speechImage1 = simage1;
}

//characters list
doll1 = new Speech(0, 'Doll', 'character1'); 

function displayDoll1() { //displays character, speech bubble & character's name
	doll1SpeechChara = game.add.sprite(450, 220, doll1.speechImage1)
	doll1SpeechName = game.add.text(190, 527, doll1.speechName + ':', { font: 'bold 16pt Lucida Sans', fill: TEXT_COLOR });
}

function hideDoll1() { //hides character, speech bubble & character's name
	doll1SpeechChara.destroy();
	doll1SpeechName.destroy();
}

var SPEECHLIST = [];
	SPEECHLIST.push('This is a teapot.');
	SPEECHLIST.push('Nope. This is a teacup.');

// ITEM LIST
function Item(iorder, iimage, x, y, ix, iy, iscale, istored, idescription) {
	this.itemOrder = iorder;
	this.itemImage = iimage;
	this.itemPosX = x;
	this.itemPosY = y;
	this.itemInventoryPosX = ix; //position in inventory
	this.itemInventoryPosY = iy;
	this.itemInventoryScale = iscale; //scale in inventory
	this.itemStored = istored; //is item in inventory? 
	this.itemDescription = idescription; //displayed on hover
}

teapot = new Item(0, 'item0', 230, 240, 40, 90, 0.8, false, 'A nice teapot full of hot tea.');
teacup = new Item(1, 'item1', 465, 270, 50, 50, 0.7, false, 'A small teacup. Empty.');

var ITEMS = [];
	ITEMS.push(teapot);
	ITEMS.push(teacup);
	