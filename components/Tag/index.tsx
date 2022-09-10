import { HStack, Tag as ChakraTag } from "@chakra-ui/react";
import React from "react";

interface BlogTags {
  tags: Array<string>;
}

export const Tag: React.FC<BlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={2}>
      {props.tags?.map((tag) => {
        return (
          <ChakraTag variant='solid' colorScheme='blue' key={tag}>
            {tag}
          </ChakraTag>
        );
      })}
    </HStack>
  );
};
