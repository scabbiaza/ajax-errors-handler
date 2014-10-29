$(function(){
  $(document).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {
//    console.log('event', event);
//    console.log('jqXHR', jqXHR);
//    console.log('ajaxSettings', ajaxSettings);
//    console.log('thrownError', thrownError);

    // Possible values for thrownError argument are "timeout", "error", "abort", and "parsererror".
    // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status

    var message = ajaxSettings.url + ": ";
    if (thrownError == 'parsererror')   message += "Parsing request was failed.";
    else if (thrownError == 'timeout')  message += "Request time out.";
    else if (thrownError == 'abort')    message += "Request was aborted.";
    else if (jqXHR.status === 0)        message += "No connection.";
    else if (jqXHR.status)              message += "HTTP Error " + jqXHR.status + " – " + jqXHR.statusText + ".";
    else                                message += "Unknown error.";
    console.error(message);
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
