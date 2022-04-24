import { IPost, ITheme } from 'src/app/interfaces';

export interface IUser {
    username: string,
    email: string,
    password: string,
    tel: string,
    _id: string,
    themes: ITheme,
    posts: IPost
}