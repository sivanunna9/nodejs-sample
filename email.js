var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
        user: 'sivabghj@gmail.com',
	    pass: 'sivaarjun@143'
	      }
      });

      var mailOptions = {
        from: 'sivabghj@gmail.com',
	  to: 'kommalapudikchaitanya@yahoo.com',
	    subject: 'Sending Email using Node.js',
	      text: 'That was easy!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
		    console.log(error);
		      } else {
		          console.log('Email sent: ' + info.response);
			    }
		    });
