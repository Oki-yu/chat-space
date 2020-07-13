$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat-info">
          <div class="chat-info__user__name">
             ${message.user_name}
          </div>
          <div class="chat-info__date">
            ${message.created_at}
          </div>
        </div>
          <div class="chat-message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>`
      return html;  
    } else {
      let html =
         `<div class="chat-info">
            <div class="chat-info__user__name">
              ${message.user_name}
            </div>
            <div class="chat-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>`
        return html;
      };
    } 
  
  $('.new-message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-message').append(html);
      $('form')[0].reset();
      $('.main-message').animate({ scrollTop: $('.main-message')[0].scrollHeight});
      $('.submit-btn').prop("disabled", false)
    })  
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});
