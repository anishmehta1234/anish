const express = require('express')
const router = express.Router()
const contactModels = require('../Models/Contact')


router.post('/addContact',async (req,res)=>{
   try{
      const data = new contactModels ({
         fullname:req.body.fullname,
         email:req.body.email,
         mobileNo:req.body.mobileNo
      })

      const newContact = await data.save()
      res.status(200).json({
         msg:newContact
      })
   }
   catch(err)
   {
      console.log("something is wrong")
   console.log(err)

   res.status(500).json({
      error:err
   })
   }
})

router.get('/all-contact',async(req,res)=>{
       try{

         const data = await contactModels.find().select('_id fullname mobileNo')
       res.status(200).json({
         allData:data
       })
 }
       catch(err)
       {
   console.log(err)
   res.status(500).json({
      err:err
   })

   
       }
      
})

// contact get bt id 
router.get('/id/:contactId',async(req,res)=>{
   try
   {
     const data = await contactModels.findById(req.params.contactId)
     res.status(200).json({
      contact:data
     })
   }
   catch(err)
   {
     console.log(err)
   }
})

//delete contact by id

router.delete('/delete/:contactId',async(req,res)=>{
   try{
     const deleteData = await contactModels.deleteOne({_id:req.params.id})
     res.status(200).json({
      delete:"sucessfully delete"
     })
   }
   catch(err)
   {
      console.log(err)
      res.status(500).json({
         err:err
      })
   }
})

//update by id

router.put('/update/:id',async(req,res)=>{
   try
   {
    const data = {
      fullname:req.body.fullname,
      email:req.body.email,
      mobileNo:req.body.mobileNo
    }
   const uData = await contactModels.findByIdAndUpdate(req.params.id,data,{new:true})
   res.status(200).json({
      msg:uData
   })
   }
   catch(err)
   {
      console.log(err)
      res.status(500).json({
         err:err
      })
   }
})

module.exports = router