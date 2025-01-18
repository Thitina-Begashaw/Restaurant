import menu from "../model/MenuSchema"

const createMenu = async (req, res) => {
  const { Title, Description, Price , imageUrl } = req.body;
  try{
    const Menu = await menu.create({Title , Description, Price ,imageUrl})
    res.status(200).json(Menu)
  }

    catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Failed to add menu",
      });
  }
  
  }
