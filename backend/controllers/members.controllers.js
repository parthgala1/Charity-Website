import User from "../models/user.models.js";

export const getMembers = async (req, res) => {
  try {
    const members = await User.find({ member: { $ne: "Non-Member" } });
    if (!members || members.length === 0) {
      return res
        .status(404)
        .json({ message: "No members found in the database" });
    }
    res.status(200).json(members);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get members from the database" });
  }
};
