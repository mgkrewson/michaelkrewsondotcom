$(document).ready(() => {
  $('.portfolio-open').on('click', function (e) {
    // console.log($(this).dataset.title);
    const title = $(this).data('title');
    const imgUrl = $(this).data('image');
    const url = $(this).data('url');
    const description = $(this).data('description');
    const modal = $('#portfolio-modal');
    
    modal.find('.modal-site-title').text(title);
    modal.find('.modal-site-image').attr('src', imgUrl);
    modal.find('.modal-site-url').attr('href', url);
    modal.find('.modal-site-description').text(description);
    modal.modal();
  });
});

