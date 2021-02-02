
/* modal appear when web onload */

  $(window).on('load',function(){
	$('#modal-announce').modal('show');
});


function search() {
	$("input").keydown(function(event) { 
		$(".btn-showmore").hide();

		if (event.keyCode == 13) {

			let value = $("input").val();
			let type = typeof value;

			if (value.includes("happy")) {
				$(".itemBox").hide('500');
				$(".type2").show('1000');
				$(".type3").show('1000');
			}

			else if (value.includes("sad")) {
				$(".itemBox").hide('500');
				$(".type-black").show('1000');
			}
			
			else if (value.includes("go out")) {
				$(".itemBox").hide('500');
				$(".type2").show('1000');
			}

			else if (value.includes("work") || value.includes("office")) {
				$(".itemBox").hide('500');
				$(".type1").show('1000');
			}

			else if (value.includes("dating")) {
				$(".itemBox").hide('500');
				$(".type3").show('1000');
			}

			else if (value.includes("holiday")) {
				$(".itemBox").hide('500');
				$(".type4").show('1000');
			}

			else if (value.includes("event") || value.includes("party")) {
				$(".itemBox").hide('500');
				$(".type5").show('1000');
			}

			else if (value.includes("sport") || value.includes("walk")) {
				$(".itemBox").hide('500');
				$(".type6").show('1000');
			}

			else if (type == "string") {
				$(".itemBox").hide('500');
				$(".type3").show('1000');
				$(".type2").show('1000');
				$(".type6").show('1000');
				$(".type1").show('1000');
			}
		}
	});
}

search();

function like() {
	var likeBtn = document.querySelectorAll('.ico');
	
	for (let i = 0; i < likeBtn.length; i++) {
		
		likeBtn[i].addEventListener('click', function() {
			likeBtn[i].classList.toggle('liked');
			console.log("liked");
		});
	}
}
	
like();


/* favorite */

function favorite() {
	let modal = document.querySelectorAll(".modal-img");
	let num_modal = modal.length;

	let icon = document.querySelectorAll(".ico");

	let itemBox = document.querySelectorAll(".itemBox");

	let tab_favorite = document.querySelector("#nav-favorite");

	let div_product = tab_favorite.querySelector(".product");

	save_id = [];  
	
	for (let i = 0; i < icon.length; i++) {
		icon[i].addEventListener("click", function() {

			if (save_id.indexOf(i) == -1) {

				num_modal = num_modal + 1;
				let new_id = "modal_" + num_modal;
				var new_target = "#modal_" + num_modal;

				/* apppend itemBox  */
				let itemBox_append = itemBox[i].cloneNode(true);
				let img = itemBox_append.querySelector(".container .item-img img");
				let overlay = itemBox_append.querySelector(".container .item-img .overlay");
				img.setAttribute("data-target", new_target);
				overlay.setAttribute("data-target", new_target);
				div_product.appendChild(itemBox_append);

				/* apppend modal */
				let modal_append = modal[i].cloneNode(true);
				modal_append.setAttribute("id", new_id);
				modal_append.removeAttribute("style");   // cai nay lam close modal ko dc
				// set id icon cua modal
				let icon_modal = modal_append.querySelector(".ico");
				icon_modal.setAttribute("id", new_id);

				tab_favorite.appendChild(modal_append);

				
				// xu ly icon trong tab favorite
				let icon_favorite_tab = modal_append.querySelector(".ico");
				icon_favorite_tab.addEventListener("click", function() {
					icon_favorite_tab.classList.toggle('liked');

					// remove modal
					tab_favorite.removeChild(modal_append);
					$(modal_append).modal('hide');

					// remove itemBox
					let id_icon = "#" + icon_favorite_tab.id;
					let img_icon = tab_favorite.querySelectorAll(".product .itemBox .container .item-img img");	
					for (let j = 0; j < img_icon.length; j++) {
						let target = img_icon[j].getAttribute("data-target");
						if (target == id_icon) {
							let itemBox_of_icon = img_icon[j].closest(".product > .itemBox");
							div_product.removeChild(itemBox_of_icon);
							console.log(tab_favorite) // tab-favorite sau khi remove o tab-favorite
						}
					}

					// xoa id 
					let index_of_id = save_id.indexOf(i);
					if (index_of_id > -1) {
						save_id.splice(index_of_id, 1);
					}

					// update icon o tab-suggestion
					icon[i].classList.toggle('liked');
					

					// check empty cua div.product
					let count_child_product = div_product.childElementCount;
					console.log(count_child_product);

					if(count_child_product > 0) {
						$("#nav-favorite .is-empty").hide();
					}
					else {
						$("#nav-favorite .is-empty").show();
					}

				})

				// push id vao save_id sau khi append item
				save_id.push(i); 

				console.log(tab_favorite); // tab-favorite sau khi append

				
			}
			else {

	
				// remove modal
				let img = tab_favorite.querySelector(".itemBox .container .item-img img");	

				let id_modal_delete = img.getAttribute("data-target");
				let child_modal_remove = tab_favorite.querySelector(id_modal_delete);
				tab_favorite.removeChild(child_modal_remove);

				// remove itemBox
				let id_itemBox_delete = itemBox[i].id;
				let string_id_itemBox_delete = "#" + id_itemBox_delete;
				let child_remove = tab_favorite.querySelector(string_id_itemBox_delete);
				div_product.removeChild(child_remove);

				// xoa id
				let index_of_id = save_id.indexOf(i);
					if (index_of_id > -1) {
						save_id.splice(index_of_id, 1);
					}

				console.log(tab_favorite); // tab-favorite sau khi remove o tab-suggestion*/

				
				
			}

			// check empty cua div.product
			let count_child_product = div_product.childElementCount;
			console.log(count_child_product);
			if(count_child_product > 0) {
				$("#nav-favorite .is-empty").hide();
			}
			else {
				$("#nav-favorite .is-empty").show();
			}
		})
	}
}

favorite();


/* show more */
function show_more() {
	$(".show-more").hide();
	$(".btn-showmore").click(function(){
		$(".show-more").show('1000');
		
		$('html, body').animate({ scrollTop: $('.show-more').offset().top }, '400');

		$(".btn-showmore").hide();	
	});
}

show_more();

