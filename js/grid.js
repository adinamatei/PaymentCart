document.addEventListener("DOMContentLoaded", function(event) {



	// Here start the button selected
	var btn = document.getElementsByClassName("btn");
	
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", clickBtn);
	}

	function clickBtn (event) {
		for (var i = 0; i < btn.length; i++) {
			btn[i].classList.remove("selected");
		}
		event.currentTarget.classList.add("selected");
	}



	// Here start the payment value selected
	var selectElem = document.getElementsByClassName("box");

	for (var i = 0; i < selectElem.length; i++) {
		
		var currentElement = selectElem[i];
		
		currentElement.addEventListener("click", function (event) {
			
			// deactivate the active box
			for (var i = 0; i < selectElem.length; i++) {
				selectElem[i].classList.remove("active");
			}

			// activate the box when click
			var target =  event.currentTarget;
			target.classList.add("active");
			// console.log(target);
			
			//Change the value using TagName or textContent

			// var targetValue = target.getElementsByTagName("A")[0];
			// var targetText = targetValue.childNodes[0].nodeValue;
			// console.log(targetText);

			var targetValue = target.textContent;
			
			// console.log(targetValue);

			var putAmount = document.getElementById("putAmount").textContent;
			
			if (targetValue === putAmount) {
				var newAmount = parseInt(prompt("Put amount"));
				
				if ((typeof newAmount == "number") && (newAmount > 0)) {
					targetValue = newAmount;
				}
				else{
					alert("Error, please insert a number!");
				}	
			}
			document.getElementById("change").innerHTML = targetValue + ".00" ;
		});
	}

	// Pay now button
	var payBtn = document.getElementById("payBtn");
	payBtn.addEventListener("click", function (event) {
		alert("Thank you for your payment!");
	});

});