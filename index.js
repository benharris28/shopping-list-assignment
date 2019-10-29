
// Form 
// Take value from form and store it as a variable
// Stop default function to prevent form from submitting

$(function() {
   $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    const listItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    
   

    // Create shopping list item
    // Append to ul 
    // Show alert if shopping item is empty

    if (listItem == "") {
        alert('Item must be more than 1 character');

    }

    else {

    $('.shopping-list').append(`<li><span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`);
    }
   });


// Delete shopping list items


   $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
   });

// Check shopping list item when button is clicked

   $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(this)
    .closest('li')
    .children('.shopping-item')
    .toggleClass('shopping-item__checked');
   });


});


