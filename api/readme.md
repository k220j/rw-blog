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
