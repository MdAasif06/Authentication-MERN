import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    res.json({
      success: true,
      userData: {
        name: user.name,
        // email: user.email,
        // password:user.password,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
