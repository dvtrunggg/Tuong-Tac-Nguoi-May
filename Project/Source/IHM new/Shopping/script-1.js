var input = document.getElementById("searchBar");
      input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            if(input.value == "skirt") {
            event.preventDefault();
            document.getElementById("shopping").innerHTML = "";
            document.getElementById("shopping").innerHTML += `<div class="card" value="skirt">
            <img class="card-img-top" src="images/1.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-1.html">ZIP ACCENT WOOL GRANITE MINI SKIRT</a><br>
                  18,570,000 VND
              </p>
            </div>      
          </div>
  
          <div class="card"  value="skirt">
            <img class="card-img-top" src="images/2.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-2.html">SCULPTURAL MINI SKIRT</a><br>
                  19,350,000 VND
              </p>
            </div>      
          </div>
  
          <div class="card"  value="skirt">
            <img class="card-img-top" src="images/3.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-3.html">SAFETY PIN MAXI SKIRT</a><br>
                  29,500,000 VND
              </p>
            </div>      
          </div>
  
          <div class="card"  value="skirt">
            <img class="card-img-top" src="images/4.jpg" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-4.html">SAFETY PIN NAPPA LEATHER SKIRT</a><br>
                  43,110,000 VND
              </p>
            </div>      
          </div>
          
          <div class="card" value="skirt">
          <img class="card-img-top" src="images/18.webp" alt="Card image cap" height="632px" width="450px">
          <div class="card-body">
            <p class="card-text">
                <a href="cart-18.html">CADY MIDI SKIRT</a><br>
                20,220,000 VND
            </p>
          </div>      
        </div>`;
        }
        else if(input.value == "shirt" || input.value == "t-shirt" || input.value == "sweater")
        {
            event.preventDefault();
            document.getElementById("shopping").innerHTML = "";
            document.getElementById("shopping").innerHTML += ` <div class="card" value="t-shirt-sweater">
            <img class="card-img-top" src="images/5.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-5.html">MEDUSA SAFETY-PIN-T-SHIRT</a><br>
                  26,520,000 VND
              </p>
            </div>      
          </div>
  
          <div class="card" value="t-shirt-sweater">
            <img class="card-img-top" src="images/6.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-6.html">EMBROIDERED ROSES T-SHIRT</a><br>
                  15,580,000 VND
              </p>
            </div>      
          </div>
          
          <div class="card" value="t-shirt-sweater">
          <img class="card-img-top" src="images/17.webp" alt="Card image cap" height="632px" width="450px">
          <div class="card-body">
            <p class="card-text">
                <a href="cart-17.html">CASHMERE SWEATER</a><br>
                16,580,000 VND
            </p>
          </div>      
        </div>`
        }
        else if(input.value == "dress")
        {
            event.preventDefault();
            document.getElementById("shopping").innerHTML = "";
            document.getElementById("shopping").innerHTML += `<div class="card" value="dress">
            <img class="card-img-top" src="images/10.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-10.html">SAFETY PIN BELTED CRÊPE DE CHINE DRESS</a><br>
                  48,400,000 VND
              </p>
            </div>      
          </div>
          
          
        <div class="card" value="dress">
        <img class="card-img-top" src="images/11.webp" alt="Card image cap" height="632px" width="450px">
        <div class="card-body">
          <p class="card-text">
              <a href="cart-11.html">ZIP ACCENT NEOPRENE SLEEVELESS DRESS</a><br>
              58,010,000 VND
          </p>
        </div>      
      </div>

      <div class="card" value="dress">
        <img class="card-img-top" src="images/12.webp" alt="Card image cap" height="632px" width="450px">
        <div class="card-body">
          <p class="card-text">
              <a href="cart-12.html">MEDUSA ACCENT KNIT DRESS</a><br>
              23,760,000 VND
          </p>
        </div>      
      </div>

      <div class="card" value="dress">
      <img class="card-img-top" src="images/14.webp" alt="Card image cap" height="632px" width="450px">
      <div class="card-body">
        <p class="card-text">
            <a href="cart-14.html">ASYMMETRIC SILK EVENING DRESS</a><br>
            70,600,000 VND
        </p>
      </div>      
    </div>

    <div class="card" value="dress">
      <img class="card-img-top" src="images/15.webp" alt="Card image cap" height="632px" width="450px">
      <div class="card-body">
        <p class="card-text">
            <a href="cart-15.html">SAFARI MINI DRESS</a><br>
            49,720,000 VND
        </p>
      </div>      
    </div>
          `
        }
        else if(input.value == "pants" || input.value == "shorts")
        {
            event.preventDefault();
            document.getElementById("shopping").innerHTML = "";
            document.getElementById("shopping").innerHTML += `<div class="card" value="pants-shorts">
            <img class="card-img-top" src="images/13.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-13.html">SAFARI CRÊPE DE CHINE SHORTS</a><br>
                  17,240,000 VND
              </p>
            </div>      
          </div>         
          
        <div class="card" value="pants-shorts">
        <img class="card-img-top" src="images/16.webp" alt="Card image cap" height="632px" width="450px">
        <div class="card-body">
          <p class="card-text">
              <a href="cart-16.html">MEDUSA MOTIF STRAIGHT LEG JEANS</a><br>
              16,580,000 VND
          </p>
        </div>      
      </div>`
        }
        else 
        {
            event.preventDefault();
            document.getElementById("shopping").innerHTML = "";
            document.getElementById("shopping").innerHTML += ` <div class="card" value="jacket-coat">
            <img class="card-img-top" src="images/7.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-7.html">ZIP ACCENT WOOL FLARED COAT</a><br>
                  79,880,000 VND
              </p>
            </div>      
          </div>
  
          <div class="card" value="jacket-coat">
            <img class="card-img-top" src="images/8.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-8.html">ZIP ACCENT WOOL CAPE</a><br>
                  73,920,000 VND
              </p>
            </div>      
          </div>
  
          <div class="card" value="jacket-coat">
            <img class="card-img-top" src="images/9.webp" alt="Card image cap" height="632px" width="450px">
            <div class="card-body">
              <p class="card-text">
                  <a href="cart-9.html">NAPPA LEATHER BIKER JACKET</a><br>
                  92,480,000 VND
              </p>
            </div>      
          </div>
          `
        }
    }
      
});

document.getElementById('btnModal').addEventListener('click', function(){
  alert('Hello');
document.getElementById('noti').innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    ...
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
    </div>
</div>
</div>
</div>`;
})
