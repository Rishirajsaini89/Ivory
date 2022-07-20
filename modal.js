
var modalwrap = null;
const showModal = (title, description)=> {
    if(modalwrap!==null){
        modalwrap.remove();
    }
    modalwrap = document.createElement('div');
    modalwrap.innerHTML =`
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  `;
  document.body.append(modalwrap);
  var modal = new bootstrap.Modal(modalwrap.querySelector('modal'),{});
//   modal.show();
//   var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
}