import React from 'react'
import { TagSphere } from "react-tag-sphere";

const Skill = () => {
    const tags = [
        'JavaScript', 'CSS', 'HTML',
        'C++', 'React',
       'Python', 'Java', 'git',
       'Node.js', 'MongoDB',
       'Express', 'MySQL', 'jQuery',
       'jwt', 'GraphQl', 'REST',
    ]

  return (
    <TagSphere
    style={{
        marginBottom: "2.5rem"
    }}
    tags={tags}
    radius={230}
  />
   )
}

export default Skill