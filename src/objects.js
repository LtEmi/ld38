function Item(iid, iname, isprite, x, y) {
	this.itemId = iid;
	this.itemName = iname;
	this.itemSprite = isprite;
	this.itemPosX = x;
	this.itemPosY = y;
}

teapot = new Item(0, 'Teapot', 'item2', 200, 130); 
teacup = new Item(1, 'Teacup', 'item1', 400, 130); 