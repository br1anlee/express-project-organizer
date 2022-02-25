let express = require('express')
let db = require('../models')
let router = express.Router()

router.get('/', async (req,res) => {
    try {
        const categoryName = await db.category.findAll()
        res.render('./categories/index.ejs', {category: categoryName})
    } catch (err) {
      console.log(err)
    }
})


router.get('/:id', async (req, res) => {
  try {
    const foundAll = await db.category.findOne({
      where: {
        id: req.params.id
      },
      include: {
        project: db.project
      }
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
