


$("#reset").click(function() {
  
  $("input").val("");
  $("textarea").val("");
  $(".alert-success").hide();
  $('#RequestModal').on('hidden.bs.modal', function () {
 location.reload();
})

});

$("#close").click(function() {
  $("input").val("");
  $("textarea").val("");
  $(".alert-success").hide();
  $('#RequestModal').on('hidden.bs.modal', function () {
  location.reload();
})
});


$(function() {

  $("#requestForm input,#requestForm textarea").jqBootstrapValidation({
    preventSubmit:true,

  //  submitError: function($form, event, errors) {
        // additional error messages or events
  //  },

    submitSuccess:function($form, event){
      // Prevent spam click and default submit behaviour
      $("#btnSubmit").attr("disabled", true);
      event.preventDefault();

      // get values from FORM
      var name = $("input#name").val().trim();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      var Name = name;


      // Check for white space in name for Success/Fail message
      if (Name.indexOf(' ') >= 0) {
          Name = Name.split(' ').slice(0, -1).join(' ');
      }

    //  console.log("["+name+"]");
    //  console.log(Name);
    //  console.log(email);

    emailjs.send("gmail", "template_Msg", {"Name":Name,"email":email,"message":message}).then(function(response) {
      //send success
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      $("#btnSubmit").attr("disabled", false);
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success')
          .append("<p class='submit_msg'>Thank you, "+Name+", your message has been sent. </p>");
      $('#success > .alert-success')
          .append('</div>');


      $('#requestForm' ).each(function(){
        $("input").val("");
        $("textarea").val("");
      });

    }, function(err) {
      //send failure
      console.log("FAILED. error=", err);

      $("#btnSubmit").attr("disabled", true);
      $('#success').html("<div class='alert alert-danger'>");
      $('#success > .alert-danger').append("<div class='submit_msg d-flex'><i class='fa fa-frown-o fa-2x'></i> <div class='ml-3'>Sorry " + Name + ", it seems that the mail server is not responding.<br>Please try again later!</div>  </div>");
      // $('#success > .alert-danger').append("<p class='submit_msg'>");
      // $('#success > .alert-danger').append("<strong>Please try again later!</strong>");
      // $('#success > .alert-danger').append('</div>');

    });

  }
  })

});

$(function() {

  $("#msg input,#msg textarea").jqBootstrapValidation({
    preventSubmit:true,

  //  submitError: function($form, event, errors) {
        // additional error messages or events
  //  },

    submitSuccess:function($form, event){
      // Prevent spam click and default submit behaviour
      $("#btnSubmit").attr("disabled", true);
      event.preventDefault();

      // get values from FORM
      var name = $("input#contact_name").val().trim();
      var email = $("input#contact_email").val();
      var message = $("textarea#contact_message").val();
      var Name = name;


      // Check for white space in name for Success/Fail message
      if (Name.indexOf(' ') >= 0) {
          Name = Name.split(' ').slice(0, -1).join(' ');
      }


    emailjs.send("gmail", "template_Msg", {"Name":name,"email":email,"message":message}).then(function(response) {
      //send success
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      $("#btnSubmit").attr("disabled", false);
      $('#msg_success').html("<div class='alert alert-success'>");
      $('#msg_success > .alert-success')
          .append("<strong> Thank you, "+Name+", your message has been sent. </strong>");
      $('#msg_success > .alert-success')
          .append('</div>');


      $('#msg' ).each(function(){
        $("input").val("");
        $("textarea").val("");
      });

    }, function(err) {
      //send failure
      console.log("FAILED. error=", err);

      $("#btnSubmit").attr("disabled", true);
      $('#msg_success').html("<div class='alert alert-danger'>");
      $('#msg_success > .alert-danger').append("<strong> Sorry " + Name + ", it seems that my mail server is not responding. </strong>");

      $('#msg_success > .alert-danger').append("<strong>Please try again later!</strong>");
      $('#msg_success > .alert-danger').append('</div>');

    });

  }
  })

});
