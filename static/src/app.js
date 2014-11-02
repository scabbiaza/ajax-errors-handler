$(function(){
  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    jqXHR.fail(function(jqXHR, textStatus, errorThrown) {
//      console.log('options:', options);
//      console.log('jqXHR:', jqXHR);
//      console.log('textStatus:', textStatus);
//      console.log('errorThrown:', errorThrown);

      var message = options.url + ": ";
      if (textStatus == 'parsererror')    message += "Parsing request was failed – " + errorThrown;
      else if (errorThrown == 'timeout')  message += "Request time out.";
      else if (errorThrown == 'abort')    message += "Request was aborted.";
      else if (jqXHR.status === 0)        message += "No connection.";
      else if (jqXHR.status)              message += "HTTP Error " + jqXHR.status + " – " + jqXHR.statusText + ".";
      else                                message += "Unknown error.";
      console.error(message);
    });
  });


  $('button').click(function(){

    if ($(this).data('url').indexOf('parsererror') > 0) {
      $.ajax({
        url: $(this).data('url'),
        dataType: 'json'
      });
    } else if ($(this).data('url').indexOf('timeout') > 0) {
      $.ajax({
        url: $(this).data('url'),
        timeout: 1000
      });
    } else if ($(this).data('url').indexOf('abort') > 0) {
      var xhr = $.ajax({
        url: $(this).data('url'),
        timeout: 1000
      });
      xhr.abort();
    } else {
      $.ajax({
        url: $(this).data('url')
      });
    }
  })
});
