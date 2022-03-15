import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            let title = data[i].title;
            let description = data[i].description;
            let author = data[i].author;
            let imageUrl = data[i].imageUrl;
        
            articles[i] = new Article(title, description, author, imageUrl);
        }

        return articles;
    }
}