import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    console.log(prompt)
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.creditBalance == 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData()
    formData.append('prompt',prompt)

    const {data} = await axios.post('https://api.freepik.com/v1/ai/mystic',formData,{
      headers: {
          "x-freepik-api-key": process.env.API_KEY
        },
        responseType : 'arraybuffer'
    })

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;   

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { generateImage };
