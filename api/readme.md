API 셋업 순서

# Creating the Database Schema

 api/db/schema.prisma 추가

model Post {
id        Int      @id @default(autoincrement())
title     String
body      String
createdAt DateTime @default(now())
}

# Migrations
we'll want to snapshot this as a migration:

You've named the migration "create posts", and this is for your own benefit—Redwood doesn't care about the migration's name, it's just a reference for future developers.

After the command completes you'll see a new subdirectory created under api/db/migrations that has a timestamp and the name you gave the migration. It will contain a couple files inside (a snapshot of what the schema looked like at that point in time in schema.prisma and the directives that Prisma Migrate will use to make the change to the database in steps.json).

We apply the migration with another command:

``` shell
yarn redwood db save "create posts"

yarn rw db up
```

This will apply the migration
(which runs the commands against the database to create the changes we need)
which results in creating a new table called Post with the fields we defined above.

# GENERATE

yarn rw g scaffold post


So, Redwood just created all the pages, components and services necessary to perform all CRUD actions on our posts table. No need to open a database GUI or login through a terminal window and write SQL from scratch. Redwood calls these scaffolds. Pretty neat, right?

Here's what happened when we ran that yarn rw g scaffold post command:

Added an SDL file to define several GraphQL queries and mutations in api/src/graphql/posts.sdl.js
Added a services file in api/src/services/posts/posts.js that makes the Prisma Client JS calls to get data in and out of the database
Created several pages in web/src/pages:
EditPostPage for editing a post
NewPostPage for creating a new post
PostPage for showing the detail of a post
PostsPage for listing all the posts
Created routes for those pages in web/src/Routes.js
Created three cells in web/src/components:
EditPostCell gets the post to edit in the database
PostCell gets the post to display
PostsCell gets all the posts
Created four components also in web/src/components:
NewPost displays the form for creating a new post
Post displays a single post
PostForm the actual form used by both the New and Edit components
Posts displays the table of all posts
