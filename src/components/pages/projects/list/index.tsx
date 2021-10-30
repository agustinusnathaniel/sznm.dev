import { Box, Grid, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ProjectDetailWrapper from "components/projects/detail";
import { baseUrl } from "constants/baseUrl";
import { ProjectType } from "models/project";
import { sznmOgImage } from "utils/sznmOgImage";

import ProjectListBottomNav from "./BottomNav";

export type ProjectListProps = {
  featuredProjects: Array<ProjectType>;
};

const ProjectList = ({ featuredProjects }: ProjectListProps) => {
  const projects = featuredProjects.map((projectData) => {
    return (
      <ProjectDetailWrapper
        projectData={projectData}
        source="Featured Projects"
        key={projectData.id}
      />
    );
  });

  return (
    <>
      <NextSeo
        title="Projects"
        canonical={`${baseUrl}/projects`}
        openGraph={{
          title: "Projects | sozonome",
          images: [
            {
              url: sznmOgImage("Projects"),
              alt: "Projects | sozonome og-image",
            },
          ],
        }}
      />

      <Box marginBottom={8}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
      </Box>

      <Grid gap={6} marginBottom={8}>
        {projects}
      </Grid>

      <ProjectListBottomNav />
    </>
  );
};

export default ProjectList;
