export interface BlogPost {
 id: string;
 title: string;
 description: string;
}
 
export interface HomeProps {
 posts: BlogPost[];
}
 
 
export async function getServerSideProps() {
 const posts = [
   {
     id: uuidv4(), // creates a unique ID for the post
     title: "Blog post 1",
     description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae numquam repudiandae ab asperiores exercitationem nulla, enim debitis necessitatibus quaerat incidunt nesciunt. Soluta sapiente quisquam magni, quas odit tempora ullam!",
   },
   // more data here
 ];
 
 return {
   props: {
      posts,
      total: 20
   },
 };
}

const Home: NextPage<HomeProps> = ({ posts }) => {
 const {
   isLoading,
   loadMoreCallback,
   hasDynamicPosts,
   dynamicPosts,
   isLastPage,
 } = useInfiniteScroll(posts);

 return (
   <HomePage
     posts={hasDynamicPosts ? dynamicPosts : posts}
     isLoading={isLoading}
     loadMoreCallback={loadMoreCallback}
     isLastPage={isLastPage}
   />
 );
};
 
export default Home;