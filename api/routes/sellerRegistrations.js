const express = require('express');
const router = express.Router();
const Seller = require('../models/sellerRegistraion');
const Product = require('../models/product');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

function encrypt(pass){
  let mykey = crypto.createCipher('aes-128-cbc', 'djmakku');
  let encryptedPass = mykey.update(pass, 'utf8', 'hex');
  encryptedPass += mykey.final('hex');
  return encryptedPass
}

function decrypt(pass){
  let mydkey = crypto.createDecipher('aes-128-cbc', 'djmakku');
  let decryptedPass = mydkey.update(pass, 'hex', 'utf8')
  decryptedPass += mydkey.final('utf8');
  return decryptedPass
}

router.post('/forgotPassword', (req, res) => {
  if (req.body.email === '') {
    res.send('email required');
  }
  console.error(req.body.email);
  Seller.findOne({ email: req.body.email })
    .then((user) => {
      console.log("agaya", user)
      if (user === null) {
        console.error('email not in database');
        res.send({ resStatus: 'email not in db' });
      } else {
        const token = crypto.randomBytes(20).toString('hex');
        var myquery = { resetPasswordToken: token, resetPasswordExpires: Date.now() + 360000, };
        var newvalues = {
          $set: {
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 360000
          }
        }

        user.updateOne(myquery, newvalues, function (err, res) {
          if (err) throw err;
          console.log("1 document updated", res);
        });
        // user.updateOne({
        //   resetPasswordToken: token,
        //   resetPasswordExpires: Date.now() + 360000,
        // });
        console.log("user after", user)

        const transporter = nodemailer.createTransport({
          service: 'gmail',

          auth: {
            user: 'sbay.mrz@gmail.com',
            pass: 'sbay@mrz56'
          },

        });

        const mailOptions = {
          from: 'sbay.mrz@gmail.com',
          to: `${user.email}`,
          // to: 'muddabir22@gmail.com',
          subject: 'Link To Reset Password',
          text:
            'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
            + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
            + `https://sbay-mrz.herokuapp.com/reset/${token}\n\n`
            + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
        };

        console.log('sending mail');

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            console.error('there was an error: ', err);
          } else {
            console.log('here is the res: ', response);
            res.status(200).json({ resStatus: 'recovery email sent' });
          }
        });
      }
    });
});


router.post('/postseller', (req, res, next) => {

  Seller.find({}, function (err, users) {
    let flg = false;
    users.forEach(function (user) {
      if (user.email === req.body.email) {
        console.log(user)
        res.send({ userStatus: ' exist' })
        flg = true;
      }
    });
    if (flg == false) {

      let userObject = {
        name: encodeURIComponent(req.body.name),
        email: encodeURIComponent(req.body.email),
        contact: encodeURIComponent(req.body.contact),
        address: encodeURIComponent(req.body.address),
        password: encodeURIComponent(encrypt(req.body.password)),
      }

      const token = crypto.randomBytes(20).toString('hex');

      const transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
          user: 'sbay.mrz@gmail.com',
          pass:  'sbay@mrz56'
        },

      });

      const mailOptions = {
        from: 'sbay.mrz@gmail.com',
        to: decodeURIComponent(`${userObject.email}`),
        subject: 'Link To verify account',
        text:
          'You are receiving this because you (or someone else) have requested the verification of email for your account.\n\n'
          + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
          + `https://sbay-mrz.herokuapp.com/verificationSeller?name=${userObject.name}&email=${userObject.email}&password=${userObject.password}&contact=${userObject.contact}&address=${userObject.address}\n\n`
          + 'If you did not request this, please ignore this email.\n',
      };

      console.log('sending mail');
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error('there was an error: ', err);
          res.status(200).json({ userStatus: 'verification email not sent' });
        } else {
          console.log('here is the res: ', response);
          res.status(200).json({ userStatus: 'verification email sent' });
        }
      });

    }

  });

})

