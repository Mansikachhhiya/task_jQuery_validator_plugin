
$(document).ready(function () {
  $('form').validate({
    
    rules: {
      fname: {
        required: true,
        minlength: 3,
        fname: true

      },
      lname: {
        required: true,
        minlength: 3,
        lname: true

      },
      staddress: {
        required: true,
        minlength: 3,
        staddress: true

      },
      staddress2: {
        required: true,
        minlength: 3,
        staddress2: true
      },
      city: {
        required: true,
        minlength: 2,
        city: true


      },
      state: {
        required: true,
        minlength: 2,
        state: true
      },
      zipcode: {
        required: true,
        minlength: 6,
        zipcode: true
      },
      phoneno: {
        required: true,
        tel: true
      },
      email: {
        required: true,
        email: true
      },
      gender: {
        required: true
      },

      feedback: {
        required: true,
        minlength: 2
      },
      suggestion: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      fname: {
        required: "please enter fristname",
        minlength: "Name should be at least 3 characters"
      },
      lname: {
        required: "please enter lastname",
        minlength: "Name should be at least 3 characters"
      },
      staddress: {
        required: "please enter address",
        minlength: "Address should be at least 3 characters"
      },
      staddress2: {
        required: "please enter address",
        minlength: "Address should be at least 3 characters"
      },
      city: {
        required: "please enter cityname",
        minlength: "city should be at least 2 characters"
      },
      state: {
        required: "please enter statename",
        minlength: "state should be at least 2 characters"
      },
      zipcode: {
        required: "please enter postal/zip code",
        minlength: "zipcode should be at least 6 characters"
      },
      phoneno: {
        required: "please enter phone number",
      
      },
      email: {
        required: "please enter email id",
        minlength: "In-valid email id"
      },
      feedback: {
        required: "please enter feedback",

      },
      suggestion: {
        required: "please enter suggestion",

      },
      gender: {
        required: "select gender"
      }



    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {

        error.insertAfter("#other");
      }
      else { // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    }


  })
  $.validator.addMethod('fname', function (value) {
    return /[a-zA-Z]$/.test(value);
  }, 'Please enter a valid name');
  $.validator.addMethod('lname', function (value) {
    return /[a-zA-Z]$/.test(value);
  }, 'Please enter a valid name');
  $.validator.addMethod('staddress', function (value) {
    return /[a-zA-Z0-9]$/.test(value);
  }, 'Please enter a address');
  $.validator.addMethod('staddress2', function (value) {
    return /[a-zA-Z0-9]$/.test(value);
  }, 'Please enter valid address');
  $.validator.addMethod('city', function (value) {
    return /[a-zA-Z]$/.test(value);
  }, "plase enter valid city");
  $.validator.addMethod('state', function (value) {
    return /[a-zA-Z]$/.test(value);
  }, "plase enter valid state");
  $.validator.addMethod('zipcode', function (value) {
    return /[0-9]$/.test(value);
  }, "plase enter valid zipcode");


})