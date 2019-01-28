const express = require('express')
const Router = express.Router()

const conn = require('../utils/db')

Router.get('/cities', (req, res, next) => {
  const sql = `SELECT * FROM cities`

  conn.query(sql, (error, results, fields) => {
    res.json({
      data:results
    })
  })
})

Router.get('/categories', (req, res, next) => {
  const sql = `SELECT * FROM categories`

  let data = {
    title: "home"
  }

  conn.query(sql, (error, results, fields) => {
    data.categories = results.filter(result => result.parent_id === null)
    data.categories.map(parent => {
      let subcat = results.filter(result => {
        if (result.parent_id === parent.id){
          return result
        }
      })
      parent.subcat = subcat
    })


    res.json(
      data
    )
  })
})

//Grabs subcat listing
Router.get('/listings/:slug', (req, res, next) => {
  const sql = `select l.listing_name, l.text, l.id, c.parent_id as parent_id
  from listings l
  left join categories c ON l.category_id = c.id
  where c.slug = ?`
  

  conn.query(sql, [req.params.slug], (error, results, fields) => {
    console.log(results)
    res.json(results)
  })
})

Router.post('/listings', (req, res, next) => {
  const sql = `
  INSERT INTO listings (listing_name, coverphoto, text, city_id, category_id)
  VALUES ( ?, ?, ?, ?, ? )
  `
  const values = [req.body.listingName, req.body.coverphoto, req.body.text, req.body.cityId, req.body.categoryId]

  conn.query(sql, values, (err, results, fields) => {
    res.json({message: 'Inserted'})
  })
})


module.exports = Router
