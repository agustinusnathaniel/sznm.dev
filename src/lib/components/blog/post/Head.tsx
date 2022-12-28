import { Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";

import ShareButtons from "lib/components/shared/ShareButtons";
import Twemoji from "lib/components/Twemoji";
import { dateFormatLong } from "lib/utils/dateFormat";

type BlogPostHeadProps = {
  postData: Blog;
};

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Grid gap={2} marginBottom={12}>
      <Flex alignItems="center">
        <Box flexBasis={["80%"]}>
          <Heading as="h1" size="2xl" marginBottom={8}>
            <Balancer>{postData.title}</Balancer>
          </Heading>
          <Link href="/about" isExternal>
            <Text fontSize="sm">Agustinus Nathaniel</Text>
          </Link>

          <Text fontSize="xs">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
          </Text>
        </Box>

        <Flex flexBasis={["20%"]}>
          <Box marginLeft="auto" width="60%">
            <Twemoji emoji={postData.thumbnail ?? "📘"} />
          </Box>
        </Flex>
      </Flex>

      <ShareButtons title={`Check out this blog post: ${postData.title}`} />
    </Grid>
  );
};

export default BlogPostHead;
