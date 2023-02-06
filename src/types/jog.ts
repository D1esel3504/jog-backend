import { Types } from 'mongoose';

export interface IJog {
    name: string,
	userId: Types.ObjectId,
    start?: string,
    end?: string
}