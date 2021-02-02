function remove(id) {

    if (confirm('Are you sure to remove this item?')) 
    {
        var x = document.getElementById(id);
        x.outerHTML = '';
    }
}


document.getElementById('main-button').onclick = () => {

    document.getElementById('temp').innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">ADD NEW ITEM</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <img id="add-img" src="./img/ao-7.webp">
            <img id="icon-camera" src="./img/icon-camera.webp">
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" required>
            <hr>
            <input id="item-name" type="text" placeholder="Enter your item name">
            <p id='level-form'>Favorite level:
              <select name="EightiesFave">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </p>

          </div>


          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" onclick='seclect_cancel()'>Cancel</button>
            <button type="button" class="btn btn-dark" data-dismiss="modal" onclick='seclect_add()'>Add</button>
          </div>



        </div>
      </div>
    </div>`;
}

function seclect_add()
{
    let item = document.getElementById("temp").innerHTML = '';
    alert('Successfully!');
}

function seclect_cancel()
{
    if (confirm('Are you sure to cancel?')) 
    {
      let item = document.getElementById("temp").innerHTML = '';
      let drop = document.getElementsByTagName('div');
      drop[drop.length - 1].parentNode.removeChild(drop[drop.length - 1]);
    }
}