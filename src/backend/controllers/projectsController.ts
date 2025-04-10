import { Project } from "../models";

async function getProjects(company: String) {
  try {
    let project;

    if (company === "all") {
      project = await Project.find({});
    }

    project = await Project.find({ company: company });

    return {
      message: "Fetched Data Successfully",
      data: project,
      status: 200,
    };
  } catch (err) {
    console.error(err);
    return {
      message: "Internal Server Error",
      status: 500,
    };
  }
}

export default getProjects;
