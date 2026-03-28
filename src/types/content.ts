export interface AudioItem {
  title: string;
  file: string;
  text?: string;
}

export interface Category {
  slug: string;
  title: string;
  intro: string;
  icon: string;
  audios: AudioItem[];
}

export interface BookItem {
  title: string;
  description: string;
  audio: string;
}

export interface ContentData {
  categories: Category[];
  books: BookItem[];
}
