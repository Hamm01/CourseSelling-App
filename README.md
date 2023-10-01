## Course Selling Application

### TechStack Involved

1. NextJs 13 (Frontend , backend)
2. TypeScript
3. Tailwind
4. MongoDb
5. Recoil
6. Zod

### Latest App router used to make client side pages, and backend in NextJs

Steps involved

![Settings for project after running command](https://i.imgur.com/nUOeSWw.png)

Additional libraries used in project

```bash
  npm i axios bcryptjs jsonwebtoken react-hot-toast mongoose recoil
```

## Homepage

### In this milestone -1

Production URL [Geniusground.com](https://geniusground.com/)
Last commit was on main : [Github](https://github.com/Hamm01/CourseSelling-App/commit/4700f697462f25d8cbc1752d5a62bc779fa77f6a)

1.  App router used but components are not seperated in different folders
2.  Mongodb used as for DB

### In the milestone -2 [Github commit](https://github.com/Hamm01/CourseSelling-App/commit/4283c1bac21d43a9f1bbe64d0e5cab381aa82ab9)

1. Divided all the ServerSide routes and functionality in /app directory
   all the components that will serve as client component are shifted in components folder in src

2. Recoil used for all the client components , the provider file is in component folder but used in page.tsx so that all the client components can used that recoil functionality

3. The homepage have merequest function used to serve the request on server. so that will save the extra hop for me request which intialy was done on homepage after page is loaded on browser

### In the Milestone-3

Added new respostiory: [Github Commit](https://github.com/Hamm01/CourseSellingNextAuth) and
Production URL: [CourseSelling-NextAuthApp](https://courseselling-nextauth.geniusground.com/)

This is 3rd part of Course Selling App using Nextjs-13.

1. User Authentication using Next-auth . Signup using credientials and signin using google
2. Used App router
3. Used prisma with postgres and schema is designed using it
4. Tailwind for UI
5. Recoil for State management
6. Backend written in Next also
