import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';
import { prisma } from '$lib/server/db';
