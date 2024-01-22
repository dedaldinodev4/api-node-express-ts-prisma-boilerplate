

export interface IResultPaginated {
  data: any;
  totalItems: number;
  return: object;
  paginator: {
    totalResults: number;
    pages: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    perPage: number;
    totalCurrentResults: number;
  }
}