/* eslint-disable */
import Vue, { VNode } from 'vue';

declare global {
  type KeyPair = {
    [key: string]: any;
  };

  interface IPageResult<T> {
    page: number | string | null;
    count: number | string | null;
    previous: string | null;
    num_pages: number | string | null;
    next: string | null;
    results: Array<T>;
  }

  interface IResponseData {
    data: any;
    status: string | number;
    text: string;
  }

  namespace JSX {
    interface Element extends VNode { }
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
