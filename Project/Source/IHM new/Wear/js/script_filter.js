
$(document).ready(function() {
	$('.list').click(function() {
	  const value = $(this).attr('data-filter');
	  $(".btn-showmore").hide();
	  
	  if (value == 'all') {
		$('.itemBox').show('1000');
		$(".btn-showmore").show();
		$(".show-more").hide();
	  }
	  else {
		$('.itemBox').not('.'+value).hide('500');
		$('.itemBox').filter('.'+value).show('1000');
	  }
	})

	$('.list').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
  })
  
  


/* search */

/*
function search() {
	let input = document.querySelector("#input");

	let  content = document.querySelector("#nav-suggestion");

	let img = content.querySelectorAll("#nav-suggestion img");

	input.addEventListener("keydown", function(event) {
		let key = event.key;
		//console.log(key);

		if (key == "Enter") {
			
			//content.innerHTML = "";
			//console.log(content.innerHTML);
			//document.getElementById("demo").innerHTML = "The pressed key was: " + input.value;

			content.appendChild(img[0].cloneNode(true));

			/*
			if (input.value == "happy") {
				for (let i = 0; i < img.length; i++) {
					if (img[i].classList.contains("happy")) {
						console.log(img[i]);
						var new_node = img[i].cloneNode(true);
						console.log(new_node);
						
						
					}
				}
			}

			content.appendChild(new_node);
			console.log(content);
			
		
			
		}
	});
}
search()


*/

