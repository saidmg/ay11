export default defineNuxtLink({
    componentName: "MyCustomLink",
    activeClass: "bg-gray-200 font-bold",
    exactActiveClass: "bg-white-200 font-medium px-2",
  });


// prefetchedClass: process.env.NODE_ENV === 'development'
//   ? 'prefetched'
//   : undefined,
//   componentName?: string;
//   externalRelAttribute?: string;
//   activeClass?: string;
//   exactActiveClass?: string;
//   prefetchedClass?: string;
//   trailingSlash?: 'append' | 'remove'