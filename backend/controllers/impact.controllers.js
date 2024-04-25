import Impact from "../models/impact.models.js";

import User from "../models/user.models.js";

export const createImpact = async (req, res) => {
  try {
    const { details, member } = req.body;
    // console.log(member);

    const user = await User.findOne({ name: member });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // console.log(user);

    const newImpact = new Impact({
      details,
      member: user._id,
    });

    await newImpact.save();

    res.status(201).json(newImpact);
  } catch (error) {
    console.log("Error in createImpact controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateImpact = async (req, res) => {
  try {
    const { id } = req.params;
    const { details } = req.body;

    const updatedImpact = await Impact.findByIdAndUpdate(
      id,
      { details },
      { new: true }
    );

    if (!updatedImpact) {
      return res.status(404).json({ message: "Impact not found" });
    }

    res.status(200).json(updatedImpact);
  } catch (error) {
    console.log("Error in updateImpact controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getImpact = async (req, res) => {
  try {
    const impacts = await Impact.find().populate("member");

    res.status(200).json(impacts);
  } catch (error) {
    console.log("Error in getImpacts controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteImpact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedImpact = await Impact.findByIdAndDelete(id);

    if (!deletedImpact) {
      return res.status(404).json({ message: "Impact not found" });
    }

    res.status(200).json({ message: "Impact deleted successfully" });
  } catch (error) {
    console.log("Error in deleteImpact controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
