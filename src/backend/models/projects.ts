import { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema<IProjects>({
    title: { type: String, required: true},
    description: { type: String, required: true},
    year: { type: String, required: true},
    technologies: { type: [String], required: true},
    category: { type: String, required: true},
    completed: { type: Boolean, required: true},
    company: { type: String, required: true},
    link: { type: String, required: false},
});


const Project = models.Officer || model<IProjects>("Project", ProjectSchema);
export default Project;

