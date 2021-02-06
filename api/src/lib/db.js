// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()


// which instantiates the Prisma database client. You are free to send additional options,
// if necessary. You can use this directory for other code related to the API side that doesn't fit in functions or services.
