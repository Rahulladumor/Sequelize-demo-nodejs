const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Gig = require('../models/Gigs')

//Get Gigs
router.get('/', (req, res) =>
  Gig.findAll().then(gigs => {
    console.log(gigs);
    res.sendStatus(200);
  }).catch(err => console.log(err))
);

//Add Gigs
router.get('/add', (req, res) => {
  // const data = {
  //   title: 'Rahul ladumor',
  //   description: 'sdkfndslkjfnsjfbskjfbsadkjfbsadkjfbsdajkfbsadjkfbsdajkfbasdjkfbasjkfbsdajkfbdsajkfbdsfjksbdf',
  //   budget: '$2009',
  // }

  const { title,description,budget } = data;
  Gig.create({
    title,
    description,
    budget
  })
  .then(gigs => res.redirect('/gigs'))
  .catch(err => console.log(err))

}
  
);
module.exports = router;