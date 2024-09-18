import mongoose from "mongoose";

export interface Serials extends mongoose.Document {
  name: string;
  poster: string;
  actors: string[];
  description: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const SerialSchema = new mongoose.Schema<Serials>({
  name: {
    /* The name of this Serial */

    type: String,
    required: [true, "Please provide a name for this serial."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  poster: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  actors: {
    /* List of dietary needs, if applicable */

    type: [String],
  },
  description: {
    /* Url to pet image */

    required: [true, "Please provide an image url for this pet."],
    type: String,
  },
});

export default mongoose.models.Serial || mongoose.model<Serials>("Serial", SerialSchema);
