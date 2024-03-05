const Category = require("../models/categoryModel");
const slugify = require("slugify");
const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: "name is required",
      });
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "category already exist",
      });
    }
    const category = await new Category({
      name,
      slug: slugify(name),
    }).save();
    res.status(200).send({
      success: true,
      message: "category was successfully added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in category",
      error,
    });
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};

// get all category controller
// ======================================

const getCategoriesController = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).send({
      success: true,
      message: "All categories are successfully found",
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error  while getting categories",
      error,
    });
  }
};

// ===========================
// SINGLE CATEGORIES
// ===========================

const singleCategoryController = async (req, res) => {
   try {
    const {slug}=req.params
    const category=await Category.findOne({slug})
    res.status(200).send({
        success:true,
        message:"successfully got single category",
        category
    })
   } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        error,
        message:"Error on getting single categories"
    })
   } 
};
// =================
// DELETE CATEGORY
// ===============
const deleteCategoryController=async(req,res)=>{
    try {
        const {id}=req.params
       await Category.findByIdAndDelete(id)
       res.status(200).send({
        success:true,
        message:"successfully deleted"

       })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"DELETION OF CATEGORY FAILED DUE TO SERVER ERROR"
        })
    }
}
module.exports = {
  createCategoryController,
  updateCategoryController,
  getCategoriesController,
  singleCategoryController,deleteCategoryController
};
