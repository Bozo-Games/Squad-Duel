class card {
	constructor(json) {
		json = json === undefined ? {} : json;
		this.health = json.health === undefined ? 0 : json.health; 
		this.armor = json.armor === undefined ? 0 : json.armor; 
		this.speed = json.speed === undefined ? 0 : json.speed; 
		this.power = json.power === undefined ? 0 : json.power; 
		this.attack1 = json.attack1 === undefined ? 0 : json.attack1;
		this.attack2 = json.attack2 === undefined ? 0 : json.attack2;
		this.mouseHit = false;
	}
	
	draw() {
		var statHealth = "Health: " + this.health;
		var statArmor = "Armor: " + this.armor;
		var statSpeed = "Speed: " + this.speed;
		var statAttack = "Attack 1";
		var statAttack2 = "Attack 2";
		
		push();
		if(this.mouseHit) {
			//fill('#00ff00');
			scale(2,2);
		}
		rect(0, 0, 55, 80, 3);
		translate(0,0);
		text(statHealth, 0, 0);
		translate(0,14);
		text(statArmor,0,0);
		translate(0,14);
		text(statSpeed,0,0);
		rect(-2, 9, 50, 12, 1);
		translate(0,20);
		text(statAttack,0,0);
		rect(-2, 3, 50, 12, 1);
		translate(0,14);
		text(statAttack2,0,0);		
		pop();



	}
}