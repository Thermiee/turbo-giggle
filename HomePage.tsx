type HomePageProps = Pick<
 UseInfiniteScroll,
 "isLoading" | "loadMoreCallback" | "isLastPage"
> & {
 posts: BlogPost[];
};
 
export const HomePage = ({
 posts,
 isLoading,
 loadMoreCallback,
 isLastPage,
}: HomePageProps) => {
 return (
   <main className={styles.container}>
     <h1 className={styles.heading}>Infinite Scroll Demo</h1>
     <p>It is a very nice app</p>
     {posts.map((post) => (
       <div className={styles.blogPost} key={post.id}>
         <img src="https://picsum.photos/500" alt="random image" />
         <div>
           <h2>{post.title}</h2>
           <p>{post.description}</p>
         </div>
       </div>
     ))}
 
     <Loader
       isLoading={isLoading}
       isLastPage={isLastPage}
       loadMoreCallback={loadMoreCallback}
     />
   </main>
 );
};