function init()
{
    var canvas = document.getElementById("game");
		canvas.width = 150;
		canvas.height = 150;
    var cellSize = canvas.width / 4;
    var field = new game();
        field.mix(10);
        
    field.draw(context, cellSize);
};

function game()
{
	var cellViev = null;
	var numViev = null;
	var arr = [[1,2,3],[4,5,6],[7,8,9]];
	function getEmpty()
		for (var i = 0; i < 3; i++){
			for (var j = 0; j < 3; j++){
				if (arr[j][i] ===0) {
					return{"x":i;"y":j}
						    }
						    }
					    }
};

function getRandomBool() {
		if (Math.floor(Math.random() * 2) === 0) {
			return true;
		}
	}
	

        this.getClicks = function() {
		return clicks;
	};
	 
	this.move = function(x, y) {
		var nullX = getNull().x;
		var nullY = getNull().y;
		if (((x - 1 == nullX || x + 1 == nullX) && y == nullY) || ((y - 1 == nullY || y + 1 == nullY) && x == nullX)) {
			arr[nullY][nullX] = arr[y][x];
			arr[y][x] = 0;
			clicks++;
		}
	};
	
	this.victory = function() {
		var e = [[1,2,3], [4,5,6], [7,8,9]];
		var res = true;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if (e[i][j] != arr[i][j]) {
					res = false;
				}
			}
		}
		return res;
	};
	
	this.mix = function(stepCount) {
		var x,y;
		for (var i = 0; i < stepCount; i++) {
			var nullX = getNull().x;
			var nullY = getNull().y;
			var hMove = getRandomBool();
			var upLeft = getRandomBool();
			if (!hMove && !upLeft) { y = nullY; x = nullX - 1;}
			if (hMove && !upLeft)  { x = nullX; y = nullY + 1;}
			if (!hMove && upLeft)  { y = nullY; x = nullX + 1;}
			if (hMove && upLeft)   { x = nullX; y = nullY - 1;}
			if (0 <= x && x <= 3 && 0 <= y && y <= 3) {
				this.move(x, y);
			}
		}
		clicks = 0;
	};
	


	this.draw = function(context, size) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if (arr[i][j] > 0) {
					if (cellView !== null) {
						cellView(j * size, i * size);
					}
					if (numView !== null) {
						numView();
						context.fillText(arr[i][j], j * size + size / 2, i * size + size / 2);
					}
				}
			}
		}
	};

  function event(x, y) { 
		field.move(x, y);
		context.fillRect(0, 0, canvas.width, canvas.height);
		field.draw(context, cellSize);
		if (field.victory()) { 
            field.allert("You Win!");
            field.mix(300);
			context.fillStyle = "#222";
			context.fillRect(0, 0, canvas.width, canvas.height);
			field.draw(context, cellSize);
		}
	}
	canvas.onclick = function(e) { 
		var x = (e.pageX - canvas.offsetLeft) / cellSize | 0;
		var y = (e.pageY - canvas.offsetTop)  / cellSize | 0;
		event(x, y); 
	};
	}		