router.post('/emailVerification', (req, res, next) => {

  let userObject = {
    name: decodeURIComponent(req.query.name),
    email: decodeURIComponent(req.query.email),
    contact: decodeURIComponent(req.query.contact),
    address: decodeURIComponent(req.query.address),
    password: decodeURIComponent(req.query.password),
  }
  Seller.create(userObject).then(function (user) {

    console.log(user)
    res.send({
      user,
      userStatus: "account created"
    })
  }).catch(next)
})

router.get('/getsellers', (req, res, next) => {
  let i = 0;
  Seller.find({}, function (err, users) {
    var userMap = [];
    users.forEach(function (user) {
      userMap[i++] = user;
    });
    res.send(userMap);
  });
})

router.post('/getseller', (req, res, next) => {
  Seller.find({}, function (err, users) {
    let flg = false;
    users.forEach(function (user) {
      if (user.email === req.query.email) {

        if (decrypt(user.password) === req.query.password) {
          res.send({
            user,
            userStatus: ' exist'
          })
          flg = true;
        }
      }
    });
    if (flg == false) {
      res.send({ userStatus: " not exist" })
    }

  });
})


router.get('/:email&:password', (req, res, next) => {
  Seller.find({}, function (err, users) {
    let flg = false;

    users.forEach(function (user) {
      if (user.email === req.params.email) {

        if (decrypt(user.password) === req.params.password) {
          res.send({
            user,
            userStatus: 'exist'
          })
          flg = true;
        }
      }
    });
    if (flg == false) {
      res.send({ userStatus: "not exist" })
    }

  });
})

router.get('/:id', (req, res, next) => {

  Seller.findById(req.params.id)
    .then(docs => {
      if (!docs) { return res.status(404).end() }
      return res.status(200).json(docs)
    })
    .catch(err => next(err));
})


router.get('/products/:sid', (req, res, next) => {

  Product.findById(req.params.sid)
    .then(docs => {
      if (!docs) { return res.status(404).end() }
      return res.status(200).json(docs)
    })
    .catch(err => next(err));

})

router.get('/reset', (req, res) => {
  Seller.findOne({
    where: {
      resetPasswordToken: req.query.resetPasswordToken,
      resetPasswordExpires: {
        [Op.gt]: Date.now(),
      },
    },
  }).then((user) => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else {
      res.status(200).send({
        username: user.username,
        message: 'password reset link a-ok',
      });
    }
  });
})

router.get('/reset/:token', (req, res, next) => {
  Seller.find({}, function (err, users) {
    users.forEach(function (user) {

      if (user.resetPasswordToken === req.params.token) {
        res.send({
          userId: user._id,
          message: "password reset link a-ok"
        })
      }
    })
  });
})

router.patch('/sellerupdate/:updatedSellersId', (req, res, next) => {
  Seller.updateOne({ "_id": req.params.updatedSellersId.toString() },
    {
      $set: { "password": req.body.password }

    }).then(function (user) {
      res.send({
        user,
        message: 'hello chuchu'
      });
    })
});

router.patch('/updateSeller', (req, res, next) => {
  Seller.updateOne({ "_id": req.query.sellersId },
    {
      $set:
      {
        "name": req.body.name,
        //"email": req.body.email,
        "contact": req.body.contact,
        //"password": req.body.password,
        "address": req.body.address
      }
    }).then(function (user) {
      res.send(
        {
          updateStatus: 'user updated'
        }
      );
    })
});

router.patch('/:sellersId', (req, res, next) => {
  Seller.updateOne({ "_id": req.params.sellersId.toString() },
    {
      $set:
      {
        "name": req.body.name,
        "email": req.body.email,
        "contact": req.body.contact,
        "password": req.body.password,
        "address": req.body.address
      }
    }).then(function (user) {
      res.send({user,
      userMessage: 'agaya'});
    })
});

// router.patch('/:id', (req, res, next) => {
//   res.status(200).json({
//     message: "updated json"
//   })
// });

router.delete('/:id', (req, res, next) => {

  Seller.deleteOne({ "_id": req.params.id.toString() }).then(function (user) {
      res.send("sussessfull deleted");
  }).catch(next);
});

module.exports = router;