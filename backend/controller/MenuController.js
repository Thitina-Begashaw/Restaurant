import menu from "../model/MenuSchema.js"
import cloudinary from "../utility/cloudinary.js";
const createMenu = async (req, res) => {
  const { Title, Description, Price} = req.body;

  let imageUrl = null;
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "menus", 
      });
      imageUrl = {
       url: result.secure_url
      };
    } catch (error) {
      console.error(error);
      return res.status(500).json("Error uploading image to Cloudinary");
    }
  }


  try{
    const Menu = await menu.create({Title , Description, Price , image:imageUrl })
    res.status(200).json(Menu)
  }

    catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Failed to add menu",
      });
  }
  
  }


  // get all menu
const getAllMenu = async (req, res) => {
  try {
    const Menu = await menu.find().sort({ createdAt: -1 });
    res.status(200).json(Menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to retrieve menu items. Please try again later.",
    });
  }
};
// update menu  
const updateMenu = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No menu item with that id" });
  }

  try {
    const updatedMenu = await menu.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: "No menu item with that id" });
    }
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the menu item" });
  }
};

const deleteMenu = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("No menu item with that id");

  try {
    const Menu = await menu.findByIdAndDelete({ _id: id });
    res.status(200).json(Menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete the menu item." });
  }
};

export { getAllMenu, createMenu, updateMenu, deleteMenu };