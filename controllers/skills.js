import { skills } from '../data/skills-data.js'
import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
  }

  function newSkill(req, res) {
    res.render('skills/new')
  }


export {
  index,
  newSkill as new
}