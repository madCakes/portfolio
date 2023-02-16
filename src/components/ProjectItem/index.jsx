import React from "react";

function ProjectItem({ title, imgUrl, stack, link }) {
  return (
    <img
      src={imgUrl}
      alt="portfolio"
      class="w-full h-36 md:h-48 object-cover cursor-pointer"
    />
  );
}

export default ProjectItem;
